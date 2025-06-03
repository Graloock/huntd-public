import { ClientError, ClientErrorTypes } from '@mate-academy/core';
import { Op } from 'sequelize';
import { Repository } from '@/core/Repository';
import { RECRUITER_PROFILE_NOT_EXISTS } from '@/modules/recruiterProfile/recruiterProfile.constants';
import { RecruiterProfileErrors, RecruiterProfileStatusEnum } from '@/modules/recruiterProfile/recruiterProfile.typedefs';
import { RecruiterProfile } from '@/models/RecruiterProfile';

export class RecruiterProfileRepository extends Repository {
  async count(options: {userId: number}) {
    return this.models.RecruiterProfile.count({
      where: { userId: options.userId },
    });
  }

  async findLatestRecruiterProfile(options: {userId: number}) {
    return this.dataLoaders.latestRecruiterProfileByUserId.load({
      userId: options.userId,
    });
  }

  async getLatestRecruiterProfile(options: {userId: number}) {
    const profile = await this.dataLoaders.latestRecruiterProfileByUserId.load({
      userId: options.userId,
    });

    if (!profile) {
      this.throwNotFoundError(RECRUITER_PROFILE_NOT_EXISTS);
    }

    return profile;
  }

  async createInactiveProfile(options: {
    userId: number,
    position: string,
    companyName: string,
    city: string,
  }) {
    const { userId, position, companyName, city } = options;

    return this.models.RecruiterProfile.create({
      userId,
      position,
      companyName,
      city,
      status: RecruiterProfileStatusEnum.Inactive,
    });
  }

  async updateProfile(
    id: number,
    details: Partial<RecruiterProfile>,
  ) {
    const [count, updatedValues] = await this.models.RecruiterProfile.update(
      details,
      {
        where: { id },
        returning: true,
      },
    );

    if (count === 0) {
      this.throwNotFoundError(RECRUITER_PROFILE_NOT_EXISTS);
    }

    return updatedValues[0].get() as RecruiterProfile;
  }

  async deactivateAllActiveRecruiterProfiles(options:{
    userId: number,
  }) {
    await this.models.RecruiterProfile.update(
      { status: RecruiterProfileStatusEnum.Inactive }, {
        where: {
          userId: options.userId,
        },
      },
    );
  }

  async reviewRecruiterProfile(options: {
    userId: number,
    status: string,
    rejectReason?: string,
  }) {
    const profile = await this.models
      .RecruiterProfile.findByPk(options.userId, {
        include: [
          { model: this.models.User },
        ],
      });

    if (!profile) {
      throw new ClientError({
        message: 'Recruiter Profile not found',
        type: ClientErrorTypes.NotFound,
        fields: {
          id: options.userId,
        },
      });
    }

    await profile.update({
      status: options.status,
      rejectReason: options.status === RecruiterProfileStatusEnum.Active
        ? null
        : options.rejectReason,
    });

    return profile;
  }

  async updateStatusesNotificationTime(profileIds: number[]) {
    const [
      count,
    ] = await this.models.RecruiterProfile
      .update(
        {
          statusesNotificationSentAt: new Date(),
        },
        {
          where: { id: { [Op.in]: profileIds } },
          returning: true,
        },
      );

    if (count === 0) {
      this.throwNotFoundError(
        RecruiterProfileErrors.NotFound,
      );
    }

    return true;
  }
}
