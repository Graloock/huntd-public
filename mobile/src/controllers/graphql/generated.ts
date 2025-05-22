import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphQLDateTime: any;
  Upload: any;
};

export type AdminSettings = {
  __typename?: 'AdminSettings';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  contactsVisibilityPermission: Scalars['Boolean'];
  silentProfileUpdate: Scalars['Boolean'];
};

export type UpdateAdminSettingsValues = {
  contactsVisibilityPermission: Scalars['Boolean'];
  silentProfileUpdate: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addVacanciesLogo: Scalars['Int'];
  archiveProfileConnectionForUser?: Maybe<Scalars['Boolean']>;
  bulkReportOfferStatus: Scalars['Boolean'];
  bulkSendMessage: Scalars['Boolean'];
  changePassword: Scalars['Boolean'];
  claimNft?: Maybe<Nft>;
  confirmEmail: Scalars['Boolean'];
  connectOAuthProvider: Scalars['Boolean'];
  createMessageTemplate: UserTemplateMessage;
  createMultipleVacanciesSources: Scalars['Int'];
  createRecruiterProfile: RecruiterProfile;
  createSourcedVacancies: Scalars['Int'];
  createTechnologies?: Maybe<Array<Technology>>;
  createTechnology: Technology;
  createUser: User;
  createVacanciesSource?: Maybe<VacanciesSource>;
  createWorkPlace: CandidateProfileWorkPlace;
  deactivateCandidateProfiles: Scalars['Boolean'];
  deactivateRecruiterProfiles: Scalars['Boolean'];
  deactivateUnresponsiveProfiles: Scalars['Boolean'];
  deleteMessageTemplate: Scalars['Boolean'];
  deleteObsoleteSourcedVacancies: Scalars['Int'];
  deleteProfileConnectionForUser?: Maybe<Scalars['Boolean']>;
  deleteWorkPlace: Scalars['Boolean'];
  disconnectOAuthProvider: Scalars['Boolean'];
  fetchWorkPlaces?: Maybe<Array<CandidateProfileWorkPlace>>;
  forgotPassword: Scalars['Boolean'];
  logOut: Scalars['Boolean'];
  logOutFromUser: User;
  registerDevice?: Maybe<DeviceToken>;
  removeCvFile: User;
  reportOfferStatus: ProfileConnection;
  resetPassword: Scalars['Boolean'];
  reviewCandidateProfile: CandidateProfile;
  reviewProfileConnectionRequest: ProfileConnection;
  reviewRecruiterProfile: RecruiterProfile;
  sendCandidateProfileToReview: CandidateProfile;
  sendConfirmEmailLink: Scalars['Boolean'];
  sendFeedback: Scalars['Boolean'];
  sendMessage: ChatMessage;
  sendNewVacancyApplication: Scalars['Boolean'];
  sendNewVacancyRequest: Scalars['Boolean'];
  sendNotification: Scalars['Boolean'];
  sendPaymentRequest: ProfileConnection;
  sendProfileConnectionRequest: ProfileConnection;
  sendRecruiterProfileToReview: RecruiterProfile;
  setNftAvatar: User;
  signIn: User;
  signInAsUser: User;
  signUp: User;
  signUpAsInactiveUser: User;
  socialSignUp: User;
  socialSignUpAsInactiveUser: User;
  subscribeToCandidatesSearch: UsersSearchSubscription;
  unarchiveProfileConnectionForUser?: Maybe<Scalars['Boolean']>;
  unregisterDevice?: Maybe<Scalars['Boolean']>;
  unsubscribeFromCandidatesSearch: Scalars['Boolean'];
  updateAdminSettings: AdminSettings;
  updateCandidateProfile: CandidateProfile;
  updateConnectionLastActionTime?: Maybe<ProfileConnection>;
  updateMessage: ChatMessage;
  updateMessageTemplate: UserTemplateMessage;
  updateProfileContacts: User;
  updateRecruiterProfile: RecruiterProfile;
  updateStatusesNotificationTime: Scalars['Boolean'];
  updateSubscriptionLastNotified: Scalars['Boolean'];
  updateSubscriptionLastUsed: UsersSearchSubscription;
  updateSubscriptionTitle: UsersSearchSubscription;
  updateUserSettings: UserSettings;
  updateWorkPlace: CandidateProfileWorkPlace;
  uploadAvatar: User;
  uploadCvFile: User;
};


export type MutationAddVacanciesLogoArgs = {
  companyNames?: Maybe<Array<Scalars['String']>>;
};


export type MutationArchiveProfileConnectionForUserArgs = {
  id: Scalars['Int'];
};


export type MutationBulkReportOfferStatusArgs = {
  values: Array<ReportOfferStatusValues>;
};


export type MutationBulkSendMessageArgs = {
  recruiterProfileId: Scalars['Int'];
  candidateProfileIds: Array<Scalars['Int']>;
  message: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
};


export type MutationClaimNftArgs = {
  nftId?: Maybe<Scalars['Int']>;
};


export type MutationConfirmEmailArgs = {
  token: Scalars['String'];
};


export type MutationConnectOAuthProviderArgs = {
  provider: OAuthProviders;
  token: Scalars['String'];
  id: Scalars['String'];
};


export type MutationCreateMessageTemplateArgs = {
  userId: Scalars['Int'];
  messageType: PrimaryProfile;
  messageTitle: Scalars['String'];
  messageBody: Scalars['String'];
};


export type MutationCreateMultipleVacanciesSourcesArgs = {
  options: CreateMultipleVacanciesSourcesParameters;
};


export type MutationCreateRecruiterProfileArgs = {
  userId: Scalars['Int'];
  position: Scalars['String'];
  companyName: Scalars['String'];
  city?: Maybe<Scalars['String']>;
};


export type MutationCreateSourcedVacanciesArgs = {
  vacancies?: Maybe<Array<SourcedVacancy>>;
};


export type MutationCreateTechnologiesArgs = {
  slugs?: Maybe<Array<Scalars['String']>>;
};


export type MutationCreateTechnologyArgs = {
  name: Scalars['String'];
};


export type MutationCreateUserArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationCreateVacanciesSourceArgs = {
  atsId: Scalars['String'];
  type: VacancySourceType;
};


export type MutationCreateWorkPlaceArgs = {
  candidateProfileId: Scalars['Int'];
  companyName: Scalars['String'];
  companyUrl?: Maybe<Scalars['String']>;
  companySizeFrom?: Maybe<Scalars['Int']>;
  companySizeTo?: Maybe<Scalars['Int']>;
  companyIndustry?: Maybe<Scalars['String']>;
  companyCategories?: Maybe<Scalars['String']>;
  companySpecialities?: Maybe<Scalars['String']>;
  companyFundingType?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  startDate: Scalars['String'];
  endDate?: Maybe<Scalars['String']>;
};


export type MutationDeactivateUnresponsiveProfilesArgs = {
  userIds?: Maybe<Array<Scalars['Int']>>;
};


export type MutationDeleteMessageTemplateArgs = {
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};


export type MutationDeleteProfileConnectionForUserArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteWorkPlaceArgs = {
  id: Scalars['Int'];
};


export type MutationDisconnectOAuthProviderArgs = {
  provider: OAuthProviders;
};


export type MutationFetchWorkPlacesArgs = {
  linkedinUrl: Scalars['String'];
  candidateProfileId: Scalars['Int'];
  liveScrape?: Maybe<Scalars['Boolean']>;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterDeviceArgs = {
  token: Scalars['String'];
  devicePlatform: DevicePlatform;
  deviceYear?: Maybe<Scalars['String']>;
  systemVersion?: Maybe<Scalars['String']>;
  deviceName?: Maybe<Scalars['String']>;
};


export type MutationReportOfferStatusArgs = {
  profileConnectionId: Scalars['Int'];
  status: OfferStatus;
};


export type MutationResetPasswordArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
};


export type MutationReviewCandidateProfileArgs = {
  id: Scalars['Int'];
  status: CandidateProfileStatus;
  rejectReason?: Maybe<Scalars['String']>;
};


export type MutationReviewProfileConnectionRequestArgs = {
  id: Scalars['Int'];
  status: ProfileConnectionStatus;
};


export type MutationReviewRecruiterProfileArgs = {
  id: Scalars['Int'];
  status: RecruiterProfileStatus;
  rejectReason?: Maybe<Scalars['String']>;
};


export type MutationSendFeedbackArgs = {
  title: Scalars['String'];
  body?: Maybe<Scalars['String']>;
};


export type MutationSendMessageArgs = {
  profileConnectionId: Scalars['Int'];
  message: Scalars['String'];
};


export type MutationSendNewVacancyApplicationArgs = {
  companyName: Scalars['String'];
  jobTitle: Scalars['String'];
};


export type MutationSendNewVacancyRequestArgs = {
  vacancyLink: Scalars['String'];
  contactEmail: Scalars['String'];
};


export type MutationSendNotificationArgs = {
  channel: NotificationChannel;
  target: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
  payload?: Maybe<Scalars['String']>;
};


export type MutationSendPaymentRequestArgs = {
  profileConnectionId: Scalars['Int'];
  paymentAmount: Scalars['Int'];
  candidateSlug: Scalars['String'];
};


export type MutationSendProfileConnectionRequestArgs = {
  candidateProfileId: Scalars['Int'];
  recruiterProfileId: Scalars['Int'];
};


export type MutationSetNftAvatarArgs = {
  nftId?: Maybe<Scalars['Int']>;
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignInAsUserArgs = {
  email: Scalars['String'];
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fvType?: Maybe<Scalars['String']>;
  fvSource?: Maybe<Scalars['String']>;
  fvMedium?: Maybe<Scalars['String']>;
  fvCampaign?: Maybe<Scalars['String']>;
  fvContent?: Maybe<Scalars['String']>;
  fvTerm?: Maybe<Scalars['String']>;
  lvType?: Maybe<Scalars['String']>;
  lvSource?: Maybe<Scalars['String']>;
  lvMedium?: Maybe<Scalars['String']>;
  lvCampaign?: Maybe<Scalars['String']>;
  lvContent?: Maybe<Scalars['String']>;
  lvTerm?: Maybe<Scalars['String']>;
  gClientid?: Maybe<Scalars['String']>;
  gIp?: Maybe<Scalars['String']>;
  gAgent?: Maybe<Scalars['String']>;
  gclid?: Maybe<Scalars['String']>;
};


export type MutationSignUpAsInactiveUserArgs = {
  username: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fvType?: Maybe<Scalars['String']>;
  fvSource?: Maybe<Scalars['String']>;
  fvMedium?: Maybe<Scalars['String']>;
  fvCampaign?: Maybe<Scalars['String']>;
  fvContent?: Maybe<Scalars['String']>;
  fvTerm?: Maybe<Scalars['String']>;
  lvType?: Maybe<Scalars['String']>;
  lvSource?: Maybe<Scalars['String']>;
  lvMedium?: Maybe<Scalars['String']>;
  lvCampaign?: Maybe<Scalars['String']>;
  lvContent?: Maybe<Scalars['String']>;
  lvTerm?: Maybe<Scalars['String']>;
  gClientid?: Maybe<Scalars['String']>;
  gIp?: Maybe<Scalars['String']>;
  gAgent?: Maybe<Scalars['String']>;
  gclid?: Maybe<Scalars['String']>;
};


export type MutationSocialSignUpArgs = {
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fvType?: Maybe<Scalars['String']>;
  fvSource?: Maybe<Scalars['String']>;
  fvMedium?: Maybe<Scalars['String']>;
  fvCampaign?: Maybe<Scalars['String']>;
  fvContent?: Maybe<Scalars['String']>;
  fvTerm?: Maybe<Scalars['String']>;
  lvType?: Maybe<Scalars['String']>;
  lvSource?: Maybe<Scalars['String']>;
  lvMedium?: Maybe<Scalars['String']>;
  lvCampaign?: Maybe<Scalars['String']>;
  lvContent?: Maybe<Scalars['String']>;
  lvTerm?: Maybe<Scalars['String']>;
  gClientid?: Maybe<Scalars['String']>;
  gIp?: Maybe<Scalars['String']>;
  gAgent?: Maybe<Scalars['String']>;
  gclid?: Maybe<Scalars['String']>;
  providerId: Scalars['String'];
  providerName: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};


export type MutationSocialSignUpAsInactiveUserArgs = {
  username: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fvType?: Maybe<Scalars['String']>;
  fvSource?: Maybe<Scalars['String']>;
  fvMedium?: Maybe<Scalars['String']>;
  fvCampaign?: Maybe<Scalars['String']>;
  fvContent?: Maybe<Scalars['String']>;
  fvTerm?: Maybe<Scalars['String']>;
  lvType?: Maybe<Scalars['String']>;
  lvSource?: Maybe<Scalars['String']>;
  lvMedium?: Maybe<Scalars['String']>;
  lvCampaign?: Maybe<Scalars['String']>;
  lvContent?: Maybe<Scalars['String']>;
  lvTerm?: Maybe<Scalars['String']>;
  gClientid?: Maybe<Scalars['String']>;
  gIp?: Maybe<Scalars['String']>;
  gAgent?: Maybe<Scalars['String']>;
  gclid?: Maybe<Scalars['String']>;
  providerId: Scalars['String'];
  providerName: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};


export type MutationSubscribeToCandidatesSearchArgs = {
  title: Scalars['String'];
  userId?: Maybe<Scalars['Int']>;
  searchParams: PublicProfilesParameters;
};


export type MutationUnarchiveProfileConnectionForUserArgs = {
  id: Scalars['Int'];
};


export type MutationUnregisterDeviceArgs = {
  token: Scalars['String'];
};


export type MutationUnsubscribeFromCandidatesSearchArgs = {
  id: Scalars['Int'];
  userId: Scalars['Int'];
};


export type MutationUpdateAdminSettingsArgs = {
  permissions: UpdateAdminSettingsValues;
};


export type MutationUpdateCandidateProfileArgs = {
  position?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Float']>;
  candidateDescription?: Maybe<Scalars['String']>;
  experienceDescription?: Maybe<Scalars['String']>;
  workExpectations?: Maybe<Scalars['String']>;
  achievements?: Maybe<Scalars['String']>;
  technologiesIds?: Maybe<Array<Scalars['Int']>>;
  jobExperienceId?: Maybe<Scalars['Int']>;
  employmentTypesIds?: Maybe<Array<Scalars['Int']>>;
  employmentLocationsIds?: Maybe<Array<Scalars['Int']>>;
  englishLevelId?: Maybe<Scalars['Int']>;
  specializationId?: Maybe<Scalars['Int']>;
  specializationsIds?: Maybe<Array<Scalars['Int']>>;
  cities?: Maybe<Array<CandidateProfileCityInput>>;
  workPlaces?: Maybe<Array<CandidateProfileWorkPlaceInput>>;
};


export type MutationUpdateConnectionLastActionTimeArgs = {
  id: Scalars['Int'];
  time?: Maybe<Scalars['GraphQLDateTime']>;
};


export type MutationUpdateMessageArgs = {
  id: Scalars['Int'];
  values: UpdateMessageValues;
};


export type MutationUpdateMessageTemplateArgs = {
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  values: UpdateTemplateMessageValues;
};


export type MutationUpdateProfileContactsArgs = {
  phone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  behanceUrl?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  ethWalletAddress?: Maybe<Scalars['String']>;
};


export type MutationUpdateRecruiterProfileArgs = {
  position?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};


export type MutationUpdateStatusesNotificationTimeArgs = {
  profileIds: Array<Scalars['Int']>;
};


export type MutationUpdateSubscriptionLastNotifiedArgs = {
  subscriptionsIds?: Maybe<Array<Scalars['Int']>>;
};


export type MutationUpdateSubscriptionLastUsedArgs = {
  id: Scalars['Int'];
  userId: Scalars['Int'];
};


export type MutationUpdateSubscriptionTitleArgs = {
  id: Scalars['Int'];
  userId: Scalars['Int'];
  values: UpdateSubscriptionsTitleValues;
};


export type MutationUpdateUserSettingsArgs = {
  pushNotificationsPermission?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateWorkPlaceArgs = {
  id: Scalars['Int'];
  companyName: Scalars['String'];
  companyUrl?: Maybe<Scalars['String']>;
  companySizeFrom?: Maybe<Scalars['Int']>;
  companySizeTo?: Maybe<Scalars['Int']>;
  companyIndustry?: Maybe<Scalars['String']>;
  companyCategories?: Maybe<Scalars['String']>;
  companySpecialities?: Maybe<Scalars['String']>;
  companyFundingType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
};


export type MutationUploadAvatarArgs = {
  file: Scalars['Upload'];
  size?: Maybe<Scalars['Int']>;
};


export type MutationUploadCvFileArgs = {
  file: Scalars['Upload'];
  size?: Maybe<Scalars['Int']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  candidateProfileStatusUpdated: CandidateProfile;
  newMessage?: Maybe<ChatMessage>;
  profileConnectionUpdated: ProfileConnection;
  recruiterProfileStatusUpdated: RecruiterProfile;
  userUnreadMessagesCountUpdated?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  adminUser?: Maybe<User>;
  allNfts?: Maybe<Array<Nft>>;
  authUser?: Maybe<User>;
  availableNfts?: Maybe<Array<Nft>>;
  candidateProfileBySlug?: Maybe<CandidateProfile>;
  candidateProfilesBySubscription: Array<CandidateProfile>;
  employmentLocations?: Maybe<Array<EmploymentLocation>>;
  employmentTypes?: Maybe<Array<EmploymentType>>;
  englishLevels?: Maybe<Array<EnglishLevel>>;
  feature?: Maybe<Feature>;
  features?: Maybe<Array<Feature>>;
  hotVacancies?: Maybe<Array<Vacancy>>;
  jobExperiences?: Maybe<Array<JobExperience>>;
  latestActiveCandidateProfile?: Maybe<CandidateProfile>;
  latestCandidateProfile?: Maybe<CandidateProfile>;
  latestRecruiterProfile?: Maybe<RecruiterProfile>;
  latestRecruiterProfileByUserId?: Maybe<RecruiterProfile>;
  perfectCandidatesAmount: Scalars['Int'];
  profileConnection?: Maybe<ProfileConnection>;
  publicCandidateProfiles: PublicCandidateProfilesResult;
  publicRecruiterProfiles: Array<RecruiterProfile>;
  recruiterProfileBySlug?: Maybe<RecruiterProfile>;
  salariesDataByCategory: VacancySalaryData;
  serviceUser?: Maybe<User>;
  specializations?: Maybe<Array<Specialization>>;
  technologies?: Maybe<Array<Technology>>;
  technologiesByNames?: Maybe<Array<Technology>>;
  userByUsername?: Maybe<User>;
  userSearchSubscriptionsByUserId?: Maybe<Array<UsersSearchSubscription>>;
  usersByPendingConnections?: Maybe<Array<User>>;
  usersOAuthProviders?: Maybe<Array<OAuthToken>>;
  usersSearchSubscriptions?: Maybe<Array<UsersSearchSubscription>>;
  usersWithChurnedCandidateProfiles?: Maybe<Array<ChurnedUser>>;
  vacancies: VacanciesResult;
  vacanciesByCompany?: Maybe<Array<Vacancy>>;
  vacanciesSources?: Maybe<Array<VacanciesSource>>;
};


export type QueryCandidateProfileBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryCandidateProfilesBySubscriptionArgs = {
  subscriptionLastInteract: Scalars['GraphQLDateTime'];
  where: PublicProfilesParameters;
};


export type QueryFeatureArgs = {
  name: Scalars['String'];
};


export type QueryLatestActiveCandidateProfileArgs = {
  userId: Scalars['Int'];
};


export type QueryLatestRecruiterProfileByUserIdArgs = {
  userId?: Maybe<Scalars['Int']>;
};


export type QueryPerfectCandidatesAmountArgs = {
  where?: Maybe<PublicProfilesParameters>;
};


export type QueryProfileConnectionArgs = {
  id: Scalars['Int'];
};


export type QueryPublicCandidateProfilesArgs = {
  where?: Maybe<PublicProfilesParameters>;
  options?: Maybe<PublicProfilesOptions>;
};


export type QueryRecruiterProfileBySlugArgs = {
  slug: Scalars['String'];
};


export type QuerySalariesDataByCategoryArgs = {
  keywords?: Maybe<Array<Scalars['String']>>;
};


export type QuerySpecializationsArgs = {
  query?: Maybe<Scalars['String']>;
};


export type QueryTechnologiesArgs = {
  query?: Maybe<Scalars['String']>;
  requiredTechnologiesIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueryTechnologiesByNamesArgs = {
  names: Array<Scalars['String']>;
};


export type QueryUserByUsernameArgs = {
  username?: Maybe<Scalars['String']>;
};


export type QueryUserSearchSubscriptionsByUserIdArgs = {
  userId?: Maybe<Scalars['Int']>;
};


export type QueryVacanciesArgs = {
  options?: Maybe<VacanciesParameters>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryVacanciesByCompanyArgs = {
  options?: Maybe<VacanciesByCompanyParameters>;
};

export type PublicCandidateProfilesResult = {
  __typename?: 'PublicCandidateProfilesResult';
  rows: Array<CandidateProfile>;
  hasMore: Scalars['Boolean'];
  count: Scalars['Int'];
};

export enum CandidateProfileStatus {
  Draft = 'DRAFT',
  OnReview = 'ON_REVIEW',
  Rejected = 'REJECTED',
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type CandidateProfile = {
  __typename?: 'CandidateProfile';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  slug?: Maybe<Scalars['String']>;
  status: CandidateProfileStatus;
  rejectReason?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Float']>;
  candidateDescription?: Maybe<Scalars['String']>;
  experienceDescription?: Maybe<Scalars['String']>;
  workExpectations?: Maybe<Scalars['String']>;
  achievements?: Maybe<Scalars['String']>;
  specializations?: Maybe<Array<Specialization>>;
  technologies?: Maybe<Array<Technology>>;
  employmentTypes?: Maybe<Array<EmploymentType>>;
  employmentLocations?: Maybe<Array<EmploymentLocation>>;
  englishLevel?: Maybe<EnglishLevel>;
  jobExperience?: Maybe<JobExperience>;
  specialization?: Maybe<Specialization>;
  user?: Maybe<User>;
  cities?: Maybe<Array<CandidateProfileCity>>;
  workPlaces?: Maybe<Array<CandidateProfileWorkPlace>>;
  lastActionTime?: Maybe<Scalars['GraphQLDateTime']>;
  connectionsCount?: Maybe<Scalars['Int']>;
};

export type PublicProfilesOptions = {
  offset?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  forceRealList?: Maybe<Scalars['Boolean']>;
};

export type PublicProfilesParameters = {
  cities?: Maybe<Array<Scalars['String']>>;
  countries?: Maybe<Array<Scalars['String']>>;
  locations?: Maybe<Array<Scalars['String']>>;
  specializations?: Maybe<Array<Scalars['String']>>;
  salaryFrom?: Maybe<Scalars['Int']>;
  salaryTo?: Maybe<Scalars['Int']>;
  timezoneFrom?: Maybe<Scalars['Int']>;
  timezoneTo?: Maybe<Scalars['Int']>;
  searchQuery?: Maybe<Scalars['String']>;
  experienceIds?: Maybe<Array<Scalars['Int']>>;
  englishLevelIds?: Maybe<Array<Scalars['Int']>>;
  employmentTypesIds?: Maybe<Array<Scalars['Int']>>;
  technologiesIds?: Maybe<Array<Scalars['Int']>>;
  timezoneReverseMode?: Maybe<Scalars['Boolean']>;
};

export type CandidateProfileCityInput = {
  cityId: Scalars['String'];
  cityName: Scalars['String'];
  cityTimezone?: Maybe<Scalars['Int']>;
  cityCountrySlug?: Maybe<Scalars['String']>;
  cityCountryName?: Maybe<Scalars['String']>;
  type?: Maybe<CityTypes>;
};

export type CandidateProfileCity = {
  __typename?: 'CandidateProfileCity';
  id: Scalars['Int'];
  cityId: Scalars['String'];
  cityName: Scalars['String'];
  cityTimezone?: Maybe<Scalars['Int']>;
  cityCountrySlug?: Maybe<Scalars['String']>;
  cityCountryName?: Maybe<Scalars['String']>;
  type: CityTypes;
};

export enum CityTypes {
  CandidateCity = 'CANDIDATE_CITY',
  OfficeCity = 'OFFICE_CITY'
}

export type UpdateMessageValues = {
  message: Scalars['String'];
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  id: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  senderUser?: Maybe<User>;
  recipientUser?: Maybe<User>;
  profileConnectionId: Scalars['Int'];
  isSystemMessage?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['GraphQLDateTime'];
  updatedAt: Scalars['GraphQLDateTime'];
};

export enum MessageUserRole {
  Sender = 'SENDER',
  Recipient = 'RECIPIENT',
  NotDefined = 'NOT_DEFINED'
}


export enum DevicePlatform {
  Ios = 'IOS',
  Android = 'ANDROID'
}

export type DeviceToken = {
  __typename?: 'DeviceToken';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  token: Scalars['String'];
  devicePlatform: DevicePlatform;
  deviceYear?: Maybe<Scalars['String']>;
  systemVersion?: Maybe<Scalars['String']>;
  deviceName?: Maybe<Scalars['String']>;
};

export type EmploymentLocation = {
  __typename?: 'EmploymentLocation';
  id: Scalars['Int'];
  slug: Scalars['String'];
};

export type EmploymentType = {
  __typename?: 'EmploymentType';
  id: Scalars['Int'];
  slug: Scalars['String'];
};

export type EnglishLevel = {
  __typename?: 'EnglishLevel';
  id: Scalars['Int'];
  slug: Scalars['String'];
};

export type Feature = {
  __typename?: 'Feature';
  id: Scalars['Int'];
  name: Scalars['String'];
  status: FeatureStatus;
};

export enum FeatureStatus {
  Enabled = 'ENABLED',
  Disabled = 'DISABLED'
}

export type JobExperience = {
  __typename?: 'JobExperience';
  id: Scalars['Int'];
  slug: Scalars['String'];
};

export type Nft = {
  __typename?: 'Nft';
  id: Scalars['Int'];
  openseaUrl: Scalars['String'];
  userId?: Maybe<Scalars['Int']>;
  entity: UploadedFile;
};

export enum NotificationChannel {
  Push = 'PUSH'
}

export enum OAuthProviders {
  Github = 'GITHUB',
  Google = 'GOOGLE',
  Linkedin = 'LINKEDIN',
  Apple = 'APPLE'
}

export type OAuthToken = {
  __typename?: 'OAuthToken';
  id: Scalars['Int'];
  providerName: Scalars['String'];
  providerId: Scalars['String'];
  token: Scalars['String'];
};

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  id: Scalars['Int'];
  candidateUser?: Maybe<User>;
  recruiterUser: User;
  candidateProfile: CandidateProfile;
  recruiterProfile: RecruiterProfile;
  initiator: ProfileConnectionInitiator;
  status: ProfileConnectionStatus;
  chatMessages?: Maybe<Array<ChatMessage>>;
  candidateReportedStatus?: Maybe<OfferStatus>;
  recruiterReportedStatus?: Maybe<OfferStatus>;
  userMeta?: Maybe<ProfileConnectionUserMeta>;
  buddyMeta?: Maybe<ProfileConnectionUserMeta>;
  candidateReportedAt?: Maybe<Scalars['GraphQLDateTime']>;
  recruiterReportedAt?: Maybe<Scalars['GraphQLDateTime']>;
  unreadMessagesCount?: Maybe<Scalars['Int']>;
  paidAt?: Maybe<Scalars['GraphQLDateTime']>;
  isPaymentRequested: Scalars['Boolean'];
};

export enum ProfileConnectionInitiator {
  Candidate = 'CANDIDATE',
  Recruiter = 'RECRUITER'
}

export enum ProfileConnectionStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Rejected = 'REJECTED'
}

export enum OfferStatus {
  Offer = 'OFFER',
  NoOffer = 'NO_OFFER'
}

export type ProfileConnectionUserMeta = {
  __typename?: 'ProfileConnectionUserMeta';
  id: Scalars['Int'];
  lastActionTime?: Maybe<Scalars['GraphQLDateTime']>;
  archivedAt?: Maybe<Scalars['GraphQLDateTime']>;
};

export enum RecruiterProfileStatus {
  Draft = 'DRAFT',
  OnReview = 'ON_REVIEW',
  Rejected = 'REJECTED',
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type RecruiterProfile = {
  __typename?: 'RecruiterProfile';
  id: Scalars['Int'];
  slug?: Maybe<Scalars['String']>;
  status: RecruiterProfileStatus;
  rejectReason?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  lastActionTime?: Maybe<Scalars['GraphQLDateTime']>;
  statusesNotificationSentAt?: Maybe<Scalars['GraphQLDateTime']>;
  activeConnectionWithCandidate?: Maybe<ProfileConnection>;
};


export type RecruiterProfileActiveConnectionWithCandidateArgs = {
  candidateProfileId: Scalars['Int'];
};

export type ReportOfferStatusValues = {
  profileConnectionId: Scalars['Int'];
  status: OfferStatus;
};

export type Specialization = {
  __typename?: 'Specialization';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Technology = {
  __typename?: 'Technology';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UploadedFile = {
  __typename?: 'UploadedFile';
  id: Scalars['Int'];
  name: Scalars['String'];
  mime: Scalars['String'];
  url: Scalars['String'];
};

export enum PrimaryProfile {
  Recruiter = 'RECRUITER',
  Candidate = 'CANDIDATE',
  NotDefined = 'NOT_DEFINED'
}

export enum UserRole {
  User = 'USER',
  Admin = 'ADMIN'
}

export type ChurnedUser = {
  __typename?: 'ChurnedUser';
  id: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  profilesCount: Scalars['Int'];
  profileId: Scalars['Int'];
  slug?: Maybe<Scalars['String']>;
  profileCreatedAt: Scalars['GraphQLDateTime'];
};

export type User = {
  __typename?: 'User';
  adminSettings?: Maybe<AdminSettings>;
  avatar?: Maybe<UploadedFile>;
  behanceUrl?: Maybe<Scalars['String']>;
  computedName?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['Boolean']>;
  cv?: Maybe<UploadedFile>;
  email?: Maybe<Scalars['String']>;
  ethWalletAddress?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  fvCampaign?: Maybe<Scalars['String']>;
  fvContent?: Maybe<Scalars['String']>;
  fvMedium?: Maybe<Scalars['String']>;
  fvSource?: Maybe<Scalars['String']>;
  fvTerm?: Maybe<Scalars['String']>;
  fvType?: Maybe<Scalars['String']>;
  gAgent?: Maybe<Scalars['String']>;
  gClientid?: Maybe<Scalars['String']>;
  gIp?: Maybe<Scalars['String']>;
  gclid?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  hasVacanciesSource?: Maybe<Scalars['Boolean']>;
  hires?: Maybe<Array<ProfileConnection>>;
  id: Scalars['Int'];
  inactive?: Maybe<Scalars['Boolean']>;
  isAdminUser?: Maybe<Scalars['Boolean']>;
  isAuthUser?: Maybe<Scalars['Boolean']>;
  isFirstTimeFillingCandidateProfile?: Maybe<Scalars['Boolean']>;
  isFirstTimeFillingRecruiterProfile?: Maybe<Scalars['Boolean']>;
  lastActionTime?: Maybe<Scalars['GraphQLDateTime']>;
  lastName?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  lvCampaign?: Maybe<Scalars['String']>;
  lvContent?: Maybe<Scalars['String']>;
  lvMedium?: Maybe<Scalars['String']>;
  lvSource?: Maybe<Scalars['String']>;
  lvTerm?: Maybe<Scalars['String']>;
  lvType?: Maybe<Scalars['String']>;
  messageTemplates?: Maybe<Array<UserTemplateMessage>>;
  nfts?: Maybe<Array<Nft>>;
  phone?: Maybe<Scalars['String']>;
  primaryProfile?: Maybe<PrimaryProfile>;
  profileConnections?: Maybe<Array<ProfileConnection>>;
  recruiterProfiles?: Maybe<Array<RecruiterProfile>>;
  searchSubscriptions?: Maybe<Array<UsersSearchSubscription>>;
  settings?: Maybe<UserSettings>;
  unreadMessagesCount?: Maybe<Scalars['Int']>;
  userRole?: Maybe<UserRole>;
  username?: Maybe<Scalars['String']>;
};


export type UserMessageTemplatesArgs = {
  messageType: PrimaryProfile;
};


export type UserProfileConnectionsArgs = {
  archived?: Maybe<Scalars['Boolean']>;
};

export type UserTemplateMessage = {
  __typename?: 'UserTemplateMessage';
  id: Scalars['Int'];
  messageType?: Maybe<PrimaryProfile>;
  messageTitle: Scalars['String'];
  messageBody: Scalars['String'];
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
};

export type UpdateTemplateMessageValues = {
  messageTitle?: Maybe<Scalars['String']>;
  messageBody?: Maybe<Scalars['String']>;
};

export type UserSettings = {
  __typename?: 'UserSettings';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  pushNotificationsPermission: Scalars['Boolean'];
};

export type UsersSearchSubscription = {
  __typename?: 'UsersSearchSubscription';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  title: Scalars['String'];
  lastUsed: Scalars['GraphQLDateTime'];
  lastNotified?: Maybe<Scalars['GraphQLDateTime']>;
  searchParams: CandidatesSearchParams;
  stringifiedSearchParams: SubscriptionStringifiedParams;
  user?: Maybe<User>;
  subscriptionUrl: Scalars['String'];
};

export type UpdateSubscriptionsTitleValues = {
  title: Scalars['String'];
};

export type SubscriptionStringifiedParams = {
  __typename?: 'SubscriptionStringifiedParams';
  id: Scalars['Int'];
  employmentTypes?: Maybe<Array<EmploymentType>>;
  technologies?: Maybe<Array<Technology>>;
  jobExperiences?: Maybe<Array<JobExperience>>;
  englishLevels?: Maybe<Array<EnglishLevel>>;
};

export type CandidatesSearchParams = {
  __typename?: 'CandidatesSearchParams';
  cities?: Maybe<Array<Scalars['String']>>;
  countries?: Maybe<Array<Scalars['String']>>;
  specializations?: Maybe<Array<Scalars['String']>>;
  salaryFrom?: Maybe<Scalars['Int']>;
  salaryTo?: Maybe<Scalars['Int']>;
  timezoneFrom?: Maybe<Scalars['Int']>;
  timezoneTo?: Maybe<Scalars['Int']>;
  timezoneReverseMode?: Maybe<Scalars['Boolean']>;
  searchQuery?: Maybe<Scalars['String']>;
  experienceIds?: Maybe<Array<Scalars['Int']>>;
  englishLevelIds?: Maybe<Array<Scalars['Int']>>;
  employmentTypesIds?: Maybe<Array<Scalars['Int']>>;
  technologiesIds?: Maybe<Array<Scalars['Int']>>;
};

export enum VacancySourceType {
  Lever = 'LEVER',
  Greenhouse = 'GREENHOUSE'
}

export type VacanciesSource = {
  __typename?: 'VacanciesSource';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  url: Scalars['String'];
  createdAt: Scalars['GraphQLDateTime'];
  deletedAt?: Maybe<Scalars['GraphQLDateTime']>;
};

export type CreateMultipleVacanciesSourcesParameters = {
  atsIds: Scalars['String'];
  companyNames: Scalars['String'];
  salaryRanges: Scalars['String'];
  type: VacancySourceType;
};

export type VacanciesResult = {
  __typename?: 'VacanciesResult';
  rows: Array<Vacancy>;
  hasMore: Scalars['Boolean'];
};

export enum VacancyStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum VacancyType {
  FullTime = 'FULL_TIME',
  PartTime = 'PART_TIME'
}

export type VacancySalaryData = {
  __typename?: 'VacancySalaryData';
  maxSalary: Scalars['Int'];
  averageMinSalary: Scalars['Int'];
  averageSalary: Scalars['Int'];
};

export type VacancyData = {
  __typename?: 'VacancyData';
  vacancies: Array<Vacancy>;
  salaryData: VacancySalaryData;
  hasMore: Scalars['Boolean'];
};

export type VacanciesParameters = {
  keywords?: Maybe<Array<Scalars['String']>>;
};

export type VacanciesByCompanyParameters = {
  companyName: Scalars['String'];
};

export type SourcedVacancy = {
  sourceId: Scalars['Int'];
  userId: Scalars['Int'];
  applyLink: Scalars['String'];
  jobTitle: Scalars['String'];
  jobDescription: Scalars['String'];
  jobType: VacancyType;
  jobCategory: VacancyCategory;
  status: VacancyStatus;
  companyName: Scalars['String'];
  salaryFrom?: Maybe<Scalars['Float']>;
  salaryTo?: Maybe<Scalars['Float']>;
};

export enum VacancyCategory {
  UsOnly = 'US_ONLY',
  EuropeOnly = 'EUROPE_ONLY',
  Worldwide = 'WORLDWIDE'
}

export type Vacancy = {
  __typename?: 'Vacancy';
  id: Scalars['Int'];
  status: VacancyStatus;
  companyName: Scalars['String'];
  jobTitle: Scalars['String'];
  salaryTo?: Maybe<Scalars['Float']>;
  salaryFrom?: Maybe<Scalars['Float']>;
  jobDescription?: Maybe<Scalars['String']>;
  jobType: VacancyType;
  jobCategory: VacancyCategory;
  englishLevel?: Maybe<EnglishLevel>;
  jobExperience?: Maybe<JobExperience>;
  technologies?: Maybe<Array<Technology>>;
  specializations?: Maybe<Array<Specialization>>;
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
  companyLogo?: Maybe<UploadedFile>;
  isTop: Scalars['Boolean'];
  sourceId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  applyLink?: Maybe<Scalars['String']>;
};

export type CandidateProfileWorkPlace = {
  __typename?: 'CandidateProfileWorkPlace';
  id: Scalars['Int'];
  companyName: Scalars['String'];
  companyUrl?: Maybe<Scalars['String']>;
  companySizeFrom?: Maybe<Scalars['Int']>;
  companySizeTo?: Maybe<Scalars['Int']>;
  companyIndustry?: Maybe<Scalars['String']>;
  companyCategories?: Maybe<Scalars['String']>;
  companySpecialities?: Maybe<Scalars['String']>;
  companyFundingType?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  startDate: Scalars['GraphQLDateTime'];
  endDate?: Maybe<Scalars['GraphQLDateTime']>;
};

export type CandidateProfileWorkPlaceInput = {
  companyName: Scalars['String'];
  companyUrl?: Maybe<Scalars['String']>;
  companySizeFrom?: Maybe<Scalars['Int']>;
  companySizeTo?: Maybe<Scalars['Int']>;
  companyIndustry?: Maybe<Scalars['String']>;
  companyCategories?: Maybe<Scalars['String']>;
  companySpecialities?: Maybe<Scalars['String']>;
  companyFundingType?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  startDate: Scalars['GraphQLDateTime'];
  endDate?: Maybe<Scalars['GraphQLDateTime']>;
};


export type CandidateProfileBaseFragment = (
  { __typename?: 'CandidateProfile' }
  & Pick<CandidateProfile, 'id' | 'userId' | 'status' | 'rejectReason' | 'position' | 'salary' | 'candidateDescription' | 'experienceDescription' | 'workExpectations' | 'achievements' | 'slug' | 'lastActionTime'>
);

export type CandidateProfileCitiesFragment = (
  { __typename?: 'CandidateProfile' }
  & { cities?: Maybe<Array<(
    { __typename?: 'CandidateProfileCity' }
    & CandidateProfileCityBaseFragment
  )>> }
);

export type CandidateProfileEmploymentLocationsFragment = (
  { __typename?: 'CandidateProfile' }
  & { employmentLocations?: Maybe<Array<(
    { __typename?: 'EmploymentLocation' }
    & EmploymentLocationBaseFragment
  )>> }
);

export type CandidateProfileEmploymentTypesFragment = (
  { __typename?: 'CandidateProfile' }
  & { employmentTypes?: Maybe<Array<(
    { __typename?: 'EmploymentType' }
    & EmploymentTypeBaseFragment
  )>> }
);

export type CandidateProfileEnglishLevelFragment = (
  { __typename?: 'CandidateProfile' }
  & { englishLevel?: Maybe<(
    { __typename?: 'EnglishLevel' }
    & EnglishLevelBaseFragment
  )> }
);

export type CandidateProfileFullFragment = (
  { __typename?: 'CandidateProfile' }
  & CandidateProfileBaseFragment
  & CandidateProfileTechnologiesFragment
  & CandidateProfileEnglishLevelFragment
  & CandidateProfileJobExperienceFragment
  & CandidateProfileEmploymentTypesFragment
  & CandidateProfileSpecializationFragment
  & CandidateProfileUserFragment
  & CandidateProfileCitiesFragment
  & CandidateProfileEmploymentLocationsFragment
);

export type CandidateProfileJobExperienceFragment = (
  { __typename?: 'CandidateProfile' }
  & { jobExperience?: Maybe<(
    { __typename?: 'JobExperience' }
    & JobExperienceBaseFragment
  )> }
);

export type CandidateProfileSpecializationFragment = (
  { __typename?: 'CandidateProfile' }
  & { specialization?: Maybe<(
    { __typename?: 'Specialization' }
    & SpecializationBaseFragment
  )> }
);

export type CandidateProfileTechnologiesFragment = (
  { __typename?: 'CandidateProfile' }
  & { technologies?: Maybe<Array<(
    { __typename?: 'Technology' }
    & TechnologyBaseFragment
  )>> }
);

export type CandidateProfileUserFragment = (
  { __typename?: 'CandidateProfile' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserBaseFragment
    & UserCvFragment
    & UserAvatarFragment
  )> }
);

export type CandidateProfileBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type CandidateProfileBySlugQuery = (
  { __typename?: 'Query' }
  & { candidateProfileBySlug?: Maybe<(
    { __typename?: 'CandidateProfile' }
    & CandidateProfileFullFragment
  )> }
);

export type DeactivateCandidateProfilesMutationVariables = Exact<{ [key: string]: never; }>;


export type DeactivateCandidateProfilesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deactivateCandidateProfiles'>
);

export type LatestCandidateProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestCandidateProfileQuery = (
  { __typename?: 'Query' }
  & { latestCandidateProfile?: Maybe<(
    { __typename?: 'CandidateProfile' }
    & CandidateProfileFullFragment
  )> }
);

export type SendCandidateProfileToReviewMutationVariables = Exact<{ [key: string]: never; }>;


export type SendCandidateProfileToReviewMutation = (
  { __typename?: 'Mutation' }
  & { sendCandidateProfileToReview: (
    { __typename?: 'CandidateProfile' }
    & CandidateProfileBaseFragment
  ) }
);

export type UpdateCandidateProfileMutationVariables = Exact<{
  position?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Float']>;
  candidateDescription?: Maybe<Scalars['String']>;
  experienceDescription?: Maybe<Scalars['String']>;
  workExpectations?: Maybe<Scalars['String']>;
  achievements?: Maybe<Scalars['String']>;
  technologiesIds?: Maybe<Array<Scalars['Int']>>;
  jobExperienceId?: Maybe<Scalars['Int']>;
  employmentTypesIds?: Maybe<Array<Scalars['Int']>>;
  employmentLocationsIds?: Maybe<Array<Scalars['Int']>>;
  englishLevelId?: Maybe<Scalars['Int']>;
  specializationId?: Maybe<Scalars['Int']>;
  cities?: Maybe<Array<CandidateProfileCityInput>>;
}>;


export type UpdateCandidateProfileMutation = (
  { __typename?: 'Mutation' }
  & { updateCandidateProfile: (
    { __typename?: 'CandidateProfile' }
    & CandidateProfileBaseFragment
  ) }
);

export type CandidateProfileCityBaseFragment = (
  { __typename?: 'CandidateProfileCity' }
  & Pick<CandidateProfileCity, 'id' | 'cityId' | 'cityName' | 'cityCountryName' | 'cityCountrySlug' | 'cityTimezone' | 'type'>
);

export type ChatMessageBaseFragment = (
  { __typename?: 'ChatMessage' }
  & Pick<ChatMessage, 'id' | 'message' | 'profileConnectionId' | 'isSystemMessage' | 'createdAt'>
  & { senderUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'isAuthUser'>
  )>, recipientUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'isAuthUser'>
  )> }
);

export type NewMessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewMessageSubscription = (
  { __typename?: 'Subscription' }
  & { newMessage?: Maybe<(
    { __typename?: 'ChatMessage' }
    & ChatMessageBaseFragment
  )> }
);

export type SendMessageMutationVariables = Exact<{
  profileConnectionId: Scalars['Int'];
  message: Scalars['String'];
}>;


export type SendMessageMutation = (
  { __typename?: 'Mutation' }
  & { sendMessage: (
    { __typename?: 'ChatMessage' }
    & ChatMessageBaseFragment
  ) }
);

export type DeviceTokenBaseFragment = (
  { __typename?: 'DeviceToken' }
  & Pick<DeviceToken, 'id' | 'userId' | 'token' | 'devicePlatform'>
);

export type DeviceTokenExtraFragment = (
  { __typename?: 'DeviceToken' }
  & Pick<DeviceToken, 'deviceName' | 'deviceYear' | 'systemVersion'>
);

export type RegisterDeviceMutationVariables = Exact<{
  token: Scalars['String'];
  devicePlatform: DevicePlatform;
  deviceYear?: Maybe<Scalars['String']>;
  systemVersion?: Maybe<Scalars['String']>;
  deviceName?: Maybe<Scalars['String']>;
}>;


export type RegisterDeviceMutation = (
  { __typename?: 'Mutation' }
  & { registerDevice?: Maybe<(
    { __typename?: 'DeviceToken' }
    & DeviceTokenBaseFragment
    & DeviceTokenExtraFragment
  )> }
);

export type UnregisterDeviceMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type UnregisterDeviceMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'unregisterDevice'>
);

export type EmploymentLocationBaseFragment = (
  { __typename?: 'EmploymentLocation' }
  & Pick<EmploymentLocation, 'id' | 'slug'>
);

export type EmploymentLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type EmploymentLocationsQuery = (
  { __typename?: 'Query' }
  & { employmentLocations?: Maybe<Array<(
    { __typename?: 'EmploymentLocation' }
    & EmploymentLocationBaseFragment
  )>> }
);

export type EmploymentTypeBaseFragment = (
  { __typename?: 'EmploymentType' }
  & Pick<EmploymentType, 'id' | 'slug'>
);

export type EnglishLevelBaseFragment = (
  { __typename?: 'EnglishLevel' }
  & Pick<EnglishLevel, 'id' | 'slug'>
);

export type EnglishLevelsQueryVariables = Exact<{ [key: string]: never; }>;


export type EnglishLevelsQuery = (
  { __typename?: 'Query' }
  & { englishLevels?: Maybe<Array<(
    { __typename?: 'EnglishLevel' }
    & EnglishLevelBaseFragment
  )>> }
);

export type FeatureBaseFragment = (
  { __typename?: 'Feature' }
  & Pick<Feature, 'id' | 'name' | 'status'>
);

export type FeatureQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type FeatureQuery = (
  { __typename?: 'Query' }
  & { feature?: Maybe<(
    { __typename?: 'Feature' }
    & FeatureBaseFragment
  )> }
);

export type FeaturesQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturesQuery = (
  { __typename?: 'Query' }
  & { features?: Maybe<Array<(
    { __typename?: 'Feature' }
    & FeatureBaseFragment
  )>> }
);

export type JobExperienceBaseFragment = (
  { __typename?: 'JobExperience' }
  & Pick<JobExperience, 'id' | 'slug'>
);

export type JobExperiencesQueryVariables = Exact<{ [key: string]: never; }>;


export type JobExperiencesQuery = (
  { __typename?: 'Query' }
  & { jobExperiences?: Maybe<Array<(
    { __typename?: 'JobExperience' }
    & JobExperienceBaseFragment
  )>> }
);

export type ConnectOAuthProviderMutationVariables = Exact<{
  provider: OAuthProviders;
  token: Scalars['String'];
  id: Scalars['String'];
}>;


export type ConnectOAuthProviderMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'connectOAuthProvider'>
);

export type DisconnectOAuthProviderMutationVariables = Exact<{
  provider: OAuthProviders;
}>;


export type DisconnectOAuthProviderMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'disconnectOAuthProvider'>
);

export type SocialSignUpMutationVariables = Exact<{
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fvType?: Maybe<Scalars['String']>;
  fvSource?: Maybe<Scalars['String']>;
  fvMedium?: Maybe<Scalars['String']>;
  fvCampaign?: Maybe<Scalars['String']>;
  fvContent?: Maybe<Scalars['String']>;
  fvTerm?: Maybe<Scalars['String']>;
  lvType?: Maybe<Scalars['String']>;
  lvSource?: Maybe<Scalars['String']>;
  lvMedium?: Maybe<Scalars['String']>;
  lvCampaign?: Maybe<Scalars['String']>;
  lvContent?: Maybe<Scalars['String']>;
  lvTerm?: Maybe<Scalars['String']>;
  gClientid?: Maybe<Scalars['String']>;
  gIp?: Maybe<Scalars['String']>;
  gAgent?: Maybe<Scalars['String']>;
  gclid?: Maybe<Scalars['String']>;
  providerId: Scalars['String'];
  providerName: Scalars['String'];
  token?: Maybe<Scalars['String']>;
}>;


export type SocialSignUpMutation = (
  { __typename?: 'Mutation' }
  & { socialSignUp: (
    { __typename?: 'User' }
    & UserBaseFragment
    & UserPrimaryProfileFragment
    & UserEngagementFieldsFragment
  ) }
);

export type UsersOAuthProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersOAuthProvidersQuery = (
  { __typename?: 'Query' }
  & { usersOAuthProviders?: Maybe<Array<(
    { __typename?: 'OAuthToken' }
    & Pick<OAuthToken, 'id' | 'providerId' | 'providerName' | 'token'>
  )>> }
);

export type ProfileConnectionBaseFragment = (
  { __typename?: 'ProfileConnection' }
  & Pick<ProfileConnection, 'id' | 'status' | 'initiator' | 'candidateReportedStatus' | 'recruiterReportedStatus'>
);

export type ProfileConnectionUnreadMessagesCountFragment = (
  { __typename?: 'ProfileConnection' }
  & Pick<ProfileConnection, 'unreadMessagesCount'>
);

export type ProfileConnectionWithProfilesFragment = (
  { __typename?: 'ProfileConnection' }
  & { candidateProfile: (
    { __typename?: 'CandidateProfile' }
    & CandidateProfileBaseFragment
  ), recruiterProfile: (
    { __typename?: 'RecruiterProfile' }
    & RecruiterProfileBaseFragment
  ) }
);

export type ProfileConnectionWithUsersFragment = (
  { __typename?: 'ProfileConnection' }
  & { candidateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'isAuthUser'>
    & UserBaseFragment
    & UserAvatarFragment
  )>, recruiterUser: (
    { __typename?: 'User' }
    & Pick<User, 'isAuthUser'>
    & UserBaseFragment
    & UserAvatarFragment
  ) }
);

export type ProfileConnectionWithUsersMetaFragment = (
  { __typename?: 'ProfileConnection' }
  & { userMeta?: Maybe<(
    { __typename?: 'ProfileConnectionUserMeta' }
    & ProfileConnectionUserMetaBaseFragment
  )>, buddyMeta?: Maybe<(
    { __typename?: 'ProfileConnectionUserMeta' }
    & ProfileConnectionUserMetaBaseFragment
  )> }
);

export type ArchiveProfileConnectionForUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ArchiveProfileConnectionForUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'archiveProfileConnectionForUser'>
);

export type DeleteProfileConnectionForUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteProfileConnectionForUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProfileConnectionForUser'>
);

export type ProfileConnectionMessagesQueryVariables = Exact<{
  profileConnectionId: Scalars['Int'];
}>;


export type ProfileConnectionMessagesQuery = (
  { __typename?: 'Query' }
  & { profileConnection?: Maybe<(
    { __typename?: 'ProfileConnection' }
    & Pick<ProfileConnection, 'id'>
    & { chatMessages?: Maybe<Array<(
      { __typename?: 'ChatMessage' }
      & ChatMessageBaseFragment
    )>> }
  )> }
);

export type ProfileConnectionMetaQueryVariables = Exact<{
  profileConnectionId: Scalars['Int'];
}>;


export type ProfileConnectionMetaQuery = (
  { __typename?: 'Query' }
  & { profileConnection?: Maybe<(
    { __typename?: 'ProfileConnection' }
    & ProfileConnectionBaseFragment
    & ProfileConnectionWithUsersFragment
    & ProfileConnectionWithProfilesFragment
    & ProfileConnectionWithUsersMetaFragment
    & ProfileConnectionUnreadMessagesCountFragment
  )> }
);

export type ProfileConnectionUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ProfileConnectionUpdatedSubscription = (
  { __typename?: 'Subscription' }
  & { profileConnectionUpdated: (
    { __typename?: 'ProfileConnection' }
    & ProfileConnectionBaseFragment
    & ProfileConnectionWithUsersFragment
    & ProfileConnectionUnreadMessagesCountFragment
    & ProfileConnectionWithUsersMetaFragment
  ) }
);

export type ReviewProfileConnectionRequestMutationVariables = Exact<{
  id: Scalars['Int'];
  status: ProfileConnectionStatus;
}>;


export type ReviewProfileConnectionRequestMutation = (
  { __typename?: 'Mutation' }
  & { reviewProfileConnectionRequest: (
    { __typename?: 'ProfileConnection' }
    & ProfileConnectionBaseFragment
  ) }
);

export type ProfileConnectionUserMetaBaseFragment = (
  { __typename?: 'ProfileConnectionUserMeta' }
  & Pick<ProfileConnectionUserMeta, 'id' | 'lastActionTime'>
);

export type RecruiterProfileBaseFragment = (
  { __typename?: 'RecruiterProfile' }
  & Pick<RecruiterProfile, 'id' | 'status' | 'rejectReason' | 'position' | 'companyName' | 'city' | 'slug' | 'lastActionTime'>
);

export type RecruiterProfileFullFragment = (
  { __typename?: 'RecruiterProfile' }
  & RecruiterProfileBaseFragment
  & RecruiterProfileUserFragment
);

export type RecruiterProfileUserFragment = (
  { __typename?: 'RecruiterProfile' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserBaseFragment
    & UserAvatarFragment
  )> }
);

export type LatestRecruiterProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestRecruiterProfileQuery = (
  { __typename?: 'Query' }
  & { latestRecruiterProfile?: Maybe<(
    { __typename?: 'RecruiterProfile' }
    & RecruiterProfileFullFragment
  )> }
);

export type RecruiterProfileBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type RecruiterProfileBySlugQuery = (
  { __typename?: 'Query' }
  & { recruiterProfileBySlug?: Maybe<(
    { __typename?: 'RecruiterProfile' }
    & RecruiterProfileFullFragment
  )> }
);

export type SendRecruiterProfileToReviewMutationVariables = Exact<{ [key: string]: never; }>;


export type SendRecruiterProfileToReviewMutation = (
  { __typename?: 'Mutation' }
  & { sendRecruiterProfileToReview: (
    { __typename?: 'RecruiterProfile' }
    & RecruiterProfileBaseFragment
  ) }
);

export type UpdateRecruiterProfileMutationVariables = Exact<{
  position?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
}>;


export type UpdateRecruiterProfileMutation = (
  { __typename?: 'Mutation' }
  & { updateRecruiterProfile: (
    { __typename?: 'RecruiterProfile' }
    & RecruiterProfileBaseFragment
  ) }
);

export type SpecializationBaseFragment = (
  { __typename?: 'Specialization' }
  & Pick<Specialization, 'id' | 'name'>
);

export type SpecializationQueryVariables = Exact<{
  query?: Maybe<Scalars['String']>;
}>;


export type SpecializationQuery = (
  { __typename?: 'Query' }
  & { specializations?: Maybe<Array<(
    { __typename?: 'Specialization' }
    & SpecializationBaseFragment
  )>> }
);

export type TechnologyBaseFragment = (
  { __typename?: 'Technology' }
  & Pick<Technology, 'id' | 'name'>
);

export type CreateTechnologyMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateTechnologyMutation = (
  { __typename?: 'Mutation' }
  & { createTechnology: (
    { __typename?: 'Technology' }
    & TechnologyBaseFragment
  ) }
);

export type TechnologiesQueryVariables = Exact<{
  query?: Maybe<Scalars['String']>;
  requiredTechnologiesIds?: Maybe<Array<Scalars['Int']>>;
}>;


export type TechnologiesQuery = (
  { __typename?: 'Query' }
  & { technologies?: Maybe<Array<(
    { __typename?: 'Technology' }
    & TechnologyBaseFragment
  )>> }
);

export type IsFirstCandidateProfileFragment = (
  { __typename?: 'User' }
  & Pick<User, 'isFirstTimeFillingCandidateProfile'>
);

export type UserAvatarFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id'>
  & { avatar?: Maybe<(
    { __typename?: 'UploadedFile' }
    & Pick<UploadedFile, 'id' | 'name' | 'mime' | 'url'>
  )> }
);

export type UserBaseFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'firstName' | 'lastName' | 'computedName' | 'username' | 'email' | 'phone' | 'inactive' | 'confirmed' | 'lastActionTime' | 'created'>
);

export type UserCvFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id'>
  & { cv?: Maybe<(
    { __typename?: 'UploadedFile' }
    & Pick<UploadedFile, 'id' | 'name' | 'mime' | 'url'>
  )> }
);

export type UserEngagementFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'fvType' | 'fvSource' | 'fvMedium' | 'fvCampaign' | 'fvContent' | 'fvTerm' | 'lvType' | 'lvSource' | 'lvMedium' | 'lvCampaign' | 'lvContent' | 'lvTerm' | 'gClientid' | 'gIp' | 'gAgent' | 'gclid'>
);

export type UserPrimaryProfileFragment = (
  { __typename?: 'User' }
  & Pick<User, 'primaryProfile'>
);

export type UserSettingsFragment = (
  { __typename?: 'User' }
  & { settings?: Maybe<(
    { __typename?: 'UserSettings' }
    & UserSettingsBaseFragment
  )> }
);

export type UserSocialLinksFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'linkedinUrl' | 'behanceUrl' | 'githubUrl'>
);

export type AuthUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthUserQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & UserBaseFragment
    & UserPrimaryProfileFragment
    & UserEngagementFieldsFragment
    & UserCvFragment
    & UserAvatarFragment
    & UserSocialLinksFragment
    & IsFirstCandidateProfileFragment
  )> }
);

export type AuthUserConnectionsQueryVariables = Exact<{
  archived?: Maybe<Scalars['Boolean']>;
}>;


export type AuthUserConnectionsQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & { profileConnections?: Maybe<Array<(
      { __typename?: 'ProfileConnection' }
      & ProfileConnectionBaseFragment
      & ProfileConnectionWithUsersFragment
      & ProfileConnectionWithProfilesFragment
      & ProfileConnectionUnreadMessagesCountFragment
      & ProfileConnectionWithUsersMetaFragment
    )>> }
    & UserBaseFragment
  )> }
);

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logOut'>
);

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn: (
    { __typename?: 'User' }
    & UserBaseFragment
    & UserPrimaryProfileFragment
    & UserEngagementFieldsFragment
  ) }
);

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fvType?: Maybe<Scalars['String']>;
  fvSource?: Maybe<Scalars['String']>;
  fvMedium?: Maybe<Scalars['String']>;
  fvCampaign?: Maybe<Scalars['String']>;
  fvContent?: Maybe<Scalars['String']>;
  fvTerm?: Maybe<Scalars['String']>;
  lvType?: Maybe<Scalars['String']>;
  lvSource?: Maybe<Scalars['String']>;
  lvMedium?: Maybe<Scalars['String']>;
  lvCampaign?: Maybe<Scalars['String']>;
  lvContent?: Maybe<Scalars['String']>;
  lvTerm?: Maybe<Scalars['String']>;
  gClientid?: Maybe<Scalars['String']>;
  gIp?: Maybe<Scalars['String']>;
  gAgent?: Maybe<Scalars['String']>;
  gclid?: Maybe<Scalars['String']>;
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp: (
    { __typename?: 'User' }
    & UserBaseFragment
    & UserPrimaryProfileFragment
    & UserEngagementFieldsFragment
  ) }
);

export type UpdateProfileContactsMutationVariables = Exact<{
  phone?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  linkedinUrl?: Maybe<Scalars['String']>;
  behanceUrl?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
}>;


export type UpdateProfileContactsMutation = (
  { __typename?: 'Mutation' }
  & { updateProfileContacts: (
    { __typename?: 'User' }
    & UserBaseFragment
    & UserPrimaryProfileFragment
  ) }
);

export type UserAvatarQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAvatarQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & UserAvatarFragment
  )> }
);

export type UserSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserSettingsQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & UserSettingsFragment
  )> }
);

export type UserSettingsBaseFragment = (
  { __typename?: 'UserSettings' }
  & Pick<UserSettings, 'id' | 'userId' | 'pushNotificationsPermission'>
);

export type UpdateUserSettingsMutationVariables = Exact<{
  pushNotificationsPermission?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateUserSettingsMutation = (
  { __typename?: 'Mutation' }
  & { updateUserSettings: (
    { __typename?: 'UserSettings' }
    & UserSettingsBaseFragment
  ) }
);

export const CandidateProfileBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileBase on CandidateProfile {
  id
  userId
  status
  rejectReason
  position
  salary
  candidateDescription
  experienceDescription
  workExpectations
  achievements
  slug
  lastActionTime
}
    `;
export const TechnologyBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment TechnologyBase on Technology {
  id
  name
}
    `;
export const CandidateProfileTechnologiesFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileTechnologies on CandidateProfile {
  technologies {
    ...TechnologyBase
  }
}
    ${TechnologyBaseFragmentDoc}`;
export const EnglishLevelBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment EnglishLevelBase on EnglishLevel {
  id
  slug
}
    `;
export const CandidateProfileEnglishLevelFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileEnglishLevel on CandidateProfile {
  englishLevel {
    ...EnglishLevelBase
  }
}
    ${EnglishLevelBaseFragmentDoc}`;
export const JobExperienceBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment JobExperienceBase on JobExperience {
  id
  slug
}
    `;
export const CandidateProfileJobExperienceFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileJobExperience on CandidateProfile {
  jobExperience {
    ...JobExperienceBase
  }
}
    ${JobExperienceBaseFragmentDoc}`;
export const EmploymentTypeBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment EmploymentTypeBase on EmploymentType {
  id
  slug
}
    `;
export const CandidateProfileEmploymentTypesFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileEmploymentTypes on CandidateProfile {
  employmentTypes {
    ...EmploymentTypeBase
  }
}
    ${EmploymentTypeBaseFragmentDoc}`;
export const SpecializationBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment SpecializationBase on Specialization {
  id
  name
}
    `;
export const CandidateProfileSpecializationFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileSpecialization on CandidateProfile {
  specialization {
    ...SpecializationBase
  }
}
    ${SpecializationBaseFragmentDoc}`;
export const UserBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment UserBase on User {
  id
  firstName
  lastName
  computedName
  username
  email
  phone
  inactive
  confirmed
  lastActionTime
  created
}
    `;
export const UserCvFragmentDoc = /*#__PURE__*/ gql`
    fragment UserCv on User {
  id
  cv {
    id
    name
    mime
    url
  }
}
    `;
export const UserAvatarFragmentDoc = /*#__PURE__*/ gql`
    fragment UserAvatar on User {
  id
  avatar {
    id
    name
    mime
    url
  }
}
    `;
export const CandidateProfileUserFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileUser on CandidateProfile {
  user {
    ...UserBase
    ...UserCv
    ...UserAvatar
  }
}
    ${UserBaseFragmentDoc}
${UserCvFragmentDoc}
${UserAvatarFragmentDoc}`;
export const CandidateProfileCityBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileCityBase on CandidateProfileCity {
  id
  cityId
  cityName
  cityCountryName
  cityCountrySlug
  cityTimezone
  type
}
    `;
export const CandidateProfileCitiesFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileCities on CandidateProfile {
  cities {
    ...CandidateProfileCityBase
  }
}
    ${CandidateProfileCityBaseFragmentDoc}`;
export const EmploymentLocationBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment EmploymentLocationBase on EmploymentLocation {
  id
  slug
}
    `;
export const CandidateProfileEmploymentLocationsFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileEmploymentLocations on CandidateProfile {
  employmentLocations {
    ...EmploymentLocationBase
  }
}
    ${EmploymentLocationBaseFragmentDoc}`;
export const CandidateProfileFullFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileFull on CandidateProfile {
  ...CandidateProfileBase
  ...CandidateProfileTechnologies
  ...CandidateProfileEnglishLevel
  ...CandidateProfileJobExperience
  ...CandidateProfileEmploymentTypes
  ...CandidateProfileSpecialization
  ...CandidateProfileUser
  ...CandidateProfileCities
  ...CandidateProfileEmploymentLocations
}
    ${CandidateProfileBaseFragmentDoc}
${CandidateProfileTechnologiesFragmentDoc}
${CandidateProfileEnglishLevelFragmentDoc}
${CandidateProfileJobExperienceFragmentDoc}
${CandidateProfileEmploymentTypesFragmentDoc}
${CandidateProfileSpecializationFragmentDoc}
${CandidateProfileUserFragmentDoc}
${CandidateProfileCitiesFragmentDoc}
${CandidateProfileEmploymentLocationsFragmentDoc}`;
export const ChatMessageBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment ChatMessageBase on ChatMessage {
  id
  message
  profileConnectionId
  isSystemMessage
  createdAt
  senderUser {
    isAuthUser
  }
  recipientUser {
    isAuthUser
  }
}
    `;
export const DeviceTokenBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment DeviceTokenBase on DeviceToken {
  id
  userId
  token
  devicePlatform
}
    `;
export const DeviceTokenExtraFragmentDoc = /*#__PURE__*/ gql`
    fragment DeviceTokenExtra on DeviceToken {
  deviceName
  deviceYear
  systemVersion
}
    `;
export const FeatureBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment FeatureBase on Feature {
  id
  name
  status
}
    `;
export const ProfileConnectionBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment ProfileConnectionBase on ProfileConnection {
  id
  status
  initiator
  candidateReportedStatus
  recruiterReportedStatus
}
    `;
export const ProfileConnectionUnreadMessagesCountFragmentDoc = /*#__PURE__*/ gql`
    fragment ProfileConnectionUnreadMessagesCount on ProfileConnection {
  unreadMessagesCount
}
    `;
export const RecruiterProfileBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment RecruiterProfileBase on RecruiterProfile {
  id
  status
  rejectReason
  position
  companyName
  city
  slug
  lastActionTime
}
    `;
export const ProfileConnectionWithProfilesFragmentDoc = /*#__PURE__*/ gql`
    fragment ProfileConnectionWithProfiles on ProfileConnection {
  candidateProfile {
    ...CandidateProfileBase
  }
  recruiterProfile {
    ...RecruiterProfileBase
  }
}
    ${CandidateProfileBaseFragmentDoc}
${RecruiterProfileBaseFragmentDoc}`;
export const ProfileConnectionWithUsersFragmentDoc = /*#__PURE__*/ gql`
    fragment ProfileConnectionWithUsers on ProfileConnection {
  candidateUser {
    ...UserBase
    ...UserAvatar
    isAuthUser
  }
  recruiterUser {
    ...UserBase
    ...UserAvatar
    isAuthUser
  }
}
    ${UserBaseFragmentDoc}
${UserAvatarFragmentDoc}`;
export const ProfileConnectionUserMetaBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment ProfileConnectionUserMetaBase on ProfileConnectionUserMeta {
  id
  lastActionTime
}
    `;
export const ProfileConnectionWithUsersMetaFragmentDoc = /*#__PURE__*/ gql`
    fragment ProfileConnectionWithUsersMeta on ProfileConnection {
  userMeta {
    ...ProfileConnectionUserMetaBase
  }
  buddyMeta {
    ...ProfileConnectionUserMetaBase
  }
}
    ${ProfileConnectionUserMetaBaseFragmentDoc}`;
export const RecruiterProfileUserFragmentDoc = /*#__PURE__*/ gql`
    fragment RecruiterProfileUser on RecruiterProfile {
  user {
    ...UserBase
    ...UserAvatar
  }
}
    ${UserBaseFragmentDoc}
${UserAvatarFragmentDoc}`;
export const RecruiterProfileFullFragmentDoc = /*#__PURE__*/ gql`
    fragment RecruiterProfileFull on RecruiterProfile {
  ...RecruiterProfileBase
  ...RecruiterProfileUser
}
    ${RecruiterProfileBaseFragmentDoc}
${RecruiterProfileUserFragmentDoc}`;
export const IsFirstCandidateProfileFragmentDoc = /*#__PURE__*/ gql`
    fragment IsFirstCandidateProfile on User {
  isFirstTimeFillingCandidateProfile
}
    `;
export const UserEngagementFieldsFragmentDoc = /*#__PURE__*/ gql`
    fragment UserEngagementFields on User {
  fvType
  fvSource
  fvMedium
  fvCampaign
  fvContent
  fvTerm
  lvType
  lvSource
  lvMedium
  lvCampaign
  lvContent
  lvTerm
  gClientid
  gIp
  gAgent
  gclid
}
    `;
export const UserPrimaryProfileFragmentDoc = /*#__PURE__*/ gql`
    fragment UserPrimaryProfile on User {
  primaryProfile
}
    `;
export const UserSettingsBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment UserSettingsBase on UserSettings {
  id
  userId
  pushNotificationsPermission
}
    `;
export const UserSettingsFragmentDoc = /*#__PURE__*/ gql`
    fragment UserSettings on User {
  settings {
    ...UserSettingsBase
  }
}
    ${UserSettingsBaseFragmentDoc}`;
export const UserSocialLinksFragmentDoc = /*#__PURE__*/ gql`
    fragment UserSocialLinks on User {
  id
  linkedinUrl
  behanceUrl
  githubUrl
}
    `;
export const CandidateProfileBySlugDocument = /*#__PURE__*/ gql`
    query candidateProfileBySlug($slug: String!) {
  candidateProfileBySlug(slug: $slug) {
    ...CandidateProfileFull
  }
}
    ${CandidateProfileFullFragmentDoc}`;

/**
 * __useCandidateProfileBySlugQuery__
 *
 * To run a query within a React component, call `useCandidateProfileBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useCandidateProfileBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCandidateProfileBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCandidateProfileBySlugQuery(baseOptions?: Apollo.QueryHookOptions<CandidateProfileBySlugQuery, CandidateProfileBySlugQueryVariables>) {
        return Apollo.useQuery<CandidateProfileBySlugQuery, CandidateProfileBySlugQueryVariables>(CandidateProfileBySlugDocument, baseOptions);
      }
export function useCandidateProfileBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CandidateProfileBySlugQuery, CandidateProfileBySlugQueryVariables>) {
          return Apollo.useLazyQuery<CandidateProfileBySlugQuery, CandidateProfileBySlugQueryVariables>(CandidateProfileBySlugDocument, baseOptions);
        }
export type CandidateProfileBySlugQueryHookResult = ReturnType<typeof useCandidateProfileBySlugQuery>;
export type CandidateProfileBySlugLazyQueryHookResult = ReturnType<typeof useCandidateProfileBySlugLazyQuery>;
export type CandidateProfileBySlugQueryResult = Apollo.QueryResult<CandidateProfileBySlugQuery, CandidateProfileBySlugQueryVariables>;
export const DeactivateCandidateProfilesDocument = /*#__PURE__*/ gql`
    mutation deactivateCandidateProfiles {
  deactivateCandidateProfiles
}
    `;
export type DeactivateCandidateProfilesMutationFn = Apollo.MutationFunction<DeactivateCandidateProfilesMutation, DeactivateCandidateProfilesMutationVariables>;

/**
 * __useDeactivateCandidateProfilesMutation__
 *
 * To run a mutation, you first call `useDeactivateCandidateProfilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeactivateCandidateProfilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deactivateCandidateProfilesMutation, { data, loading, error }] = useDeactivateCandidateProfilesMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeactivateCandidateProfilesMutation(baseOptions?: Apollo.MutationHookOptions<DeactivateCandidateProfilesMutation, DeactivateCandidateProfilesMutationVariables>) {
        return Apollo.useMutation<DeactivateCandidateProfilesMutation, DeactivateCandidateProfilesMutationVariables>(DeactivateCandidateProfilesDocument, baseOptions);
      }
export type DeactivateCandidateProfilesMutationHookResult = ReturnType<typeof useDeactivateCandidateProfilesMutation>;
export type DeactivateCandidateProfilesMutationResult = Apollo.MutationResult<DeactivateCandidateProfilesMutation>;
export type DeactivateCandidateProfilesMutationOptions = Apollo.BaseMutationOptions<DeactivateCandidateProfilesMutation, DeactivateCandidateProfilesMutationVariables>;
export const LatestCandidateProfileDocument = /*#__PURE__*/ gql`
    query latestCandidateProfile {
  latestCandidateProfile {
    ...CandidateProfileFull
  }
}
    ${CandidateProfileFullFragmentDoc}`;

/**
 * __useLatestCandidateProfileQuery__
 *
 * To run a query within a React component, call `useLatestCandidateProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestCandidateProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestCandidateProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useLatestCandidateProfileQuery(baseOptions?: Apollo.QueryHookOptions<LatestCandidateProfileQuery, LatestCandidateProfileQueryVariables>) {
        return Apollo.useQuery<LatestCandidateProfileQuery, LatestCandidateProfileQueryVariables>(LatestCandidateProfileDocument, baseOptions);
      }
export function useLatestCandidateProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestCandidateProfileQuery, LatestCandidateProfileQueryVariables>) {
          return Apollo.useLazyQuery<LatestCandidateProfileQuery, LatestCandidateProfileQueryVariables>(LatestCandidateProfileDocument, baseOptions);
        }
export type LatestCandidateProfileQueryHookResult = ReturnType<typeof useLatestCandidateProfileQuery>;
export type LatestCandidateProfileLazyQueryHookResult = ReturnType<typeof useLatestCandidateProfileLazyQuery>;
export type LatestCandidateProfileQueryResult = Apollo.QueryResult<LatestCandidateProfileQuery, LatestCandidateProfileQueryVariables>;
export const SendCandidateProfileToReviewDocument = /*#__PURE__*/ gql`
    mutation sendCandidateProfileToReview {
  sendCandidateProfileToReview {
    ...CandidateProfileBase
  }
}
    ${CandidateProfileBaseFragmentDoc}`;
export type SendCandidateProfileToReviewMutationFn = Apollo.MutationFunction<SendCandidateProfileToReviewMutation, SendCandidateProfileToReviewMutationVariables>;

/**
 * __useSendCandidateProfileToReviewMutation__
 *
 * To run a mutation, you first call `useSendCandidateProfileToReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCandidateProfileToReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCandidateProfileToReviewMutation, { data, loading, error }] = useSendCandidateProfileToReviewMutation({
 *   variables: {
 *   },
 * });
 */
export function useSendCandidateProfileToReviewMutation(baseOptions?: Apollo.MutationHookOptions<SendCandidateProfileToReviewMutation, SendCandidateProfileToReviewMutationVariables>) {
        return Apollo.useMutation<SendCandidateProfileToReviewMutation, SendCandidateProfileToReviewMutationVariables>(SendCandidateProfileToReviewDocument, baseOptions);
      }
export type SendCandidateProfileToReviewMutationHookResult = ReturnType<typeof useSendCandidateProfileToReviewMutation>;
export type SendCandidateProfileToReviewMutationResult = Apollo.MutationResult<SendCandidateProfileToReviewMutation>;
export type SendCandidateProfileToReviewMutationOptions = Apollo.BaseMutationOptions<SendCandidateProfileToReviewMutation, SendCandidateProfileToReviewMutationVariables>;
export const UpdateCandidateProfileDocument = /*#__PURE__*/ gql`
    mutation updateCandidateProfile($position: String, $salary: Float, $candidateDescription: String, $experienceDescription: String, $workExpectations: String, $achievements: String, $technologiesIds: [Int!], $jobExperienceId: Int, $employmentTypesIds: [Int!], $employmentLocationsIds: [Int!], $englishLevelId: Int, $specializationId: Int, $cities: [CandidateProfileCityInput!]) {
  updateCandidateProfile(position: $position, salary: $salary, candidateDescription: $candidateDescription, experienceDescription: $experienceDescription, workExpectations: $workExpectations, achievements: $achievements, technologiesIds: $technologiesIds, jobExperienceId: $jobExperienceId, employmentTypesIds: $employmentTypesIds, employmentLocationsIds: $employmentLocationsIds, englishLevelId: $englishLevelId, specializationId: $specializationId, cities: $cities) {
    ...CandidateProfileBase
  }
}
    ${CandidateProfileBaseFragmentDoc}`;
export type UpdateCandidateProfileMutationFn = Apollo.MutationFunction<UpdateCandidateProfileMutation, UpdateCandidateProfileMutationVariables>;

/**
 * __useUpdateCandidateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateCandidateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCandidateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCandidateProfileMutation, { data, loading, error }] = useUpdateCandidateProfileMutation({
 *   variables: {
 *      position: // value for 'position'
 *      salary: // value for 'salary'
 *      candidateDescription: // value for 'candidateDescription'
 *      experienceDescription: // value for 'experienceDescription'
 *      workExpectations: // value for 'workExpectations'
 *      achievements: // value for 'achievements'
 *      technologiesIds: // value for 'technologiesIds'
 *      jobExperienceId: // value for 'jobExperienceId'
 *      employmentTypesIds: // value for 'employmentTypesIds'
 *      employmentLocationsIds: // value for 'employmentLocationsIds'
 *      englishLevelId: // value for 'englishLevelId'
 *      specializationId: // value for 'specializationId'
 *      cities: // value for 'cities'
 *   },
 * });
 */
export function useUpdateCandidateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCandidateProfileMutation, UpdateCandidateProfileMutationVariables>) {
        return Apollo.useMutation<UpdateCandidateProfileMutation, UpdateCandidateProfileMutationVariables>(UpdateCandidateProfileDocument, baseOptions);
      }
export type UpdateCandidateProfileMutationHookResult = ReturnType<typeof useUpdateCandidateProfileMutation>;
export type UpdateCandidateProfileMutationResult = Apollo.MutationResult<UpdateCandidateProfileMutation>;
export type UpdateCandidateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateCandidateProfileMutation, UpdateCandidateProfileMutationVariables>;
export const NewMessageDocument = /*#__PURE__*/ gql`
    subscription newMessage {
  newMessage {
    ...ChatMessageBase
  }
}
    ${ChatMessageBaseFragmentDoc}`;

/**
 * __useNewMessageSubscription__
 *
 * To run a query within a React component, call `useNewMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewMessageSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewMessageSubscription, NewMessageSubscriptionVariables>) {
        return Apollo.useSubscription<NewMessageSubscription, NewMessageSubscriptionVariables>(NewMessageDocument, baseOptions);
      }
export type NewMessageSubscriptionHookResult = ReturnType<typeof useNewMessageSubscription>;
export type NewMessageSubscriptionResult = Apollo.SubscriptionResult<NewMessageSubscription>;
export const SendMessageDocument = /*#__PURE__*/ gql`
    mutation sendMessage($profileConnectionId: Int!, $message: String!) {
  sendMessage(message: $message, profileConnectionId: $profileConnectionId) {
    ...ChatMessageBase
  }
}
    ${ChatMessageBaseFragmentDoc}`;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      profileConnectionId: // value for 'profileConnectionId'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, baseOptions);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const RegisterDeviceDocument = /*#__PURE__*/ gql`
    mutation registerDevice($token: String!, $devicePlatform: DevicePlatform!, $deviceYear: String, $systemVersion: String, $deviceName: String) {
  registerDevice(token: $token, devicePlatform: $devicePlatform, deviceYear: $deviceYear, systemVersion: $systemVersion, deviceName: $deviceName) {
    ...DeviceTokenBase
    ...DeviceTokenExtra
  }
}
    ${DeviceTokenBaseFragmentDoc}
${DeviceTokenExtraFragmentDoc}`;
export type RegisterDeviceMutationFn = Apollo.MutationFunction<RegisterDeviceMutation, RegisterDeviceMutationVariables>;

/**
 * __useRegisterDeviceMutation__
 *
 * To run a mutation, you first call `useRegisterDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerDeviceMutation, { data, loading, error }] = useRegisterDeviceMutation({
 *   variables: {
 *      token: // value for 'token'
 *      devicePlatform: // value for 'devicePlatform'
 *      deviceYear: // value for 'deviceYear'
 *      systemVersion: // value for 'systemVersion'
 *      deviceName: // value for 'deviceName'
 *   },
 * });
 */
export function useRegisterDeviceMutation(baseOptions?: Apollo.MutationHookOptions<RegisterDeviceMutation, RegisterDeviceMutationVariables>) {
        return Apollo.useMutation<RegisterDeviceMutation, RegisterDeviceMutationVariables>(RegisterDeviceDocument, baseOptions);
      }
export type RegisterDeviceMutationHookResult = ReturnType<typeof useRegisterDeviceMutation>;
export type RegisterDeviceMutationResult = Apollo.MutationResult<RegisterDeviceMutation>;
export type RegisterDeviceMutationOptions = Apollo.BaseMutationOptions<RegisterDeviceMutation, RegisterDeviceMutationVariables>;
export const UnregisterDeviceDocument = /*#__PURE__*/ gql`
    mutation unregisterDevice($token: String!) {
  unregisterDevice(token: $token)
}
    `;
export type UnregisterDeviceMutationFn = Apollo.MutationFunction<UnregisterDeviceMutation, UnregisterDeviceMutationVariables>;

/**
 * __useUnregisterDeviceMutation__
 *
 * To run a mutation, you first call `useUnregisterDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnregisterDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unregisterDeviceMutation, { data, loading, error }] = useUnregisterDeviceMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useUnregisterDeviceMutation(baseOptions?: Apollo.MutationHookOptions<UnregisterDeviceMutation, UnregisterDeviceMutationVariables>) {
        return Apollo.useMutation<UnregisterDeviceMutation, UnregisterDeviceMutationVariables>(UnregisterDeviceDocument, baseOptions);
      }
export type UnregisterDeviceMutationHookResult = ReturnType<typeof useUnregisterDeviceMutation>;
export type UnregisterDeviceMutationResult = Apollo.MutationResult<UnregisterDeviceMutation>;
export type UnregisterDeviceMutationOptions = Apollo.BaseMutationOptions<UnregisterDeviceMutation, UnregisterDeviceMutationVariables>;
export const EmploymentLocationsDocument = /*#__PURE__*/ gql`
    query employmentLocations {
  employmentLocations {
    ...EmploymentLocationBase
  }
}
    ${EmploymentLocationBaseFragmentDoc}`;

/**
 * __useEmploymentLocationsQuery__
 *
 * To run a query within a React component, call `useEmploymentLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmploymentLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmploymentLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEmploymentLocationsQuery(baseOptions?: Apollo.QueryHookOptions<EmploymentLocationsQuery, EmploymentLocationsQueryVariables>) {
        return Apollo.useQuery<EmploymentLocationsQuery, EmploymentLocationsQueryVariables>(EmploymentLocationsDocument, baseOptions);
      }
export function useEmploymentLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmploymentLocationsQuery, EmploymentLocationsQueryVariables>) {
          return Apollo.useLazyQuery<EmploymentLocationsQuery, EmploymentLocationsQueryVariables>(EmploymentLocationsDocument, baseOptions);
        }
export type EmploymentLocationsQueryHookResult = ReturnType<typeof useEmploymentLocationsQuery>;
export type EmploymentLocationsLazyQueryHookResult = ReturnType<typeof useEmploymentLocationsLazyQuery>;
export type EmploymentLocationsQueryResult = Apollo.QueryResult<EmploymentLocationsQuery, EmploymentLocationsQueryVariables>;
export const EnglishLevelsDocument = /*#__PURE__*/ gql`
    query englishLevels {
  englishLevels {
    ...EnglishLevelBase
  }
}
    ${EnglishLevelBaseFragmentDoc}`;

/**
 * __useEnglishLevelsQuery__
 *
 * To run a query within a React component, call `useEnglishLevelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEnglishLevelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEnglishLevelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEnglishLevelsQuery(baseOptions?: Apollo.QueryHookOptions<EnglishLevelsQuery, EnglishLevelsQueryVariables>) {
        return Apollo.useQuery<EnglishLevelsQuery, EnglishLevelsQueryVariables>(EnglishLevelsDocument, baseOptions);
      }
export function useEnglishLevelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EnglishLevelsQuery, EnglishLevelsQueryVariables>) {
          return Apollo.useLazyQuery<EnglishLevelsQuery, EnglishLevelsQueryVariables>(EnglishLevelsDocument, baseOptions);
        }
export type EnglishLevelsQueryHookResult = ReturnType<typeof useEnglishLevelsQuery>;
export type EnglishLevelsLazyQueryHookResult = ReturnType<typeof useEnglishLevelsLazyQuery>;
export type EnglishLevelsQueryResult = Apollo.QueryResult<EnglishLevelsQuery, EnglishLevelsQueryVariables>;
export const FeatureDocument = /*#__PURE__*/ gql`
    query feature($name: String!) {
  feature(name: $name) {
    ...FeatureBase
  }
}
    ${FeatureBaseFragmentDoc}`;

/**
 * __useFeatureQuery__
 *
 * To run a query within a React component, call `useFeatureQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeatureQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useFeatureQuery(baseOptions?: Apollo.QueryHookOptions<FeatureQuery, FeatureQueryVariables>) {
        return Apollo.useQuery<FeatureQuery, FeatureQueryVariables>(FeatureDocument, baseOptions);
      }
export function useFeatureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeatureQuery, FeatureQueryVariables>) {
          return Apollo.useLazyQuery<FeatureQuery, FeatureQueryVariables>(FeatureDocument, baseOptions);
        }
export type FeatureQueryHookResult = ReturnType<typeof useFeatureQuery>;
export type FeatureLazyQueryHookResult = ReturnType<typeof useFeatureLazyQuery>;
export type FeatureQueryResult = Apollo.QueryResult<FeatureQuery, FeatureQueryVariables>;
export const FeaturesDocument = /*#__PURE__*/ gql`
    query features {
  features {
    ...FeatureBase
  }
}
    ${FeatureBaseFragmentDoc}`;

/**
 * __useFeaturesQuery__
 *
 * To run a query within a React component, call `useFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeaturesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeaturesQuery(baseOptions?: Apollo.QueryHookOptions<FeaturesQuery, FeaturesQueryVariables>) {
        return Apollo.useQuery<FeaturesQuery, FeaturesQueryVariables>(FeaturesDocument, baseOptions);
      }
export function useFeaturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeaturesQuery, FeaturesQueryVariables>) {
          return Apollo.useLazyQuery<FeaturesQuery, FeaturesQueryVariables>(FeaturesDocument, baseOptions);
        }
export type FeaturesQueryHookResult = ReturnType<typeof useFeaturesQuery>;
export type FeaturesLazyQueryHookResult = ReturnType<typeof useFeaturesLazyQuery>;
export type FeaturesQueryResult = Apollo.QueryResult<FeaturesQuery, FeaturesQueryVariables>;
export const JobExperiencesDocument = /*#__PURE__*/ gql`
    query jobExperiences {
  jobExperiences {
    ...JobExperienceBase
  }
}
    ${JobExperienceBaseFragmentDoc}`;

/**
 * __useJobExperiencesQuery__
 *
 * To run a query within a React component, call `useJobExperiencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobExperiencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobExperiencesQuery({
 *   variables: {
 *   },
 * });
 */
export function useJobExperiencesQuery(baseOptions?: Apollo.QueryHookOptions<JobExperiencesQuery, JobExperiencesQueryVariables>) {
        return Apollo.useQuery<JobExperiencesQuery, JobExperiencesQueryVariables>(JobExperiencesDocument, baseOptions);
      }
export function useJobExperiencesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JobExperiencesQuery, JobExperiencesQueryVariables>) {
          return Apollo.useLazyQuery<JobExperiencesQuery, JobExperiencesQueryVariables>(JobExperiencesDocument, baseOptions);
        }
export type JobExperiencesQueryHookResult = ReturnType<typeof useJobExperiencesQuery>;
export type JobExperiencesLazyQueryHookResult = ReturnType<typeof useJobExperiencesLazyQuery>;
export type JobExperiencesQueryResult = Apollo.QueryResult<JobExperiencesQuery, JobExperiencesQueryVariables>;
export const ConnectOAuthProviderDocument = /*#__PURE__*/ gql`
    mutation connectOAuthProvider($provider: OAuthProviders!, $token: String!, $id: String!) {
  connectOAuthProvider(provider: $provider, token: $token, id: $id)
}
    `;
export type ConnectOAuthProviderMutationFn = Apollo.MutationFunction<ConnectOAuthProviderMutation, ConnectOAuthProviderMutationVariables>;

/**
 * __useConnectOAuthProviderMutation__
 *
 * To run a mutation, you first call `useConnectOAuthProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConnectOAuthProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [connectOAuthProviderMutation, { data, loading, error }] = useConnectOAuthProviderMutation({
 *   variables: {
 *      provider: // value for 'provider'
 *      token: // value for 'token'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useConnectOAuthProviderMutation(baseOptions?: Apollo.MutationHookOptions<ConnectOAuthProviderMutation, ConnectOAuthProviderMutationVariables>) {
        return Apollo.useMutation<ConnectOAuthProviderMutation, ConnectOAuthProviderMutationVariables>(ConnectOAuthProviderDocument, baseOptions);
      }
export type ConnectOAuthProviderMutationHookResult = ReturnType<typeof useConnectOAuthProviderMutation>;
export type ConnectOAuthProviderMutationResult = Apollo.MutationResult<ConnectOAuthProviderMutation>;
export type ConnectOAuthProviderMutationOptions = Apollo.BaseMutationOptions<ConnectOAuthProviderMutation, ConnectOAuthProviderMutationVariables>;
export const DisconnectOAuthProviderDocument = /*#__PURE__*/ gql`
    mutation disconnectOAuthProvider($provider: OAuthProviders!) {
  disconnectOAuthProvider(provider: $provider)
}
    `;
export type DisconnectOAuthProviderMutationFn = Apollo.MutationFunction<DisconnectOAuthProviderMutation, DisconnectOAuthProviderMutationVariables>;

/**
 * __useDisconnectOAuthProviderMutation__
 *
 * To run a mutation, you first call `useDisconnectOAuthProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisconnectOAuthProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disconnectOAuthProviderMutation, { data, loading, error }] = useDisconnectOAuthProviderMutation({
 *   variables: {
 *      provider: // value for 'provider'
 *   },
 * });
 */
export function useDisconnectOAuthProviderMutation(baseOptions?: Apollo.MutationHookOptions<DisconnectOAuthProviderMutation, DisconnectOAuthProviderMutationVariables>) {
        return Apollo.useMutation<DisconnectOAuthProviderMutation, DisconnectOAuthProviderMutationVariables>(DisconnectOAuthProviderDocument, baseOptions);
      }
export type DisconnectOAuthProviderMutationHookResult = ReturnType<typeof useDisconnectOAuthProviderMutation>;
export type DisconnectOAuthProviderMutationResult = Apollo.MutationResult<DisconnectOAuthProviderMutation>;
export type DisconnectOAuthProviderMutationOptions = Apollo.BaseMutationOptions<DisconnectOAuthProviderMutation, DisconnectOAuthProviderMutationVariables>;
export const SocialSignUpDocument = /*#__PURE__*/ gql`
    mutation socialSignUp($email: String!, $phone: String, $firstName: String, $lastName: String, $fvType: String, $fvSource: String, $fvMedium: String, $fvCampaign: String, $fvContent: String, $fvTerm: String, $lvType: String, $lvSource: String, $lvMedium: String, $lvCampaign: String, $lvContent: String, $lvTerm: String, $gClientid: String, $gIp: String, $gAgent: String, $gclid: String, $providerId: String!, $providerName: String!, $token: String) {
  socialSignUp(email: $email, phone: $phone, firstName: $firstName, lastName: $lastName, fvType: $fvType, fvSource: $fvSource, fvMedium: $fvMedium, fvCampaign: $fvCampaign, fvContent: $fvContent, fvTerm: $fvTerm, lvType: $lvType, lvSource: $lvSource, lvMedium: $lvMedium, lvCampaign: $lvCampaign, lvContent: $lvContent, lvTerm: $lvTerm, gClientid: $gClientid, gIp: $gIp, gAgent: $gAgent, gclid: $gclid, providerId: $providerId, providerName: $providerName, token: $token) {
    ...UserBase
    ...UserPrimaryProfile
    ...UserEngagementFields
  }
}
    ${UserBaseFragmentDoc}
${UserPrimaryProfileFragmentDoc}
${UserEngagementFieldsFragmentDoc}`;
export type SocialSignUpMutationFn = Apollo.MutationFunction<SocialSignUpMutation, SocialSignUpMutationVariables>;

/**
 * __useSocialSignUpMutation__
 *
 * To run a mutation, you first call `useSocialSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSocialSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [socialSignUpMutation, { data, loading, error }] = useSocialSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      phone: // value for 'phone'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      fvType: // value for 'fvType'
 *      fvSource: // value for 'fvSource'
 *      fvMedium: // value for 'fvMedium'
 *      fvCampaign: // value for 'fvCampaign'
 *      fvContent: // value for 'fvContent'
 *      fvTerm: // value for 'fvTerm'
 *      lvType: // value for 'lvType'
 *      lvSource: // value for 'lvSource'
 *      lvMedium: // value for 'lvMedium'
 *      lvCampaign: // value for 'lvCampaign'
 *      lvContent: // value for 'lvContent'
 *      lvTerm: // value for 'lvTerm'
 *      gClientid: // value for 'gClientid'
 *      gIp: // value for 'gIp'
 *      gAgent: // value for 'gAgent'
 *      gclid: // value for 'gclid'
 *      providerId: // value for 'providerId'
 *      providerName: // value for 'providerName'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useSocialSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SocialSignUpMutation, SocialSignUpMutationVariables>) {
        return Apollo.useMutation<SocialSignUpMutation, SocialSignUpMutationVariables>(SocialSignUpDocument, baseOptions);
      }
export type SocialSignUpMutationHookResult = ReturnType<typeof useSocialSignUpMutation>;
export type SocialSignUpMutationResult = Apollo.MutationResult<SocialSignUpMutation>;
export type SocialSignUpMutationOptions = Apollo.BaseMutationOptions<SocialSignUpMutation, SocialSignUpMutationVariables>;
export const UsersOAuthProvidersDocument = /*#__PURE__*/ gql`
    query usersOAuthProviders {
  usersOAuthProviders {
    id
    providerId
    providerName
    token
  }
}
    `;

/**
 * __useUsersOAuthProvidersQuery__
 *
 * To run a query within a React component, call `useUsersOAuthProvidersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersOAuthProvidersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersOAuthProvidersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersOAuthProvidersQuery(baseOptions?: Apollo.QueryHookOptions<UsersOAuthProvidersQuery, UsersOAuthProvidersQueryVariables>) {
        return Apollo.useQuery<UsersOAuthProvidersQuery, UsersOAuthProvidersQueryVariables>(UsersOAuthProvidersDocument, baseOptions);
      }
export function useUsersOAuthProvidersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersOAuthProvidersQuery, UsersOAuthProvidersQueryVariables>) {
          return Apollo.useLazyQuery<UsersOAuthProvidersQuery, UsersOAuthProvidersQueryVariables>(UsersOAuthProvidersDocument, baseOptions);
        }
export type UsersOAuthProvidersQueryHookResult = ReturnType<typeof useUsersOAuthProvidersQuery>;
export type UsersOAuthProvidersLazyQueryHookResult = ReturnType<typeof useUsersOAuthProvidersLazyQuery>;
export type UsersOAuthProvidersQueryResult = Apollo.QueryResult<UsersOAuthProvidersQuery, UsersOAuthProvidersQueryVariables>;
export const ArchiveProfileConnectionForUserDocument = /*#__PURE__*/ gql`
    mutation archiveProfileConnectionForUser($id: Int!) {
  archiveProfileConnectionForUser(id: $id)
}
    `;
export type ArchiveProfileConnectionForUserMutationFn = Apollo.MutationFunction<ArchiveProfileConnectionForUserMutation, ArchiveProfileConnectionForUserMutationVariables>;

/**
 * __useArchiveProfileConnectionForUserMutation__
 *
 * To run a mutation, you first call `useArchiveProfileConnectionForUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveProfileConnectionForUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveProfileConnectionForUserMutation, { data, loading, error }] = useArchiveProfileConnectionForUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArchiveProfileConnectionForUserMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveProfileConnectionForUserMutation, ArchiveProfileConnectionForUserMutationVariables>) {
        return Apollo.useMutation<ArchiveProfileConnectionForUserMutation, ArchiveProfileConnectionForUserMutationVariables>(ArchiveProfileConnectionForUserDocument, baseOptions);
      }
export type ArchiveProfileConnectionForUserMutationHookResult = ReturnType<typeof useArchiveProfileConnectionForUserMutation>;
export type ArchiveProfileConnectionForUserMutationResult = Apollo.MutationResult<ArchiveProfileConnectionForUserMutation>;
export type ArchiveProfileConnectionForUserMutationOptions = Apollo.BaseMutationOptions<ArchiveProfileConnectionForUserMutation, ArchiveProfileConnectionForUserMutationVariables>;
export const DeleteProfileConnectionForUserDocument = /*#__PURE__*/ gql`
    mutation deleteProfileConnectionForUser($id: Int!) {
  deleteProfileConnectionForUser(id: $id)
}
    `;
export type DeleteProfileConnectionForUserMutationFn = Apollo.MutationFunction<DeleteProfileConnectionForUserMutation, DeleteProfileConnectionForUserMutationVariables>;

/**
 * __useDeleteProfileConnectionForUserMutation__
 *
 * To run a mutation, you first call `useDeleteProfileConnectionForUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProfileConnectionForUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProfileConnectionForUserMutation, { data, loading, error }] = useDeleteProfileConnectionForUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProfileConnectionForUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProfileConnectionForUserMutation, DeleteProfileConnectionForUserMutationVariables>) {
        return Apollo.useMutation<DeleteProfileConnectionForUserMutation, DeleteProfileConnectionForUserMutationVariables>(DeleteProfileConnectionForUserDocument, baseOptions);
      }
export type DeleteProfileConnectionForUserMutationHookResult = ReturnType<typeof useDeleteProfileConnectionForUserMutation>;
export type DeleteProfileConnectionForUserMutationResult = Apollo.MutationResult<DeleteProfileConnectionForUserMutation>;
export type DeleteProfileConnectionForUserMutationOptions = Apollo.BaseMutationOptions<DeleteProfileConnectionForUserMutation, DeleteProfileConnectionForUserMutationVariables>;
export const ProfileConnectionMessagesDocument = /*#__PURE__*/ gql`
    query profileConnectionMessages($profileConnectionId: Int!) {
  profileConnection(id: $profileConnectionId) {
    id
    chatMessages {
      ...ChatMessageBase
    }
  }
}
    ${ChatMessageBaseFragmentDoc}`;

/**
 * __useProfileConnectionMessagesQuery__
 *
 * To run a query within a React component, call `useProfileConnectionMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileConnectionMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileConnectionMessagesQuery({
 *   variables: {
 *      profileConnectionId: // value for 'profileConnectionId'
 *   },
 * });
 */
export function useProfileConnectionMessagesQuery(baseOptions?: Apollo.QueryHookOptions<ProfileConnectionMessagesQuery, ProfileConnectionMessagesQueryVariables>) {
        return Apollo.useQuery<ProfileConnectionMessagesQuery, ProfileConnectionMessagesQueryVariables>(ProfileConnectionMessagesDocument, baseOptions);
      }
export function useProfileConnectionMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileConnectionMessagesQuery, ProfileConnectionMessagesQueryVariables>) {
          return Apollo.useLazyQuery<ProfileConnectionMessagesQuery, ProfileConnectionMessagesQueryVariables>(ProfileConnectionMessagesDocument, baseOptions);
        }
export type ProfileConnectionMessagesQueryHookResult = ReturnType<typeof useProfileConnectionMessagesQuery>;
export type ProfileConnectionMessagesLazyQueryHookResult = ReturnType<typeof useProfileConnectionMessagesLazyQuery>;
export type ProfileConnectionMessagesQueryResult = Apollo.QueryResult<ProfileConnectionMessagesQuery, ProfileConnectionMessagesQueryVariables>;
export const ProfileConnectionMetaDocument = /*#__PURE__*/ gql`
    query profileConnectionMeta($profileConnectionId: Int!) {
  profileConnection(id: $profileConnectionId) {
    ...ProfileConnectionBase
    ...ProfileConnectionWithUsers
    ...ProfileConnectionWithProfiles
    ...ProfileConnectionWithUsersMeta
    ...ProfileConnectionUnreadMessagesCount
  }
}
    ${ProfileConnectionBaseFragmentDoc}
${ProfileConnectionWithUsersFragmentDoc}
${ProfileConnectionWithProfilesFragmentDoc}
${ProfileConnectionWithUsersMetaFragmentDoc}
${ProfileConnectionUnreadMessagesCountFragmentDoc}`;

/**
 * __useProfileConnectionMetaQuery__
 *
 * To run a query within a React component, call `useProfileConnectionMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileConnectionMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileConnectionMetaQuery({
 *   variables: {
 *      profileConnectionId: // value for 'profileConnectionId'
 *   },
 * });
 */
export function useProfileConnectionMetaQuery(baseOptions?: Apollo.QueryHookOptions<ProfileConnectionMetaQuery, ProfileConnectionMetaQueryVariables>) {
        return Apollo.useQuery<ProfileConnectionMetaQuery, ProfileConnectionMetaQueryVariables>(ProfileConnectionMetaDocument, baseOptions);
      }
export function useProfileConnectionMetaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileConnectionMetaQuery, ProfileConnectionMetaQueryVariables>) {
          return Apollo.useLazyQuery<ProfileConnectionMetaQuery, ProfileConnectionMetaQueryVariables>(ProfileConnectionMetaDocument, baseOptions);
        }
export type ProfileConnectionMetaQueryHookResult = ReturnType<typeof useProfileConnectionMetaQuery>;
export type ProfileConnectionMetaLazyQueryHookResult = ReturnType<typeof useProfileConnectionMetaLazyQuery>;
export type ProfileConnectionMetaQueryResult = Apollo.QueryResult<ProfileConnectionMetaQuery, ProfileConnectionMetaQueryVariables>;
export const ProfileConnectionUpdatedDocument = /*#__PURE__*/ gql`
    subscription profileConnectionUpdated {
  profileConnectionUpdated {
    ...ProfileConnectionBase
    ...ProfileConnectionWithUsers
    ...ProfileConnectionUnreadMessagesCount
    ...ProfileConnectionWithUsersMeta
  }
}
    ${ProfileConnectionBaseFragmentDoc}
${ProfileConnectionWithUsersFragmentDoc}
${ProfileConnectionUnreadMessagesCountFragmentDoc}
${ProfileConnectionWithUsersMetaFragmentDoc}`;

/**
 * __useProfileConnectionUpdatedSubscription__
 *
 * To run a query within a React component, call `useProfileConnectionUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useProfileConnectionUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileConnectionUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useProfileConnectionUpdatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ProfileConnectionUpdatedSubscription, ProfileConnectionUpdatedSubscriptionVariables>) {
        return Apollo.useSubscription<ProfileConnectionUpdatedSubscription, ProfileConnectionUpdatedSubscriptionVariables>(ProfileConnectionUpdatedDocument, baseOptions);
      }
export type ProfileConnectionUpdatedSubscriptionHookResult = ReturnType<typeof useProfileConnectionUpdatedSubscription>;
export type ProfileConnectionUpdatedSubscriptionResult = Apollo.SubscriptionResult<ProfileConnectionUpdatedSubscription>;
export const ReviewProfileConnectionRequestDocument = /*#__PURE__*/ gql`
    mutation reviewProfileConnectionRequest($id: Int!, $status: ProfileConnectionStatus!) {
  reviewProfileConnectionRequest(id: $id, status: $status) {
    ...ProfileConnectionBase
  }
}
    ${ProfileConnectionBaseFragmentDoc}`;
export type ReviewProfileConnectionRequestMutationFn = Apollo.MutationFunction<ReviewProfileConnectionRequestMutation, ReviewProfileConnectionRequestMutationVariables>;

/**
 * __useReviewProfileConnectionRequestMutation__
 *
 * To run a mutation, you first call `useReviewProfileConnectionRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReviewProfileConnectionRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reviewProfileConnectionRequestMutation, { data, loading, error }] = useReviewProfileConnectionRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useReviewProfileConnectionRequestMutation(baseOptions?: Apollo.MutationHookOptions<ReviewProfileConnectionRequestMutation, ReviewProfileConnectionRequestMutationVariables>) {
        return Apollo.useMutation<ReviewProfileConnectionRequestMutation, ReviewProfileConnectionRequestMutationVariables>(ReviewProfileConnectionRequestDocument, baseOptions);
      }
export type ReviewProfileConnectionRequestMutationHookResult = ReturnType<typeof useReviewProfileConnectionRequestMutation>;
export type ReviewProfileConnectionRequestMutationResult = Apollo.MutationResult<ReviewProfileConnectionRequestMutation>;
export type ReviewProfileConnectionRequestMutationOptions = Apollo.BaseMutationOptions<ReviewProfileConnectionRequestMutation, ReviewProfileConnectionRequestMutationVariables>;
export const LatestRecruiterProfileDocument = /*#__PURE__*/ gql`
    query latestRecruiterProfile {
  latestRecruiterProfile {
    ...RecruiterProfileFull
  }
}
    ${RecruiterProfileFullFragmentDoc}`;

/**
 * __useLatestRecruiterProfileQuery__
 *
 * To run a query within a React component, call `useLatestRecruiterProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestRecruiterProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestRecruiterProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useLatestRecruiterProfileQuery(baseOptions?: Apollo.QueryHookOptions<LatestRecruiterProfileQuery, LatestRecruiterProfileQueryVariables>) {
        return Apollo.useQuery<LatestRecruiterProfileQuery, LatestRecruiterProfileQueryVariables>(LatestRecruiterProfileDocument, baseOptions);
      }
export function useLatestRecruiterProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestRecruiterProfileQuery, LatestRecruiterProfileQueryVariables>) {
          return Apollo.useLazyQuery<LatestRecruiterProfileQuery, LatestRecruiterProfileQueryVariables>(LatestRecruiterProfileDocument, baseOptions);
        }
export type LatestRecruiterProfileQueryHookResult = ReturnType<typeof useLatestRecruiterProfileQuery>;
export type LatestRecruiterProfileLazyQueryHookResult = ReturnType<typeof useLatestRecruiterProfileLazyQuery>;
export type LatestRecruiterProfileQueryResult = Apollo.QueryResult<LatestRecruiterProfileQuery, LatestRecruiterProfileQueryVariables>;
export const RecruiterProfileBySlugDocument = /*#__PURE__*/ gql`
    query recruiterProfileBySlug($slug: String!) {
  recruiterProfileBySlug(slug: $slug) {
    ...RecruiterProfileFull
  }
}
    ${RecruiterProfileFullFragmentDoc}`;

/**
 * __useRecruiterProfileBySlugQuery__
 *
 * To run a query within a React component, call `useRecruiterProfileBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecruiterProfileBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecruiterProfileBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useRecruiterProfileBySlugQuery(baseOptions?: Apollo.QueryHookOptions<RecruiterProfileBySlugQuery, RecruiterProfileBySlugQueryVariables>) {
        return Apollo.useQuery<RecruiterProfileBySlugQuery, RecruiterProfileBySlugQueryVariables>(RecruiterProfileBySlugDocument, baseOptions);
      }
export function useRecruiterProfileBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecruiterProfileBySlugQuery, RecruiterProfileBySlugQueryVariables>) {
          return Apollo.useLazyQuery<RecruiterProfileBySlugQuery, RecruiterProfileBySlugQueryVariables>(RecruiterProfileBySlugDocument, baseOptions);
        }
export type RecruiterProfileBySlugQueryHookResult = ReturnType<typeof useRecruiterProfileBySlugQuery>;
export type RecruiterProfileBySlugLazyQueryHookResult = ReturnType<typeof useRecruiterProfileBySlugLazyQuery>;
export type RecruiterProfileBySlugQueryResult = Apollo.QueryResult<RecruiterProfileBySlugQuery, RecruiterProfileBySlugQueryVariables>;
export const SendRecruiterProfileToReviewDocument = /*#__PURE__*/ gql`
    mutation sendRecruiterProfileToReview {
  sendRecruiterProfileToReview {
    ...RecruiterProfileBase
  }
}
    ${RecruiterProfileBaseFragmentDoc}`;
export type SendRecruiterProfileToReviewMutationFn = Apollo.MutationFunction<SendRecruiterProfileToReviewMutation, SendRecruiterProfileToReviewMutationVariables>;

/**
 * __useSendRecruiterProfileToReviewMutation__
 *
 * To run a mutation, you first call `useSendRecruiterProfileToReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendRecruiterProfileToReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendRecruiterProfileToReviewMutation, { data, loading, error }] = useSendRecruiterProfileToReviewMutation({
 *   variables: {
 *   },
 * });
 */
export function useSendRecruiterProfileToReviewMutation(baseOptions?: Apollo.MutationHookOptions<SendRecruiterProfileToReviewMutation, SendRecruiterProfileToReviewMutationVariables>) {
        return Apollo.useMutation<SendRecruiterProfileToReviewMutation, SendRecruiterProfileToReviewMutationVariables>(SendRecruiterProfileToReviewDocument, baseOptions);
      }
export type SendRecruiterProfileToReviewMutationHookResult = ReturnType<typeof useSendRecruiterProfileToReviewMutation>;
export type SendRecruiterProfileToReviewMutationResult = Apollo.MutationResult<SendRecruiterProfileToReviewMutation>;
export type SendRecruiterProfileToReviewMutationOptions = Apollo.BaseMutationOptions<SendRecruiterProfileToReviewMutation, SendRecruiterProfileToReviewMutationVariables>;
export const UpdateRecruiterProfileDocument = /*#__PURE__*/ gql`
    mutation updateRecruiterProfile($position: String, $companyName: String) {
  updateRecruiterProfile(position: $position, companyName: $companyName) {
    ...RecruiterProfileBase
  }
}
    ${RecruiterProfileBaseFragmentDoc}`;
export type UpdateRecruiterProfileMutationFn = Apollo.MutationFunction<UpdateRecruiterProfileMutation, UpdateRecruiterProfileMutationVariables>;

/**
 * __useUpdateRecruiterProfileMutation__
 *
 * To run a mutation, you first call `useUpdateRecruiterProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRecruiterProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRecruiterProfileMutation, { data, loading, error }] = useUpdateRecruiterProfileMutation({
 *   variables: {
 *      position: // value for 'position'
 *      companyName: // value for 'companyName'
 *   },
 * });
 */
export function useUpdateRecruiterProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRecruiterProfileMutation, UpdateRecruiterProfileMutationVariables>) {
        return Apollo.useMutation<UpdateRecruiterProfileMutation, UpdateRecruiterProfileMutationVariables>(UpdateRecruiterProfileDocument, baseOptions);
      }
export type UpdateRecruiterProfileMutationHookResult = ReturnType<typeof useUpdateRecruiterProfileMutation>;
export type UpdateRecruiterProfileMutationResult = Apollo.MutationResult<UpdateRecruiterProfileMutation>;
export type UpdateRecruiterProfileMutationOptions = Apollo.BaseMutationOptions<UpdateRecruiterProfileMutation, UpdateRecruiterProfileMutationVariables>;
export const SpecializationDocument = /*#__PURE__*/ gql`
    query specialization($query: String) {
  specializations(query: $query) {
    ...SpecializationBase
  }
}
    ${SpecializationBaseFragmentDoc}`;

/**
 * __useSpecializationQuery__
 *
 * To run a query within a React component, call `useSpecializationQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpecializationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpecializationQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSpecializationQuery(baseOptions?: Apollo.QueryHookOptions<SpecializationQuery, SpecializationQueryVariables>) {
        return Apollo.useQuery<SpecializationQuery, SpecializationQueryVariables>(SpecializationDocument, baseOptions);
      }
export function useSpecializationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SpecializationQuery, SpecializationQueryVariables>) {
          return Apollo.useLazyQuery<SpecializationQuery, SpecializationQueryVariables>(SpecializationDocument, baseOptions);
        }
export type SpecializationQueryHookResult = ReturnType<typeof useSpecializationQuery>;
export type SpecializationLazyQueryHookResult = ReturnType<typeof useSpecializationLazyQuery>;
export type SpecializationQueryResult = Apollo.QueryResult<SpecializationQuery, SpecializationQueryVariables>;
export const CreateTechnologyDocument = /*#__PURE__*/ gql`
    mutation createTechnology($name: String!) {
  createTechnology(name: $name) {
    ...TechnologyBase
  }
}
    ${TechnologyBaseFragmentDoc}`;
export type CreateTechnologyMutationFn = Apollo.MutationFunction<CreateTechnologyMutation, CreateTechnologyMutationVariables>;

/**
 * __useCreateTechnologyMutation__
 *
 * To run a mutation, you first call `useCreateTechnologyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTechnologyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTechnologyMutation, { data, loading, error }] = useCreateTechnologyMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateTechnologyMutation(baseOptions?: Apollo.MutationHookOptions<CreateTechnologyMutation, CreateTechnologyMutationVariables>) {
        return Apollo.useMutation<CreateTechnologyMutation, CreateTechnologyMutationVariables>(CreateTechnologyDocument, baseOptions);
      }
export type CreateTechnologyMutationHookResult = ReturnType<typeof useCreateTechnologyMutation>;
export type CreateTechnologyMutationResult = Apollo.MutationResult<CreateTechnologyMutation>;
export type CreateTechnologyMutationOptions = Apollo.BaseMutationOptions<CreateTechnologyMutation, CreateTechnologyMutationVariables>;
export const TechnologiesDocument = /*#__PURE__*/ gql`
    query technologies($query: String, $requiredTechnologiesIds: [Int!]) {
  technologies(query: $query, requiredTechnologiesIds: $requiredTechnologiesIds) {
    ...TechnologyBase
  }
}
    ${TechnologyBaseFragmentDoc}`;

/**
 * __useTechnologiesQuery__
 *
 * To run a query within a React component, call `useTechnologiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTechnologiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTechnologiesQuery({
 *   variables: {
 *      query: // value for 'query'
 *      requiredTechnologiesIds: // value for 'requiredTechnologiesIds'
 *   },
 * });
 */
export function useTechnologiesQuery(baseOptions?: Apollo.QueryHookOptions<TechnologiesQuery, TechnologiesQueryVariables>) {
        return Apollo.useQuery<TechnologiesQuery, TechnologiesQueryVariables>(TechnologiesDocument, baseOptions);
      }
export function useTechnologiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TechnologiesQuery, TechnologiesQueryVariables>) {
          return Apollo.useLazyQuery<TechnologiesQuery, TechnologiesQueryVariables>(TechnologiesDocument, baseOptions);
        }
export type TechnologiesQueryHookResult = ReturnType<typeof useTechnologiesQuery>;
export type TechnologiesLazyQueryHookResult = ReturnType<typeof useTechnologiesLazyQuery>;
export type TechnologiesQueryResult = Apollo.QueryResult<TechnologiesQuery, TechnologiesQueryVariables>;
export const AuthUserDocument = /*#__PURE__*/ gql`
    query authUser {
  authUser {
    ...UserBase
    ...UserPrimaryProfile
    ...UserEngagementFields
    ...UserCv
    ...UserAvatar
    ...UserSocialLinks
    ...IsFirstCandidateProfile
  }
}
    ${UserBaseFragmentDoc}
${UserPrimaryProfileFragmentDoc}
${UserEngagementFieldsFragmentDoc}
${UserCvFragmentDoc}
${UserAvatarFragmentDoc}
${UserSocialLinksFragmentDoc}
${IsFirstCandidateProfileFragmentDoc}`;

/**
 * __useAuthUserQuery__
 *
 * To run a query within a React component, call `useAuthUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthUserQuery(baseOptions?: Apollo.QueryHookOptions<AuthUserQuery, AuthUserQueryVariables>) {
        return Apollo.useQuery<AuthUserQuery, AuthUserQueryVariables>(AuthUserDocument, baseOptions);
      }
export function useAuthUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthUserQuery, AuthUserQueryVariables>) {
          return Apollo.useLazyQuery<AuthUserQuery, AuthUserQueryVariables>(AuthUserDocument, baseOptions);
        }
export type AuthUserQueryHookResult = ReturnType<typeof useAuthUserQuery>;
export type AuthUserLazyQueryHookResult = ReturnType<typeof useAuthUserLazyQuery>;
export type AuthUserQueryResult = Apollo.QueryResult<AuthUserQuery, AuthUserQueryVariables>;
export const AuthUserConnectionsDocument = /*#__PURE__*/ gql`
    query authUserConnections($archived: Boolean) {
  authUser {
    ...UserBase
    profileConnections(archived: $archived) {
      ...ProfileConnectionBase
      ...ProfileConnectionWithUsers
      ...ProfileConnectionWithProfiles
      ...ProfileConnectionUnreadMessagesCount
      ...ProfileConnectionWithUsersMeta
    }
  }
}
    ${UserBaseFragmentDoc}
${ProfileConnectionBaseFragmentDoc}
${ProfileConnectionWithUsersFragmentDoc}
${ProfileConnectionWithProfilesFragmentDoc}
${ProfileConnectionUnreadMessagesCountFragmentDoc}
${ProfileConnectionWithUsersMetaFragmentDoc}`;

/**
 * __useAuthUserConnectionsQuery__
 *
 * To run a query within a React component, call `useAuthUserConnectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthUserConnectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthUserConnectionsQuery({
 *   variables: {
 *      archived: // value for 'archived'
 *   },
 * });
 */
export function useAuthUserConnectionsQuery(baseOptions?: Apollo.QueryHookOptions<AuthUserConnectionsQuery, AuthUserConnectionsQueryVariables>) {
        return Apollo.useQuery<AuthUserConnectionsQuery, AuthUserConnectionsQueryVariables>(AuthUserConnectionsDocument, baseOptions);
      }
export function useAuthUserConnectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthUserConnectionsQuery, AuthUserConnectionsQueryVariables>) {
          return Apollo.useLazyQuery<AuthUserConnectionsQuery, AuthUserConnectionsQueryVariables>(AuthUserConnectionsDocument, baseOptions);
        }
export type AuthUserConnectionsQueryHookResult = ReturnType<typeof useAuthUserConnectionsQuery>;
export type AuthUserConnectionsLazyQueryHookResult = ReturnType<typeof useAuthUserConnectionsLazyQuery>;
export type AuthUserConnectionsQueryResult = Apollo.QueryResult<AuthUserConnectionsQuery, AuthUserConnectionsQueryVariables>;
export const LogOutDocument = /*#__PURE__*/ gql`
    mutation logOut {
  logOut
}
    `;
export type LogOutMutationFn = Apollo.MutationFunction<LogOutMutation, LogOutMutationVariables>;

/**
 * __useLogOutMutation__
 *
 * To run a mutation, you first call `useLogOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logOutMutation, { data, loading, error }] = useLogOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogOutMutation(baseOptions?: Apollo.MutationHookOptions<LogOutMutation, LogOutMutationVariables>) {
        return Apollo.useMutation<LogOutMutation, LogOutMutationVariables>(LogOutDocument, baseOptions);
      }
export type LogOutMutationHookResult = ReturnType<typeof useLogOutMutation>;
export type LogOutMutationResult = Apollo.MutationResult<LogOutMutation>;
export type LogOutMutationOptions = Apollo.BaseMutationOptions<LogOutMutation, LogOutMutationVariables>;
export const SignInDocument = /*#__PURE__*/ gql`
    mutation signIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    ...UserBase
    ...UserPrimaryProfile
    ...UserEngagementFields
  }
}
    ${UserBaseFragmentDoc}
${UserPrimaryProfileFragmentDoc}
${UserEngagementFieldsFragmentDoc}`;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = /*#__PURE__*/ gql`
    mutation signUp($email: String!, $phone: String, $password: String!, $repeatPassword: String!, $firstName: String, $lastName: String, $fvType: String, $fvSource: String, $fvMedium: String, $fvCampaign: String, $fvContent: String, $fvTerm: String, $lvType: String, $lvSource: String, $lvMedium: String, $lvCampaign: String, $lvContent: String, $lvTerm: String, $gClientid: String, $gIp: String, $gAgent: String, $gclid: String) {
  signUp(email: $email, phone: $phone, password: $password, repeatPassword: $repeatPassword, firstName: $firstName, lastName: $lastName, fvType: $fvType, fvSource: $fvSource, fvMedium: $fvMedium, fvCampaign: $fvCampaign, fvContent: $fvContent, fvTerm: $fvTerm, lvType: $lvType, lvSource: $lvSource, lvMedium: $lvMedium, lvCampaign: $lvCampaign, lvContent: $lvContent, lvTerm: $lvTerm, gClientid: $gClientid, gIp: $gIp, gAgent: $gAgent, gclid: $gclid) {
    ...UserBase
    ...UserPrimaryProfile
    ...UserEngagementFields
  }
}
    ${UserBaseFragmentDoc}
${UserPrimaryProfileFragmentDoc}
${UserEngagementFieldsFragmentDoc}`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      phone: // value for 'phone'
 *      password: // value for 'password'
 *      repeatPassword: // value for 'repeatPassword'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      fvType: // value for 'fvType'
 *      fvSource: // value for 'fvSource'
 *      fvMedium: // value for 'fvMedium'
 *      fvCampaign: // value for 'fvCampaign'
 *      fvContent: // value for 'fvContent'
 *      fvTerm: // value for 'fvTerm'
 *      lvType: // value for 'lvType'
 *      lvSource: // value for 'lvSource'
 *      lvMedium: // value for 'lvMedium'
 *      lvCampaign: // value for 'lvCampaign'
 *      lvContent: // value for 'lvContent'
 *      lvTerm: // value for 'lvTerm'
 *      gClientid: // value for 'gClientid'
 *      gIp: // value for 'gIp'
 *      gAgent: // value for 'gAgent'
 *      gclid: // value for 'gclid'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UpdateProfileContactsDocument = /*#__PURE__*/ gql`
    mutation updateProfileContacts($phone: String, $firstName: String!, $lastName: String!, $linkedinUrl: String, $behanceUrl: String, $githubUrl: String) {
  updateProfileContacts(firstName: $firstName, lastName: $lastName, phone: $phone, linkedinUrl: $linkedinUrl, behanceUrl: $behanceUrl, githubUrl: $githubUrl) {
    ...UserBase
    ...UserPrimaryProfile
  }
}
    ${UserBaseFragmentDoc}
${UserPrimaryProfileFragmentDoc}`;
export type UpdateProfileContactsMutationFn = Apollo.MutationFunction<UpdateProfileContactsMutation, UpdateProfileContactsMutationVariables>;

/**
 * __useUpdateProfileContactsMutation__
 *
 * To run a mutation, you first call `useUpdateProfileContactsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileContactsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileContactsMutation, { data, loading, error }] = useUpdateProfileContactsMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      linkedinUrl: // value for 'linkedinUrl'
 *      behanceUrl: // value for 'behanceUrl'
 *      githubUrl: // value for 'githubUrl'
 *   },
 * });
 */
export function useUpdateProfileContactsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileContactsMutation, UpdateProfileContactsMutationVariables>) {
        return Apollo.useMutation<UpdateProfileContactsMutation, UpdateProfileContactsMutationVariables>(UpdateProfileContactsDocument, baseOptions);
      }
export type UpdateProfileContactsMutationHookResult = ReturnType<typeof useUpdateProfileContactsMutation>;
export type UpdateProfileContactsMutationResult = Apollo.MutationResult<UpdateProfileContactsMutation>;
export type UpdateProfileContactsMutationOptions = Apollo.BaseMutationOptions<UpdateProfileContactsMutation, UpdateProfileContactsMutationVariables>;
export const UserAvatarDocument = /*#__PURE__*/ gql`
    query UserAvatar {
  authUser {
    ...UserAvatar
  }
}
    ${UserAvatarFragmentDoc}`;

/**
 * __useUserAvatarQuery__
 *
 * To run a query within a React component, call `useUserAvatarQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAvatarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAvatarQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserAvatarQuery(baseOptions?: Apollo.QueryHookOptions<UserAvatarQuery, UserAvatarQueryVariables>) {
        return Apollo.useQuery<UserAvatarQuery, UserAvatarQueryVariables>(UserAvatarDocument, baseOptions);
      }
export function useUserAvatarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserAvatarQuery, UserAvatarQueryVariables>) {
          return Apollo.useLazyQuery<UserAvatarQuery, UserAvatarQueryVariables>(UserAvatarDocument, baseOptions);
        }
export type UserAvatarQueryHookResult = ReturnType<typeof useUserAvatarQuery>;
export type UserAvatarLazyQueryHookResult = ReturnType<typeof useUserAvatarLazyQuery>;
export type UserAvatarQueryResult = Apollo.QueryResult<UserAvatarQuery, UserAvatarQueryVariables>;
export const UserSettingsDocument = /*#__PURE__*/ gql`
    query userSettings {
  authUser {
    id
    ...UserSettings
  }
}
    ${UserSettingsFragmentDoc}`;

/**
 * __useUserSettingsQuery__
 *
 * To run a query within a React component, call `useUserSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserSettingsQuery(baseOptions?: Apollo.QueryHookOptions<UserSettingsQuery, UserSettingsQueryVariables>) {
        return Apollo.useQuery<UserSettingsQuery, UserSettingsQueryVariables>(UserSettingsDocument, baseOptions);
      }
export function useUserSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserSettingsQuery, UserSettingsQueryVariables>) {
          return Apollo.useLazyQuery<UserSettingsQuery, UserSettingsQueryVariables>(UserSettingsDocument, baseOptions);
        }
export type UserSettingsQueryHookResult = ReturnType<typeof useUserSettingsQuery>;
export type UserSettingsLazyQueryHookResult = ReturnType<typeof useUserSettingsLazyQuery>;
export type UserSettingsQueryResult = Apollo.QueryResult<UserSettingsQuery, UserSettingsQueryVariables>;
export const UpdateUserSettingsDocument = /*#__PURE__*/ gql`
    mutation updateUserSettings($pushNotificationsPermission: Boolean) {
  updateUserSettings(pushNotificationsPermission: $pushNotificationsPermission) {
    ...UserSettingsBase
  }
}
    ${UserSettingsBaseFragmentDoc}`;
export type UpdateUserSettingsMutationFn = Apollo.MutationFunction<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>;

/**
 * __useUpdateUserSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateUserSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserSettingsMutation, { data, loading, error }] = useUpdateUserSettingsMutation({
 *   variables: {
 *      pushNotificationsPermission: // value for 'pushNotificationsPermission'
 *   },
 * });
 */
export function useUpdateUserSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>) {
        return Apollo.useMutation<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>(UpdateUserSettingsDocument, baseOptions);
      }
export type UpdateUserSettingsMutationHookResult = ReturnType<typeof useUpdateUserSettingsMutation>;
export type UpdateUserSettingsMutationResult = Apollo.MutationResult<UpdateUserSettingsMutation>;
export type UpdateUserSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>;