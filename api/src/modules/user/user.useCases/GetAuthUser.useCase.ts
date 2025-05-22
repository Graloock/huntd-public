import { ValidationRules } from '@mate-academy/core';
import { UseCase } from '@/core';
import { UserWithToken } from '@/modules/user/user.typedefs';

export type GetAuthUserUseCaseOptions = unknown;
export type GetAuthUserUseCaseResult = UserWithToken | null;

type Options = GetAuthUserUseCaseOptions;
type Result = GetAuthUserUseCaseResult;

export class GetAuthUserUseCase extends UseCase<Options, Result> {
  protected get validation(): ValidationRules<Options> {
    return {};
  }

  protected async run(): Promise<Result> {
    return this.authUser;
  }
}
