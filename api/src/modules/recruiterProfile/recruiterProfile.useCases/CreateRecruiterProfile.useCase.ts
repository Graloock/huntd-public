import { ValidationRules } from '@mate-academy/core';
import { RecruiterProfile } from '@/models/RecruiterProfile';
import { AuthUseCase } from '@/core';
import { RecruiterProfileRepository } from '@/modules/recruiterProfile/recruiterProfile.repository';

export interface CreateRecruiterProfileUseCaseOptions {
  userId: number;
  position: string;
  companyName: string;
  city: string;
}
export type CreateRecruiterProfileUseCaseResult = RecruiterProfile;

type Options = CreateRecruiterProfileUseCaseOptions;
type Result = CreateRecruiterProfileUseCaseResult;

export class CreateRecruiterProfileUseCase extends AuthUseCase<
  Options, Result
> {
  private readonly recruiterProfileRepository = this.makeRepository(
    RecruiterProfileRepository,
  )

  protected get validation(): ValidationRules<Options> {
    return {
      userId: ['required', 'positive_integer'],
      position: ['required', 'string'],
      companyName: ['required', 'string'],
      city: ['required', 'string'],
    };
  }

  protected async run(options: Options): Promise<Result> {
    return this.recruiterProfileRepository.createInactiveProfile(options);
  }
}
