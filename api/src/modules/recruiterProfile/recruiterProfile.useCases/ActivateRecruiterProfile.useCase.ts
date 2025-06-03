import { ValidationRules, AppEnvironments } from '@mate-academy/core';
import { RecruiterProfile } from '@/models/RecruiterProfile';
import { AuthUseCase } from '@/core';
import {
  RecruiterProfileActivated,
  RecruiterProfileApproved,
} from '@/modules/recruiterProfile/recruiterProfile.notificationTypes';
import { getHostUrl } from '@/helpers/getHostUrl';
import { RecruiterProfileService } from '@/modules/recruiterProfile/recruiterProfile.service';
import { RecruiterStatusUpdatedSubscriptionPayload } from '@/modules/recruiterProfile/recruiterProfile.resolvers/recruiterStatusUpdated.resolver';
import { RecruiterProfileEvents } from '@/modules/recruiterProfile/recruiterProfile.constants';
import { RecruiterProfileStatusEnum } from '@/modules/recruiterProfile/recruiterProfile.typedefs';

export type ActivateRecruiterProfileUseCaseOptions = unknown;
export type ActivateRecruiterProfileUseCaseResult = RecruiterProfile;

type Options = ActivateRecruiterProfileUseCaseOptions;
type Result = ActivateRecruiterProfileUseCaseResult;

export class ActivateRecruiterProfileUseCase extends AuthUseCase<
  Options, Result
  > {
  private readonly recruiterProfileService = this.makeService(
    RecruiterProfileService,
  )

  protected get validation(): ValidationRules<Options> | null {
    return null;
  }

  protected async run(): Promise<Result> {
    const profile = await this.recruiterProfileService
      .activateRecruiterProfile({
        userId: this.authUser.id,
        firstName: this.authUser.firstName,
        lastName: this.authUser.lastName,
      });

    const slackChannel = process.env.APP_ENV === AppEnvironments.Production
      ? 'huntd_profiles'
      : 'huntd_profiles_development';

    this.gateways.notifications.notify<RecruiterProfileApproved>({
      user_id: this.authUser.id,
      notification_uid: `recruiter_profile_approved|${Date.now()}`,
      channel: this.gateways.notifications.channels.Email,
      notification_type: 'PROFILE_APPROVED',
      message_data: {
        subject: `Your recruiter's profile approved!`,
        destination: this.authUser.email,
        type: 'recruiter',
        profile_link: `${getHostUrl()}/profile-preview/recruiter`,
      },
    });

    this.gateways.notifications.notify<RecruiterProfileActivated>({
      user_id: this.authUser.id,
      notification_uid: `recruiter_awaiting_profile_review|${Date.now()}`,
      channel: this.gateways.notifications.channels.Slack,
      notification_type: 'PROFILE_ACTIVATED',
      message_data: {
        subject: this.authUser.computedName,
        destination: slackChannel,
        icon: ':huntd-icon:',
        profile_type: 'recruiter',
        user_name: this.authUser.computedName,
        email: this.authUser.email,
        admin_link: `${getHostUrl()}/admin/plugins/profile-checker/recruiters`,
        impersonate_login_link: `${getHostUrl()}/sign-in-as-user?email=${this.authUser.email}`,
      },
    });

    this.pubSub.publish<RecruiterStatusUpdatedSubscriptionPayload>(
      RecruiterProfileEvents.StatusUpdated,
      {
        recruiterProfileStatusUpdated: profile,
      },
    );

    this.gateways.analytics.sendEvent({
      event: this.gateways.analytics.events.recruiterProfile
        .RecruiterProfileReviewed,
      userEmail: this.authUser.email,
      data: {
        slug: profile.slug,
        status: RecruiterProfileStatusEnum.Active,
        companyName: profile.companyName,
        city: profile.city,
      },
    });

    return profile;
  }
}
