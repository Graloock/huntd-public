import { ValidationRules } from '@mate-academy/core';
import { UseCase } from '@/core';
import { UserWithToken } from '@/modules/user/user.typedefs';

export type GetAdminUserUseCaseOptions = unknown;
export type GetAdminUserUseCaseResult = UserWithToken | null;

type Options = GetAdminUserUseCaseOptions;
type Result = GetAdminUserUseCaseResult;

export class GetAdminUserUseCase extends UseCase<Options, Result> {
  protected get validation(): ValidationRules<Options> {
    return {};
  }

  protected async run(): Promise<Result> {
    return this.adminUser;
  }
}
