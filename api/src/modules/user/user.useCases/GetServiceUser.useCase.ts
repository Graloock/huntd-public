import { ValidationRules } from '@mate-academy/core';
import { UseCase } from '@/core';
import { User } from '@/models/User';

export type GetServiceUserUseCaseOptions = unknown;
export type GetServiceUserUseCaseResult = User | null;

type Options = GetServiceUserUseCaseOptions;
type Result = GetServiceUserUseCaseResult;

export class GetServiceUserUseCase extends UseCase<Options, Result> {
  protected get validation(): ValidationRules<Options> {
    return {};
  }

  protected async run(): Promise<Result> {
    return this.serviceUser;
  }
}
