import { ValidationRules } from '@mate-academy/core';
import { RecruiterProfile } from '@/models/RecruiterProfile';
import { AuthUseCase } from '@/core';
import { RecruiterProfileStatusEnum } from '@/modules/recruiterProfile/recruiterProfile.typedefs';
import { RecruiterProfileEntity } from '@/modules/recruiterProfile/RecruiterProfile.entity';

export interface UpdateRecruiterProfileUseCaseOptions {
  position: string
  companyName: string
  city: string
}
export type UpdateRecruiterProfileUseCaseResult = RecruiterProfile;

type Options = UpdateRecruiterProfileUseCaseOptions;
type Result = UpdateRecruiterProfileUseCaseResult;

export class UpdateRecruiterProfileUseCase extends AuthUseCase<
  Options, Result
> {
  protected get validation(): ValidationRules<Options> {
    return {
      position: ['required', 'string'],
      companyName: ['required', 'string'],
      city: ['required', 'string'],
    };
  }

  private async createProfile() {
    return this.models.RecruiterProfile.create({
      userId: this.authUser.id,
      status: RecruiterProfileStatusEnum.Draft,
    });
  }

  private async resolveProfile() {
    const latestProfile = await this.dataLoaders.latestRecruiterProfileByUserId
      .load({ userId: this.authUser.id });

    if (!latestProfile) {
      return this.createProfile();
    }

    switch (latestProfile.status) {
      case RecruiterProfileStatusEnum.Draft: {
        return latestProfile;
      }

      case RecruiterProfileStatusEnum.OnReview: {
        await latestProfile.update({
          status: RecruiterProfileStatusEnum.Inactive,
        });

        return this.createProfile();
      }

      default: {
        return this.createProfile();
      }
    }
  }

  private static async updateProfileSlug(profile: RecruiterProfile) {
    const recruiterProfileEntity = new RecruiterProfileEntity(profile);

    await recruiterProfileEntity.generateSlug();
  }

  protected async run(options: Options): Promise<Result> {
    const profile = await this.resolveProfile();

    await profile.update(options);

    if (options.position || options.companyName) {
      await UpdateRecruiterProfileUseCase.updateProfileSlug(profile);
    }

    return profile;
  }
}
