import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { analytics } from '@/controllers/analytics/analytics.client';
import { RecruiterProfileStatus } from '@/components/Profile/HiringManagementModule/RecruiterProfileStatus';
import { Router } from '@/controllers/i18n/i18n.client';
import typography from '@/ui/typography/typography.module.scss';
import { ProfileRoutes } from '@/controllers/router/router.constants';
import { UpdateRecruiterProfileMutationVariables, PrimaryProfile } from '@/controllers/graphql/generated';
import { useFlashMessage } from '@/controllers/flashMessage/flashMesage.hooks/useFlashMessage';
import { useTranslation } from '@/controllers/i18n/i18n.hooks/useTranslation';
import { Namespaces } from '@/controllers/i18n/i18n.typedefs';
import { processValidationErrors } from '@/controllers/form/form.utils/form.processValidationErrors';
import CandidateProfileModule
  from '@/components/Profile/CandidateProfileModule/CandidateProfileModule.module.scss';
import { FormField } from '@/components/FormElements/FormField';
import { useLatestRecruiterProfile } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useLatestRecruiterProfile';
import { InputText } from '@/components/FormElements/FormInputs/InputText';
import { useUpdateRecruiterProfile } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useUpdateRecruiterProfile';
import { WithLoader } from '@/ui/Loader/WithLoader';
import { useAuthUser } from '@/controllers/user/user.hooks/useAuthUser';
import { ProfileFormActions } from '../../ProfileFormActions';

type FormData = UpdateRecruiterProfileMutationVariables;

export const CompanyInfoForm = () => {
  const {
    errors, handleSubmit, setError, control, reset, formState,
  } = useForm<FormData>({
    mode: 'onBlur',
  });
  const [edited, setEdited] = useState(false);
  const [user] = useAuthUser();
  const isFirstTimeFillingProfile
    = user?.isFirstTimeFillingRecruiterProfile ?? false;

  const [updateProfile, { loading }] = useUpdateRecruiterProfile();

  const [profile, { loading: profileLoading }] = useLatestRecruiterProfile();

  const nextLink = `${ProfileRoutes.Contacts}?preview=recruiter`;

  const flashMessage = useFlashMessage();

  const { t } = useTranslation([
    Namespaces.Validations,
    Namespaces.Form,
    Namespaces.Profile,
  ]);

  const onSubmit = handleSubmit(async (data) => {
    const { position, companyName, city } = data;

    try {
      await updateProfile({
        variables: {
          position,
          companyName,
          city,
        },
        async update() {
          analytics.setUserProperties({
            primaryProfile: PrimaryProfile.Recruiter,
            companyName,
            city,
          });

          if (isFirstTimeFillingProfile) {
            await Router.push(nextLink);
          }
        },
      });
    } catch (error) {
      const validationErrors = processValidationErrors<
        UpdateRecruiterProfileMutationVariables
        >(error, setError);

      if (!validationErrors) {
        await flashMessage.postMessage({
          variables: {
            type: flashMessage.messageTypes.Error,
            text: t(`${Namespaces.Validations}:${error.message.toLowerCase()}`),
            heading: t(`${Namespaces.Validations}:validation_message_title`),
          },
        });
      }
    }
  });

  useEffect(() => {
    setEdited(formState.isDirty);
  }, [formState.isDirty]);

  return (
    <>
      <div className="grid-container mt-32">
        <div className="grid-x grid-margin-x">
          <div className="cell large-6 large-offset-3">
            <RecruiterProfileStatus className="mb-4" />

            <h1 className={cn(typography.smallHeading, 'c-semidark-chocolate mb-48')}>
              {t(`${Namespaces.Profile}:profile_recruiter_title`)}
            </h1>
          </div>
        </div>
      </div>

      <form
        className={CandidateProfileModule.form}
      >
        <WithLoader loading={profileLoading}>
          <div className="grid-container">

            <div className="grid-x grid-margin-x">
              <div className="cell large-6 large-offset-3">

                <FormField
                  label={{
                    for: 'position',
                    text: t(`${Namespaces.Form}:recruiter_position_label`),
                  }}
                  error={errors.position}
                  disabled={loading}
                  className="mb-24"
                  renderInput={(props) => (
                    <InputText
                      {...props}
                      validation={{
                        required: {
                          value: true,
                          message: 'role_is_required',
                        },
                      }}
                      defaultValue={profile?.position || ''}
                      name="position"
                      control={control}
                      placeholder={t(`${Namespaces.Form}:recruiter_position_placeholder`)}
                    />
                  )}
                />
              </div>

              <div className="cell large-3 large-offset-3">
                <FormField
                  label={{
                    for: 'companyName',
                    text: t(`${Namespaces.Form}:company_name_label`),
                  }}
                  error={errors.companyName}
                  disabled={loading}
                  className="mb-24"
                  renderInput={(props) => (
                    <InputText
                      {...props}
                      defaultValue={profile?.companyName || ''}
                      name="companyName"
                      control={control}
                      placeholder={t(`${Namespaces.Form}:company_name_label`)}
                      validation={{
                        required: {
                          value: true,
                          message: 'company_is_required',
                        },
                      }}
                    />
                  )}
                />
              </div>

              <div className="cell large-3">
                <FormField
                  label={{
                    for: 'city',
                    text: t(`${Namespaces.Form}:city_label`),
                  }}
                  error={errors.city}
                  disabled={loading}
                  className="mb-40"
                  renderInput={(props) => (
                    <InputText
                      {...props}
                      defaultValue={profile?.city || ''}
                      name="city"
                      control={control}
                      placeholder={t(`${Namespaces.Form}:city_label`)}
                      validation={{
                        required: {
                          value: true,
                          message: 'city_is_required',
                        },
                      }}
                    />
                  )}
                />
              </div>

              <ProfileFormActions
                handleSubmit={onSubmit}
                discardChanges={reset}
                loading={loading}
                edited={edited}
                setEdited={setEdited}
              />
            </div>
          </div>
        </WithLoader>
      </form>
    </>
  );
};
