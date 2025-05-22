import { ValidationRules } from '@mate-academy/core';
import { UseCase } from '@/core';
import { User } from '@/models/User';

export type UpdateLastActionTimeUseCaseOptions = unknown;
export type UpdateLastActionTimeUseCaseResult = User | null;

type Options = UpdateLastActionTimeUseCaseOptions;
type Result = UpdateLastActionTimeUseCaseResult;

export class UpdateLastActionTimeUseCase extends UseCase<Options, Result> {
  protected get validation(): ValidationRules<Options> {
    return {};
  }

  protected async run(): Promise<Result> {
    if (this.adminUser) {
      return this.authUser;
    }

    if (this.authUser) {
      await this.authUser.update({
        lastActionTime: Date.now(),
      });
    }

    return this.authUser;
  }
}
