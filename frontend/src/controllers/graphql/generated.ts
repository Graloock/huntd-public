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
  GraphQLDateTime: string;
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
  deleteMessage: Scalars['Int'];
  deleteMessageTemplate: Scalars['Boolean'];
  deleteObsoleteSourcedVacancies: Scalars['Int'];
  deleteProfileConnectionForUser?: Maybe<Scalars['Boolean']>;
  deleteWorkPlace: Scalars['Boolean'];
  disconnectOAuthProvider: Scalars['Boolean'];
  fetchWorkPlaces?: Maybe<Array<CandidateProfileWorkPlace>>;
  forgotPassword: Scalars['Boolean'];
  logOut: Scalars['Boolean'];
  logOutFromUser: User;
  postMessage: Scalars['Int'];
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


export type MutationDeleteMessageArgs = {
  id: Scalars['Int'];
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


export type MutationPostMessageArgs = {
  type: FlashMessageType;
  heading: Scalars['String'];
  text: Scalars['String'];
  cta?: Maybe<CtaInput>;
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
  visibleMessages: Array<FlashMessage>;
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

export type CtaInput = {
  title: Scalars['String'];
  link: Scalars['String'];
};

export type Cta = {
  __typename?: 'Cta';
  title: Scalars['String'];
  link: Scalars['String'];
};

export enum FlashMessageType {
  Info = 'INFO',
  Success = 'SUCCESS',
  Warning = 'WARNING',
  Error = 'ERROR'
}

export type FlashMessage = {
  __typename?: 'FlashMessage';
  id: Scalars['Int'];
  type: FlashMessageType;
  heading: Scalars['String'];
  text: Scalars['String'];
  cta?: Maybe<Cta>;
};


export type AdminSettingsBaseFragment = (
  { __typename?: 'AdminSettings' }
  & Pick<AdminSettings, 'id' | 'userId' | 'contactsVisibilityPermission' | 'silentProfileUpdate'>
);

export type UpdateAdminSettingsMutationVariables = Exact<{
  permissions: UpdateAdminSettingsValues;
}>;


export type UpdateAdminSettingsMutation = (
  { __typename?: 'Mutation' }
  & { updateAdminSettings: (
    { __typename?: 'AdminSettings' }
    & AdminSettingsBaseFragment
  ) }
);

export type CandidateProfileFullFragment = (
  { __typename?: 'CandidateProfile' }
  & CandidateProfileBaseFragment
  & CandidateProfileTechnologiesFragment
  & CandidateProfileEnglishLevelFragment
  & CandidateProfileJobExperienceFragment
  & CandidateProfileEmploymentTypesFragment
  & CandidateProfileSpecializationsFragment
  & CandidateProfileUserFragment
  & CandidateProfileCitiesFragment
  & CandidateProfileEmploymentLocationsFragment
  & CandidateProfileWorkPlacesFragment
);

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

export type CandidateProfileConnectionsFragment = (
  { __typename?: 'CandidateProfile' }
  & Pick<CandidateProfile, 'connectionsCount'>
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

export type CandidateProfileJobExperienceFragment = (
  { __typename?: 'CandidateProfile' }
  & { jobExperience?: Maybe<(
    { __typename?: 'JobExperience' }
    & JobExperienceBaseFragment
  )> }
);

export type CandidateProfileSpecializationsFragment = (
  { __typename?: 'CandidateProfile' }
  & { specializations?: Maybe<Array<(
    { __typename?: 'Specialization' }
    & SpecializationBaseFragment
  )>> }
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
    & { nfts?: Maybe<Array<(
      { __typename?: 'Nft' }
      & NftBaseFragment
    )>> }
    & UserBaseFragment
    & UserCvFragment
    & UserAvatarFragment
  )> }
);

export type CandidateProfileUserWithNftFragment = (
  { __typename?: 'CandidateProfile' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { nfts?: Maybe<Array<(
      { __typename?: 'Nft' }
      & NftBaseFragment
    )>> }
  )> }
);

export type CandidateProfileWorkPlacesFragment = (
  { __typename?: 'CandidateProfile' }
  & { workPlaces?: Maybe<Array<(
    { __typename?: 'CandidateProfileWorkPlace' }
    & WorkPlaceFullFragment
  )>> }
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

export type CandidateProfilesBySubscriptionQueryVariables = Exact<{
  subscriptionLastInteract: Scalars['GraphQLDateTime'];
  where: PublicProfilesParameters;
}>;


export type CandidateProfilesBySubscriptionQuery = (
  { __typename?: 'Query' }
  & { candidateProfilesBySubscription: Array<(
    { __typename?: 'CandidateProfile' }
    & CandidateProfileBaseFragment
  )> }
);

export type LatestActiveCandidateProfileQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type LatestActiveCandidateProfileQuery = (
  { __typename?: 'Query' }
  & { latestActiveCandidateProfile?: Maybe<(
    { __typename?: 'CandidateProfile' }
    & CandidateProfileBaseFragment
  )> }
);

export type LatestCandidateProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestCandidateProfileQuery = (
  { __typename?: 'Query' }
  & { latestCandidateProfile?: Maybe<(
    { __typename?: 'CandidateProfile' }
    & CandidateProfileFullFragment
  )> }
);

export type PerfectCandidatesAmountQueryVariables = Exact<{
  where?: Maybe<PublicProfilesParameters>;
}>;


export type PerfectCandidatesAmountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'perfectCandidatesAmount'>
);

export type CandidateProfileStatusUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type CandidateProfileStatusUpdatedSubscription = (
  { __typename?: 'Subscription' }
  & { candidateProfileStatusUpdated: (
    { __typename?: 'CandidateProfile' }
    & CandidateProfileBaseFragment
  ) }
);

export type PublicCandidateProfilesQueryVariables = Exact<{
  where?: Maybe<PublicProfilesParameters>;
  options?: Maybe<PublicProfilesOptions>;
}>;


export type PublicCandidateProfilesQuery = (
  { __typename?: 'Query' }
  & { publicCandidateProfiles: (
    { __typename?: 'PublicCandidateProfilesResult' }
    & Pick<PublicCandidateProfilesResult, 'hasMore' | 'count'>
    & { rows: Array<(
      { __typename?: 'CandidateProfile' }
      & CandidateProfileBaseFragment
      & CandidateProfileTechnologiesFragment
      & CandidateProfileEnglishLevelFragment
      & CandidateProfileJobExperienceFragment
      & CandidateProfileEmploymentTypesFragment
      & CandidateProfileSpecializationsFragment
      & CandidateProfileCitiesFragment
      & CandidateProfileEmploymentLocationsFragment
      & CandidateProfileConnectionsFragment
      & CandidateProfileWorkPlacesFragment
      & CandidateProfileUserWithNftFragment
    )> }
  ) }
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
  specializationsIds?: Maybe<Array<Scalars['Int']>>;
  cities?: Maybe<Array<CandidateProfileCityInput>>;
  workPlaces?: Maybe<Array<CandidateProfileWorkPlaceInput>>;
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
  & Pick<ChatMessage, 'id' | 'message' | 'profileConnectionId' | 'isSystemMessage' | 'createdAt' | 'updatedAt'>
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

export type UpdateMessageMutationVariables = Exact<{
  id: Scalars['Int'];
  values: UpdateMessageValues;
}>;


export type UpdateMessageMutation = (
  { __typename?: 'Mutation' }
  & { updateMessage: (
    { __typename?: 'ChatMessage' }
    & ChatMessageBaseFragment
  ) }
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

export type EmploymentTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type EmploymentTypesQuery = (
  { __typename?: 'Query' }
  & { employmentTypes?: Maybe<Array<(
    { __typename?: 'EmploymentType' }
    & EmploymentTypeBaseFragment
  )>> }
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

export type SendFeedbackMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['String'];
}>;


export type SendFeedbackMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'sendFeedback'>
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

export type NftBaseFragment = (
  { __typename?: 'Nft' }
  & Pick<Nft, 'id' | 'userId' | 'openseaUrl'>
  & { entity: (
    { __typename?: 'UploadedFile' }
    & Pick<UploadedFile, 'id' | 'url' | 'name' | 'mime'>
  ) }
);

export type AllNftsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllNftsQuery = (
  { __typename?: 'Query' }
  & { allNfts?: Maybe<Array<(
    { __typename?: 'Nft' }
    & NftBaseFragment
  )>> }
);

export type ClaimNftMutationVariables = Exact<{
  nftId?: Maybe<Scalars['Int']>;
}>;


export type ClaimNftMutation = (
  { __typename?: 'Mutation' }
  & { claimNft?: Maybe<(
    { __typename?: 'Nft' }
    & NftBaseFragment
  )> }
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

export type SocialSignUpAsInactiveUserMutationVariables = Exact<{
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
}>;


export type SocialSignUpAsInactiveUserMutation = (
  { __typename?: 'Mutation' }
  & { socialSignUpAsInactiveUser: (
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

export type SendPaymentRequestMutationVariables = Exact<{
  profileConnectionId: Scalars['Int'];
  paymentAmount: Scalars['Int'];
  candidateSlug: Scalars['String'];
}>;


export type SendPaymentRequestMutation = (
  { __typename?: 'Mutation' }
  & { sendPaymentRequest: (
    { __typename?: 'ProfileConnection' }
    & ProfileConnectionBaseFragment
  ) }
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

export type ProfileConnectionMetaWithMessagesQueryVariables = Exact<{
  profileConnectionId: Scalars['Int'];
}>;


export type ProfileConnectionMetaWithMessagesQuery = (
  { __typename?: 'Query' }
  & { profileConnection?: Maybe<(
    { __typename?: 'ProfileConnection' }
    & ProfileConnectionBaseFragment
    & ProfileConnectionWithUsersFragment
    & ProfileConnectionWithProfilesFragment
    & ProfileConnectionWithUsersMetaFragment
    & ProfileConnectionUnreadMessagesCountFragment
    & ProfileConnectionMessagesFragment
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

export type ReportOfferStatusMutationVariables = Exact<{
  profileConnectionId: Scalars['Int'];
  status: OfferStatus;
}>;


export type ReportOfferStatusMutation = (
  { __typename?: 'Mutation' }
  & { reportOfferStatus: (
    { __typename?: 'ProfileConnection' }
    & ProfileConnectionBaseFragment
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

export type SendProfileConnectionRequestMutationVariables = Exact<{
  candidateProfileId: Scalars['Int'];
  recruiterProfileId: Scalars['Int'];
}>;


export type SendProfileConnectionRequestMutation = (
  { __typename?: 'Mutation' }
  & { sendProfileConnectionRequest: (
    { __typename?: 'ProfileConnection' }
    & ProfileConnectionBaseFragment
  ) }
);

export type UnarchiveProfileConnectionForUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UnarchiveProfileConnectionForUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'unarchiveProfileConnectionForUser'>
);

export type UpdateConnectionLastActionTimeMutationVariables = Exact<{
  id: Scalars['Int'];
  time: Scalars['GraphQLDateTime'];
}>;


export type UpdateConnectionLastActionTimeMutation = (
  { __typename?: 'Mutation' }
  & { updateConnectionLastActionTime?: Maybe<(
    { __typename?: 'ProfileConnection' }
    & Pick<ProfileConnection, 'id'>
    & { userMeta?: Maybe<(
      { __typename?: 'ProfileConnectionUserMeta' }
      & Pick<ProfileConnectionUserMeta, 'id' | 'lastActionTime'>
    )> }
  )> }
);

export type ProfileConnectionBaseFragment = (
  { __typename?: 'ProfileConnection' }
  & Pick<ProfileConnection, 'id' | 'status' | 'initiator' | 'candidateReportedStatus' | 'recruiterReportedStatus' | 'candidateReportedAt' | 'recruiterReportedAt' | 'paidAt' | 'isPaymentRequested'>
);

export type ProfileConnectionMessagesFragment = (
  { __typename?: 'ProfileConnection' }
  & { chatMessages?: Maybe<Array<(
    { __typename?: 'ChatMessage' }
    & ChatMessageBaseFragment
  )>> }
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
    & UserNftFragment
  )>, recruiterUser: (
    { __typename?: 'User' }
    & Pick<User, 'isAuthUser'>
    & UserBaseFragment
    & UserAvatarFragment
    & UserNftFragment
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

export type ProfileConnectionUserMetaBaseFragment = (
  { __typename?: 'ProfileConnectionUserMeta' }
  & Pick<ProfileConnectionUserMeta, 'id' | 'lastActionTime' | 'archivedAt'>
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
  )> }
);

export type BulkReportOfferStatusMutationVariables = Exact<{
  values: Array<ReportOfferStatusValues>;
}>;


export type BulkReportOfferStatusMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'bulkReportOfferStatus'>
);

export type BulkSendMessageMutationVariables = Exact<{
  recruiterProfileId: Scalars['Int'];
  candidateProfileIds: Array<Scalars['Int']>;
  message: Scalars['String'];
}>;


export type BulkSendMessageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'bulkSendMessage'>
);

export type CreateRecruiterProfileMutationVariables = Exact<{
  userId: Scalars['Int'];
  position: Scalars['String'];
  companyName: Scalars['String'];
}>;


export type CreateRecruiterProfileMutation = (
  { __typename?: 'Mutation' }
  & { createRecruiterProfile: (
    { __typename?: 'RecruiterProfile' }
    & RecruiterProfileBaseFragment
  ) }
);

export type DeactivateRecruiterProfilesMutationVariables = Exact<{ [key: string]: never; }>;


export type DeactivateRecruiterProfilesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deactivateRecruiterProfiles'>
);

export type LatestRecruiterProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestRecruiterProfileQuery = (
  { __typename?: 'Query' }
  & { latestRecruiterProfile?: Maybe<(
    { __typename?: 'RecruiterProfile' }
    & RecruiterProfileFullFragment
  )> }
);

export type LatestRecruiterProfileByUserIdQueryVariables = Exact<{
  userId?: Maybe<Scalars['Int']>;
}>;


export type LatestRecruiterProfileByUserIdQuery = (
  { __typename?: 'Query' }
  & { latestRecruiterProfileByUserId?: Maybe<(
    { __typename?: 'RecruiterProfile' }
    & RecruiterProfileFullFragment
  )> }
);

export type PublicRecruiterProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type PublicRecruiterProfilesQuery = (
  { __typename?: 'Query' }
  & { publicRecruiterProfiles: Array<(
    { __typename?: 'RecruiterProfile' }
    & RecruiterProfileBaseFragment
  )> }
);

export type RecruiterProfileActiveConnectionQueryVariables = Exact<{
  candidateProfileId: Scalars['Int'];
}>;


export type RecruiterProfileActiveConnectionQuery = (
  { __typename?: 'Query' }
  & { latestRecruiterProfile?: Maybe<(
    { __typename?: 'RecruiterProfile' }
    & Pick<RecruiterProfile, 'id'>
    & { activeConnectionWithCandidate?: Maybe<(
      { __typename?: 'ProfileConnection' }
      & ProfileConnectionBaseFragment
      & ProfileConnectionWithUsersFragment
      & ProfileConnectionWithProfilesFragment
    )> }
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

export type RecruiterProfileStatusUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type RecruiterProfileStatusUpdatedSubscription = (
  { __typename?: 'Subscription' }
  & { recruiterProfileStatusUpdated: (
    { __typename?: 'RecruiterProfile' }
    & RecruiterProfileBaseFragment
  ) }
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

export type CreateTechnologiesMutationVariables = Exact<{
  slugs?: Maybe<Array<Scalars['String']>>;
}>;


export type CreateTechnologiesMutation = (
  { __typename?: 'Mutation' }
  & { createTechnologies?: Maybe<Array<(
    { __typename?: 'Technology' }
    & TechnologyBaseFragment
  )>> }
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

export type TechnologiesByNamesQueryVariables = Exact<{
  names: Array<Scalars['String']>;
}>;


export type TechnologiesByNamesQuery = (
  { __typename?: 'Query' }
  & { technologiesByNames?: Maybe<Array<(
    { __typename?: 'Technology' }
    & TechnologyBaseFragment
  )>> }
);

export type AdminSettingsFragment = (
  { __typename?: 'User' }
  & { adminSettings?: Maybe<(
    { __typename?: 'AdminSettings' }
    & AdminSettingsBaseFragment
  )> }
);

export type IsFirstCandidateProfileFragment = (
  { __typename?: 'User' }
  & Pick<User, 'isFirstTimeFillingCandidateProfile'>
);

export type IsFirstRecruiterProfileFragment = (
  { __typename?: 'User' }
  & Pick<User, 'isFirstTimeFillingRecruiterProfile'>
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
  & Pick<User, 'id' | 'firstName' | 'lastName' | 'computedName' | 'username' | 'email' | 'phone' | 'inactive' | 'confirmed' | 'lastActionTime' | 'created' | 'isAdminUser' | 'linkedinUrl' | 'behanceUrl' | 'githubUrl' | 'ethWalletAddress'>
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

export type UserMessageTemplatesFragment = (
  { __typename?: 'User' }
  & { messageTemplates?: Maybe<Array<(
    { __typename?: 'UserTemplateMessage' }
    & MessageTemplateBaseFragment
  )>> }
);

export type UserNftFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id'>
  & { nfts?: Maybe<Array<(
    { __typename?: 'Nft' }
    & Pick<Nft, 'id' | 'openseaUrl'>
    & { entity: (
      { __typename?: 'UploadedFile' }
      & Pick<UploadedFile, 'id' | 'name' | 'mime' | 'url'>
    ) }
  )>> }
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

export type UserUnreadMessagesCountFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'unreadMessagesCount'>
);

export type UserHasVacanciesSourceFragment = (
  { __typename?: 'User' }
  & Pick<User, 'hasVacanciesSource'>
);

export type SearchSubscriptionsFragment = (
  { __typename?: 'User' }
  & { searchSubscriptions?: Maybe<Array<(
    { __typename?: 'UsersSearchSubscription' }
    & UsersSearchSubscriptionFullFragment
  )>> }
);

export type AdminSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminSettingsQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & AdminSettingsFragment
  )> }
);

export type AdminUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminUserQuery = (
  { __typename?: 'Query' }
  & { adminUser?: Maybe<(
    { __typename?: 'User' }
    & UserBaseFragment
  )> }
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
    & IsFirstCandidateProfileFragment
    & IsFirstRecruiterProfileFragment
    & UserSocialLinksFragment
    & UserHasVacanciesSourceFragment
    & UserNftFragment
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

export type AuthUserHiresQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthUserHiresQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & { hires?: Maybe<Array<(
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

export type ChangePasswordMutationVariables = Exact<{
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changePassword'>
);

export type ConfirmEmailMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ConfirmEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'confirmEmail'>
);

export type CreateUserMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & UserBaseFragment
  ) }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type IsFirstTimeFillingCandidateProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type IsFirstTimeFillingCandidateProfileQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { isFirstTimeFillingCandidateProfile: User['isFirstTimeFillingCandidateProfile'] }
  )> }
);

export type IsFirstTimeFillingRecruiterProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type IsFirstTimeFillingRecruiterProfileQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { isFirstTimeFillingRecruiterProfile: User['isFirstTimeFillingRecruiterProfile'] }
  )> }
);

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logOut'>
);

export type LogOutFromUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutFromUserMutation = (
  { __typename?: 'Mutation' }
  & { logOutFromUser: (
    { __typename?: 'User' }
    & UserBaseFragment
  ) }
);

export type RemoveCvFileMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveCvFileMutation = (
  { __typename?: 'Mutation' }
  & { removeCvFile: (
    { __typename?: 'User' }
    & UserCvFragment
  ) }
);

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resetPassword'>
);

export type SendConfirmEmailLinkMutationVariables = Exact<{ [key: string]: never; }>;


export type SendConfirmEmailLinkMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'sendConfirmEmailLink'>
);

export type ServiceUserQueryVariables = Exact<{ [key: string]: never; }>;


export type ServiceUserQuery = (
  { __typename?: 'Query' }
  & { serviceUser?: Maybe<(
    { __typename?: 'User' }
    & UserBaseFragment
  )> }
);

export type SetNftAvatarMutationVariables = Exact<{
  nftId?: Maybe<Scalars['Int']>;
}>;


export type SetNftAvatarMutation = (
  { __typename?: 'Mutation' }
  & { setNftAvatar: (
    { __typename?: 'User' }
    & UserAvatarFragment
  ) }
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

export type SignInAsUserMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SignInAsUserMutation = (
  { __typename?: 'Mutation' }
  & { signInAsUser: (
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

export type SignUpAsInactiveUserMutationVariables = Exact<{
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
}>;


export type SignUpAsInactiveUserMutation = (
  { __typename?: 'Mutation' }
  & { signUpAsInactiveUser: (
    { __typename?: 'User' }
    & UserBaseFragment
    & UserPrimaryProfileFragment
    & UserEngagementFieldsFragment
  ) }
);

export type UpdateProfileContactsMutationVariables = Exact<{
  phone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  behanceUrl?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  ethWalletAddress?: Maybe<Scalars['String']>;
}>;


export type UpdateProfileContactsMutation = (
  { __typename?: 'Mutation' }
  & { updateProfileContacts: (
    { __typename?: 'User' }
    & UserBaseFragment
    & UserPrimaryProfileFragment
  ) }
);

export type UploadAvatarMutationVariables = Exact<{
  file: Scalars['Upload'];
  size: Scalars['Int'];
}>;


export type UploadAvatarMutation = (
  { __typename?: 'Mutation' }
  & { uploadAvatar: (
    { __typename?: 'User' }
    & UserAvatarFragment
  ) }
);

export type UploadCvFileMutationVariables = Exact<{
  file: Scalars['Upload'];
  size: Scalars['Int'];
}>;


export type UploadCvFileMutation = (
  { __typename?: 'Mutation' }
  & { uploadCvFile: (
    { __typename?: 'User' }
    & UserCvFragment
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

export type UserByUsernameQueryVariables = Exact<{
  username?: Maybe<Scalars['String']>;
}>;


export type UserByUsernameQuery = (
  { __typename?: 'Query' }
  & { userByUsername?: Maybe<(
    { __typename?: 'User' }
    & UserBaseFragment
  )> }
);

export type UserCvQueryVariables = Exact<{ [key: string]: never; }>;


export type UserCvQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & UserCvFragment
  )> }
);

export type UserMessageTemplatesQueryVariables = Exact<{
  messageType: PrimaryProfile;
}>;


export type UserMessageTemplatesQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { messageTemplates?: Maybe<Array<(
      { __typename?: 'UserTemplateMessage' }
      & MessageTemplateBaseFragment
    )>> }
  )> }
);

export type UserNftQueryVariables = Exact<{ [key: string]: never; }>;


export type UserNftQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & UserNftFragment
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

export type UserSubscriptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserSubscriptionsQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & SearchSubscriptionsFragment
  )> }
);

export type UserUnreadMessagesCountQueryVariables = Exact<{ [key: string]: never; }>;


export type UserUnreadMessagesCountQuery = (
  { __typename?: 'Query' }
  & { authUser?: Maybe<(
    { __typename?: 'User' }
    & UserUnreadMessagesCountFragment
  )> }
);

export type UserUnreadMessagesCountUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserUnreadMessagesCountUpdatedSubscription = (
  { __typename?: 'Subscription' }
  & { userUnreadMessagesCountUpdated?: Maybe<(
    { __typename?: 'User' }
    & UserUnreadMessagesCountFragment
  )> }
);

export type MessageTemplateBaseFragment = (
  { __typename?: 'UserTemplateMessage' }
  & Pick<UserTemplateMessage, 'id' | 'messageType' | 'messageTitle' | 'messageBody'>
);

export type CreateMessageTemplateMutationVariables = Exact<{
  userId: Scalars['Int'];
  messageType: PrimaryProfile;
  messageTitle: Scalars['String'];
  messageBody: Scalars['String'];
}>;


export type CreateMessageTemplateMutation = (
  { __typename?: 'Mutation' }
  & { createMessageTemplate: (
    { __typename?: 'UserTemplateMessage' }
    & MessageTemplateBaseFragment
  ) }
);

export type DeleteMessageTemplateMutationVariables = Exact<{
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
}>;


export type DeleteMessageTemplateMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteMessageTemplate'>
);

export type UpdateMessageTemplateMutationVariables = Exact<{
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  values: UpdateTemplateMessageValues;
}>;


export type UpdateMessageTemplateMutation = (
  { __typename?: 'Mutation' }
  & { updateMessageTemplate: (
    { __typename?: 'UserTemplateMessage' }
    & MessageTemplateBaseFragment
  ) }
);

export type UserSettingsBaseFragment = (
  { __typename?: 'UserSettings' }
  & Pick<UserSettings, 'id' | 'userId' | 'pushNotificationsPermission'>
);

export type UsersSearchSubscriptionFullFragment = (
  { __typename?: 'UsersSearchSubscription' }
  & UsersSearchSubscriptionBaseFragment
  & UsersSearchSubscriptionParamsFragment
  & UsersSearchSubscriptionStringifiedParamsFragment
);

export type UsersSearchSubscriptionBaseFragment = (
  { __typename?: 'UsersSearchSubscription' }
  & Pick<UsersSearchSubscription, 'id' | 'title' | 'userId' | 'lastUsed' | 'lastNotified' | 'subscriptionUrl'>
);

export type UsersSearchSubscriptionParamsFragment = (
  { __typename?: 'UsersSearchSubscription' }
  & { searchParams: (
    { __typename?: 'CandidatesSearchParams' }
    & Pick<CandidatesSearchParams, 'cities' | 'countries' | 'specializations' | 'salaryFrom' | 'salaryTo' | 'timezoneFrom' | 'timezoneTo' | 'timezoneReverseMode' | 'searchQuery' | 'experienceIds' | 'englishLevelIds' | 'employmentTypesIds' | 'technologiesIds'>
  ) }
);

export type UsersSearchSubscriptionStringifiedParamsFragment = (
  { __typename?: 'UsersSearchSubscription' }
  & { stringifiedSearchParams: (
    { __typename?: 'SubscriptionStringifiedParams' }
    & Pick<SubscriptionStringifiedParams, 'id'>
    & { employmentTypes?: Maybe<Array<(
      { __typename?: 'EmploymentType' }
      & EmploymentTypeBaseFragment
    )>>, technologies?: Maybe<Array<(
      { __typename?: 'Technology' }
      & TechnologyBaseFragment
    )>>, jobExperiences?: Maybe<Array<(
      { __typename?: 'JobExperience' }
      & JobExperienceBaseFragment
    )>>, englishLevels?: Maybe<Array<(
      { __typename?: 'EnglishLevel' }
      & EnglishLevelBaseFragment
    )>> }
  ) }
);

export type SubscribeToCandidatesSearchMutationVariables = Exact<{
  userId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  searchParams: PublicProfilesParameters;
}>;


export type SubscribeToCandidatesSearchMutation = (
  { __typename?: 'Mutation' }
  & { subscribeToCandidatesSearch: (
    { __typename?: 'UsersSearchSubscription' }
    & UsersSearchSubscriptionBaseFragment
  ) }
);

export type UnsubscribeFromCandidatesSearchMutationVariables = Exact<{
  id: Scalars['Int'];
  userId: Scalars['Int'];
}>;


export type UnsubscribeFromCandidatesSearchMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'unsubscribeFromCandidatesSearch'>
);

export type UpdateSubscriptionLastUsedMutationVariables = Exact<{
  id: Scalars['Int'];
  userId: Scalars['Int'];
}>;


export type UpdateSubscriptionLastUsedMutation = (
  { __typename?: 'Mutation' }
  & { updateSubscriptionLastUsed: (
    { __typename?: 'UsersSearchSubscription' }
    & UsersSearchSubscriptionBaseFragment
  ) }
);

export type UpdateSubscriptionTitleMutationVariables = Exact<{
  id: Scalars['Int'];
  userId: Scalars['Int'];
  values: UpdateSubscriptionsTitleValues;
}>;


export type UpdateSubscriptionTitleMutation = (
  { __typename?: 'Mutation' }
  & { updateSubscriptionTitle: (
    { __typename?: 'UsersSearchSubscription' }
    & UsersSearchSubscriptionBaseFragment
  ) }
);

export type UserSearchSubscriptionsByUserIdQueryVariables = Exact<{
  userId?: Maybe<Scalars['Int']>;
}>;


export type UserSearchSubscriptionsByUserIdQuery = (
  { __typename?: 'Query' }
  & { userSearchSubscriptionsByUserId?: Maybe<Array<(
    { __typename?: 'UsersSearchSubscription' }
    & UsersSearchSubscriptionFullFragment
  )>> }
);

export type VacanciesSourceBaseFragment = (
  { __typename?: 'VacanciesSource' }
  & Pick<VacanciesSource, 'id' | 'userId' | 'url'>
);

export type CreateMultipleVacanciesSourcesMutationVariables = Exact<{
  options: CreateMultipleVacanciesSourcesParameters;
}>;


export type CreateMultipleVacanciesSourcesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createMultipleVacanciesSources'>
);

export type CreateVacanciesSourceMutationVariables = Exact<{
  atsId: Scalars['String'];
  type: VacancySourceType;
}>;


export type CreateVacanciesSourceMutation = (
  { __typename?: 'Mutation' }
  & { createVacanciesSource?: Maybe<(
    { __typename?: 'VacanciesSource' }
    & VacanciesSourceBaseFragment
  )> }
);

export type CompanyLogoFragment = (
  { __typename?: 'Vacancy' }
  & Pick<Vacancy, 'id'>
  & { companyLogo?: Maybe<(
    { __typename?: 'UploadedFile' }
    & Pick<UploadedFile, 'id' | 'name' | 'mime' | 'url'>
  )> }
);

export type VacancyBaseFragment = (
  { __typename?: 'Vacancy' }
  & Pick<Vacancy, 'id' | 'status' | 'companyName' | 'jobTitle' | 'jobDescription' | 'jobType' | 'jobCategory' | 'createdAt' | 'updatedAt' | 'salaryTo' | 'salaryFrom' | 'isTop' | 'userId' | 'sourceId' | 'applyLink'>
);

export type VacancyEnglishLevelFragment = (
  { __typename?: 'Vacancy' }
  & { englishLevel?: Maybe<(
    { __typename?: 'EnglishLevel' }
    & EnglishLevelBaseFragment
  )> }
);

export type VacancyFullFragment = (
  { __typename?: 'Vacancy' }
  & VacancyBaseFragment
  & VacancyEnglishLevelFragment
  & VacancyJobExperienceFragment
  & VacancySpecializationsFragment
  & VacancyTechnologiesFragment
  & CompanyLogoFragment
);

export type VacancyJobExperienceFragment = (
  { __typename?: 'Vacancy' }
  & { jobExperience?: Maybe<(
    { __typename?: 'JobExperience' }
    & JobExperienceBaseFragment
  )> }
);

export type VacancySpecializationsFragment = (
  { __typename?: 'Vacancy' }
  & { specializations?: Maybe<Array<(
    { __typename?: 'Specialization' }
    & SpecializationBaseFragment
  )>> }
);

export type VacancyTechnologiesFragment = (
  { __typename?: 'Vacancy' }
  & { technologies?: Maybe<Array<(
    { __typename?: 'Technology' }
    & TechnologyBaseFragment
  )>> }
);

export type AddVacanciesLogoMutationVariables = Exact<{
  companyNames?: Maybe<Array<Scalars['String']>>;
}>;


export type AddVacanciesLogoMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addVacanciesLogo'>
);

export type HotVacanciesQueryVariables = Exact<{ [key: string]: never; }>;


export type HotVacanciesQuery = (
  { __typename?: 'Query' }
  & { hotVacancies?: Maybe<Array<(
    { __typename?: 'Vacancy' }
    & VacancyBaseFragment
    & VacancyEnglishLevelFragment
    & VacancyJobExperienceFragment
    & VacancySpecializationsFragment
    & CompanyLogoFragment
  )>> }
);

export type SalariesDataByCategoryQueryVariables = Exact<{
  keywords?: Maybe<Array<Scalars['String']>>;
}>;


export type SalariesDataByCategoryQuery = (
  { __typename?: 'Query' }
  & { salariesDataByCategory: (
    { __typename?: 'VacancySalaryData' }
    & Pick<VacancySalaryData, 'maxSalary' | 'averageMinSalary' | 'averageSalary'>
  ) }
);

export type SendNewVacancyApplicationMutationVariables = Exact<{
  companyName: Scalars['String'];
  jobTitle: Scalars['String'];
}>;


export type SendNewVacancyApplicationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'sendNewVacancyApplication'>
);

export type SendNewVacancyRequestMutationVariables = Exact<{
  vacancyLink: Scalars['String'];
  contactEmail: Scalars['String'];
}>;


export type SendNewVacancyRequestMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'sendNewVacancyRequest'>
);

export type VacanciesQueryVariables = Exact<{
  options?: Maybe<VacanciesParameters>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type VacanciesQuery = (
  { __typename?: 'Query' }
  & { vacancies: (
    { __typename?: 'VacanciesResult' }
    & Pick<VacanciesResult, 'hasMore'>
    & { rows: Array<(
      { __typename?: 'Vacancy' }
      & VacancyFullFragment
    )> }
  ) }
);

export type VacanciesByCompanyQueryVariables = Exact<{
  options?: Maybe<VacanciesByCompanyParameters>;
}>;


export type VacanciesByCompanyQuery = (
  { __typename?: 'Query' }
  & { vacanciesByCompany?: Maybe<Array<(
    { __typename?: 'Vacancy' }
    & VacancyFullFragment
  )>> }
);

export type WorkPlaceBaseFragment = (
  { __typename?: 'CandidateProfileWorkPlace' }
  & Pick<CandidateProfileWorkPlace, 'id' | 'title' | 'description' | 'startDate' | 'endDate'>
);

export type WorkPlaceCompanyInfoFragment = (
  { __typename?: 'CandidateProfileWorkPlace' }
  & Pick<CandidateProfileWorkPlace, 'companyName' | 'companyUrl' | 'companySizeFrom' | 'companySizeTo' | 'companyIndustry' | 'companySpecialities' | 'companyCategories' | 'companyFundingType'>
);

export type WorkPlaceFullFragment = (
  { __typename?: 'CandidateProfileWorkPlace' }
  & WorkPlaceBaseFragment
  & WorkPlaceCompanyInfoFragment
);

export type CreateWorkPlaceMutationVariables = Exact<{
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
}>;


export type CreateWorkPlaceMutation = (
  { __typename?: 'Mutation' }
  & { createWorkPlace: (
    { __typename?: 'CandidateProfileWorkPlace' }
    & WorkPlaceFullFragment
  ) }
);

export type DeleteWorkPlaceMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteWorkPlaceMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteWorkPlace'>
);

export type FetchWorkPlacesMutationVariables = Exact<{
  linkedinUrl: Scalars['String'];
  candidateProfileId: Scalars['Int'];
  liveScrape?: Maybe<Scalars['Boolean']>;
}>;


export type FetchWorkPlacesMutation = (
  { __typename?: 'Mutation' }
  & { fetchWorkPlaces?: Maybe<Array<(
    { __typename?: 'CandidateProfileWorkPlace' }
    & WorkPlaceFullFragment
  )>> }
);

export type UpdateWorkPlaceMutationVariables = Exact<{
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
}>;


export type UpdateWorkPlaceMutation = (
  { __typename?: 'Mutation' }
  & { updateWorkPlace: (
    { __typename?: 'CandidateProfileWorkPlace' }
    & WorkPlaceFullFragment
  ) }
);

export type FlashMessageBaseFragment = (
  { __typename?: 'FlashMessage' }
  & Pick<FlashMessage, 'id' | 'type' | 'heading' | 'text'>
  & { cta?: Maybe<(
    { __typename?: 'Cta' }
    & Pick<Cta, 'title' | 'link'>
  )> }
);

export type DeleteMessageMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteMessageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteMessage'>
);

export type PostMessageMutationVariables = Exact<{
  type: FlashMessageType;
  heading: Scalars['String'];
  text: Scalars['String'];
  cta?: Maybe<CtaInput>;
}>;


export type PostMessageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'postMessage'>
);

export type VisibleMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type VisibleMessagesQuery = (
  { __typename?: 'Query' }
  & { visibleMessages: Array<(
    { __typename?: 'FlashMessage' }
    & Pick<FlashMessage, 'id' | 'type' | 'heading' | 'text'>
    & { cta?: Maybe<(
      { __typename?: 'Cta' }
      & Pick<Cta, 'title' | 'link'>
    )> }
  )> }
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
export const CandidateProfileSpecializationsFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileSpecializations on CandidateProfile {
  specializations {
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
  isAdminUser
  linkedinUrl
  behanceUrl
  githubUrl
  ethWalletAddress
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
export const NftBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment NftBase on Nft {
  id
  userId
  openseaUrl
  entity {
    id
    url
    name
    mime
  }
}
    `;
export const CandidateProfileUserFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileUser on CandidateProfile {
  user {
    ...UserBase
    ...UserCv
    ...UserAvatar
    nfts {
      ...NftBase
    }
  }
}
    ${UserBaseFragmentDoc}
${UserCvFragmentDoc}
${UserAvatarFragmentDoc}
${NftBaseFragmentDoc}`;
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
export const WorkPlaceBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment WorkPlaceBase on CandidateProfileWorkPlace {
  id
  title
  description
  startDate
  endDate
}
    `;
export const WorkPlaceCompanyInfoFragmentDoc = /*#__PURE__*/ gql`
    fragment WorkPlaceCompanyInfo on CandidateProfileWorkPlace {
  companyName
  companyUrl
  companySizeFrom
  companySizeTo
  companyIndustry
  companySpecialities
  companyCategories
  companyFundingType
}
    `;
export const WorkPlaceFullFragmentDoc = /*#__PURE__*/ gql`
    fragment WorkPlaceFull on CandidateProfileWorkPlace {
  ...WorkPlaceBase
  ...WorkPlaceCompanyInfo
}
    ${WorkPlaceBaseFragmentDoc}
${WorkPlaceCompanyInfoFragmentDoc}`;
export const CandidateProfileWorkPlacesFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileWorkPlaces on CandidateProfile {
  workPlaces {
    ...WorkPlaceFull
  }
}
    ${WorkPlaceFullFragmentDoc}`;
export const CandidateProfileFullFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileFull on CandidateProfile {
  ...CandidateProfileBase
  ...CandidateProfileTechnologies
  ...CandidateProfileEnglishLevel
  ...CandidateProfileJobExperience
  ...CandidateProfileEmploymentTypes
  ...CandidateProfileSpecializations
  ...CandidateProfileUser
  ...CandidateProfileCities
  ...CandidateProfileEmploymentLocations
  ...CandidateProfileWorkPlaces
}
    ${CandidateProfileBaseFragmentDoc}
${CandidateProfileTechnologiesFragmentDoc}
${CandidateProfileEnglishLevelFragmentDoc}
${CandidateProfileJobExperienceFragmentDoc}
${CandidateProfileEmploymentTypesFragmentDoc}
${CandidateProfileSpecializationsFragmentDoc}
${CandidateProfileUserFragmentDoc}
${CandidateProfileCitiesFragmentDoc}
${CandidateProfileEmploymentLocationsFragmentDoc}
${CandidateProfileWorkPlacesFragmentDoc}`;
export const CandidateProfileConnectionsFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileConnections on CandidateProfile {
  connectionsCount
}
    `;
export const CandidateProfileUserWithNftFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfileUserWithNft on CandidateProfile {
  user {
    id
    nfts {
      ...NftBase
    }
  }
}
    ${NftBaseFragmentDoc}`;
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
  candidateReportedAt
  recruiterReportedAt
  paidAt
  isPaymentRequested
}
    `;
export const ChatMessageBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment ChatMessageBase on ChatMessage {
  id
  message
  profileConnectionId
  isSystemMessage
  createdAt
  updatedAt
  senderUser {
    isAuthUser
  }
  recipientUser {
    isAuthUser
  }
}
    `;
export const ProfileConnectionMessagesFragmentDoc = /*#__PURE__*/ gql`
    fragment ProfileConnectionMessages on ProfileConnection {
  chatMessages {
    ...ChatMessageBase
  }
}
    ${ChatMessageBaseFragmentDoc}`;
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
export const UserNftFragmentDoc = /*#__PURE__*/ gql`
    fragment UserNft on User {
  id
  nfts {
    id
    openseaUrl
    entity {
      id
      name
      mime
      url
    }
  }
}
    `;
export const ProfileConnectionWithUsersFragmentDoc = /*#__PURE__*/ gql`
    fragment ProfileConnectionWithUsers on ProfileConnection {
  candidateUser {
    ...UserBase
    ...UserAvatar
    ...UserNft
    isAuthUser
  }
  recruiterUser {
    ...UserBase
    ...UserAvatar
    ...UserNft
    isAuthUser
  }
}
    ${UserBaseFragmentDoc}
${UserAvatarFragmentDoc}
${UserNftFragmentDoc}`;
export const ProfileConnectionUserMetaBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment ProfileConnectionUserMetaBase on ProfileConnectionUserMeta {
  id
  lastActionTime
  archivedAt
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
  }
}
    ${UserBaseFragmentDoc}`;
export const RecruiterProfileFullFragmentDoc = /*#__PURE__*/ gql`
    fragment RecruiterProfileFull on RecruiterProfile {
  ...RecruiterProfileBase
  ...RecruiterProfileUser
}
    ${RecruiterProfileBaseFragmentDoc}
${RecruiterProfileUserFragmentDoc}`;
export const AdminSettingsBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment AdminSettingsBase on AdminSettings {
  id
  userId
  contactsVisibilityPermission
  silentProfileUpdate
}
    `;
export const AdminSettingsFragmentDoc = /*#__PURE__*/ gql`
    fragment AdminSettings on User {
  adminSettings {
    ...AdminSettingsBase
  }
}
    ${AdminSettingsBaseFragmentDoc}`;
export const IsFirstCandidateProfileFragmentDoc = /*#__PURE__*/ gql`
    fragment IsFirstCandidateProfile on User {
  isFirstTimeFillingCandidateProfile
}
    `;
export const IsFirstRecruiterProfileFragmentDoc = /*#__PURE__*/ gql`
    fragment IsFirstRecruiterProfile on User {
  isFirstTimeFillingRecruiterProfile
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
export const MessageTemplateBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment MessageTemplateBase on UserTemplateMessage {
  id
  messageType
  messageTitle
  messageBody
}
    `;
export const UserMessageTemplatesFragmentDoc = /*#__PURE__*/ gql`
    fragment UserMessageTemplates on User {
  messageTemplates(messageType: $messageType) {
    ...MessageTemplateBase
  }
}
    ${MessageTemplateBaseFragmentDoc}`;
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
export const UserUnreadMessagesCountFragmentDoc = /*#__PURE__*/ gql`
    fragment UserUnreadMessagesCount on User {
  id
  unreadMessagesCount
}
    `;
export const UserHasVacanciesSourceFragmentDoc = /*#__PURE__*/ gql`
    fragment UserHasVacanciesSource on User {
  hasVacanciesSource
}
    `;
export const UsersSearchSubscriptionBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment UsersSearchSubscriptionBase on UsersSearchSubscription {
  id
  title
  userId
  lastUsed
  lastNotified
  subscriptionUrl
}
    `;
export const UsersSearchSubscriptionParamsFragmentDoc = /*#__PURE__*/ gql`
    fragment UsersSearchSubscriptionParams on UsersSearchSubscription {
  searchParams {
    cities
    countries
    specializations
    salaryFrom
    salaryTo
    timezoneFrom
    timezoneTo
    timezoneReverseMode
    searchQuery
    experienceIds
    englishLevelIds
    employmentTypesIds
    technologiesIds
  }
}
    `;
export const UsersSearchSubscriptionStringifiedParamsFragmentDoc = /*#__PURE__*/ gql`
    fragment UsersSearchSubscriptionStringifiedParams on UsersSearchSubscription {
  stringifiedSearchParams {
    id
    employmentTypes {
      ...EmploymentTypeBase
    }
    technologies {
      ...TechnologyBase
    }
    jobExperiences {
      ...JobExperienceBase
    }
    englishLevels {
      ...EnglishLevelBase
    }
  }
}
    ${EmploymentTypeBaseFragmentDoc}
${TechnologyBaseFragmentDoc}
${JobExperienceBaseFragmentDoc}
${EnglishLevelBaseFragmentDoc}`;
export const UsersSearchSubscriptionFullFragmentDoc = /*#__PURE__*/ gql`
    fragment UsersSearchSubscriptionFull on UsersSearchSubscription {
  ...UsersSearchSubscriptionBase
  ...UsersSearchSubscriptionParams
  ...UsersSearchSubscriptionStringifiedParams
}
    ${UsersSearchSubscriptionBaseFragmentDoc}
${UsersSearchSubscriptionParamsFragmentDoc}
${UsersSearchSubscriptionStringifiedParamsFragmentDoc}`;
export const SearchSubscriptionsFragmentDoc = /*#__PURE__*/ gql`
    fragment SearchSubscriptions on User {
  searchSubscriptions {
    ...UsersSearchSubscriptionFull
  }
}
    ${UsersSearchSubscriptionFullFragmentDoc}`;
export const VacanciesSourceBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment VacanciesSourceBase on VacanciesSource {
  id
  userId
  url
}
    `;
export const VacancyBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment VacancyBase on Vacancy {
  id
  status
  companyName
  jobTitle
  jobDescription
  jobType
  jobCategory
  createdAt
  updatedAt
  salaryTo
  salaryFrom
  isTop
  userId
  sourceId
  applyLink
}
    `;
export const VacancyEnglishLevelFragmentDoc = /*#__PURE__*/ gql`
    fragment VacancyEnglishLevel on Vacancy {
  englishLevel {
    ...EnglishLevelBase
  }
}
    ${EnglishLevelBaseFragmentDoc}`;
export const VacancyJobExperienceFragmentDoc = /*#__PURE__*/ gql`
    fragment VacancyJobExperience on Vacancy {
  jobExperience {
    ...JobExperienceBase
  }
}
    ${JobExperienceBaseFragmentDoc}`;
export const VacancySpecializationsFragmentDoc = /*#__PURE__*/ gql`
    fragment VacancySpecializations on Vacancy {
  specializations {
    ...SpecializationBase
  }
}
    ${SpecializationBaseFragmentDoc}`;
export const VacancyTechnologiesFragmentDoc = /*#__PURE__*/ gql`
    fragment VacancyTechnologies on Vacancy {
  technologies {
    ...TechnologyBase
  }
}
    ${TechnologyBaseFragmentDoc}`;
export const CompanyLogoFragmentDoc = /*#__PURE__*/ gql`
    fragment CompanyLogo on Vacancy {
  id
  companyLogo {
    id
    name
    mime
    url
  }
}
    `;
export const VacancyFullFragmentDoc = /*#__PURE__*/ gql`
    fragment VacancyFull on Vacancy {
  ...VacancyBase
  ...VacancyEnglishLevel
  ...VacancyJobExperience
  ...VacancySpecializations
  ...VacancyTechnologies
  ...CompanyLogo
}
    ${VacancyBaseFragmentDoc}
${VacancyEnglishLevelFragmentDoc}
${VacancyJobExperienceFragmentDoc}
${VacancySpecializationsFragmentDoc}
${VacancyTechnologiesFragmentDoc}
${CompanyLogoFragmentDoc}`;
export const FlashMessageBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment FlashMessageBase on FlashMessage {
  id
  type
  heading
  text
  cta {
    title
    link
  }
}
    `;
export const UpdateAdminSettingsDocument = /*#__PURE__*/ gql`
    mutation updateAdminSettings($permissions: UpdateAdminSettingsValues!) {
  updateAdminSettings(permissions: $permissions) {
    ...AdminSettingsBase
  }
}
    ${AdminSettingsBaseFragmentDoc}`;
export type UpdateAdminSettingsMutationFn = Apollo.MutationFunction<UpdateAdminSettingsMutation, UpdateAdminSettingsMutationVariables>;

/**
 * __useUpdateAdminSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateAdminSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdminSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdminSettingsMutation, { data, loading, error }] = useUpdateAdminSettingsMutation({
 *   variables: {
 *      permissions: // value for 'permissions'
 *   },
 * });
 */
export function useUpdateAdminSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdminSettingsMutation, UpdateAdminSettingsMutationVariables>) {
        return Apollo.useMutation<UpdateAdminSettingsMutation, UpdateAdminSettingsMutationVariables>(UpdateAdminSettingsDocument, baseOptions);
      }
export type UpdateAdminSettingsMutationHookResult = ReturnType<typeof useUpdateAdminSettingsMutation>;
export type UpdateAdminSettingsMutationResult = Apollo.MutationResult<UpdateAdminSettingsMutation>;
export type UpdateAdminSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateAdminSettingsMutation, UpdateAdminSettingsMutationVariables>;
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
export const CandidateProfilesBySubscriptionDocument = /*#__PURE__*/ gql`
    query candidateProfilesBySubscription($subscriptionLastInteract: GraphQLDateTime!, $where: PublicProfilesParameters!) {
  candidateProfilesBySubscription(subscriptionLastInteract: $subscriptionLastInteract, where: $where) {
    ...CandidateProfileBase
  }
}
    ${CandidateProfileBaseFragmentDoc}`;

/**
 * __useCandidateProfilesBySubscriptionQuery__
 *
 * To run a query within a React component, call `useCandidateProfilesBySubscriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCandidateProfilesBySubscriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCandidateProfilesBySubscriptionQuery({
 *   variables: {
 *      subscriptionLastInteract: // value for 'subscriptionLastInteract'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCandidateProfilesBySubscriptionQuery(baseOptions?: Apollo.QueryHookOptions<CandidateProfilesBySubscriptionQuery, CandidateProfilesBySubscriptionQueryVariables>) {
        return Apollo.useQuery<CandidateProfilesBySubscriptionQuery, CandidateProfilesBySubscriptionQueryVariables>(CandidateProfilesBySubscriptionDocument, baseOptions);
      }
export function useCandidateProfilesBySubscriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CandidateProfilesBySubscriptionQuery, CandidateProfilesBySubscriptionQueryVariables>) {
          return Apollo.useLazyQuery<CandidateProfilesBySubscriptionQuery, CandidateProfilesBySubscriptionQueryVariables>(CandidateProfilesBySubscriptionDocument, baseOptions);
        }
export type CandidateProfilesBySubscriptionQueryHookResult = ReturnType<typeof useCandidateProfilesBySubscriptionQuery>;
export type CandidateProfilesBySubscriptionLazyQueryHookResult = ReturnType<typeof useCandidateProfilesBySubscriptionLazyQuery>;
export type CandidateProfilesBySubscriptionQueryResult = Apollo.QueryResult<CandidateProfilesBySubscriptionQuery, CandidateProfilesBySubscriptionQueryVariables>;
export const LatestActiveCandidateProfileDocument = /*#__PURE__*/ gql`
    query latestActiveCandidateProfile($userId: Int!) {
  latestActiveCandidateProfile(userId: $userId) {
    ...CandidateProfileBase
  }
}
    ${CandidateProfileBaseFragmentDoc}`;

/**
 * __useLatestActiveCandidateProfileQuery__
 *
 * To run a query within a React component, call `useLatestActiveCandidateProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestActiveCandidateProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestActiveCandidateProfileQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useLatestActiveCandidateProfileQuery(baseOptions?: Apollo.QueryHookOptions<LatestActiveCandidateProfileQuery, LatestActiveCandidateProfileQueryVariables>) {
        return Apollo.useQuery<LatestActiveCandidateProfileQuery, LatestActiveCandidateProfileQueryVariables>(LatestActiveCandidateProfileDocument, baseOptions);
      }
export function useLatestActiveCandidateProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestActiveCandidateProfileQuery, LatestActiveCandidateProfileQueryVariables>) {
          return Apollo.useLazyQuery<LatestActiveCandidateProfileQuery, LatestActiveCandidateProfileQueryVariables>(LatestActiveCandidateProfileDocument, baseOptions);
        }
export type LatestActiveCandidateProfileQueryHookResult = ReturnType<typeof useLatestActiveCandidateProfileQuery>;
export type LatestActiveCandidateProfileLazyQueryHookResult = ReturnType<typeof useLatestActiveCandidateProfileLazyQuery>;
export type LatestActiveCandidateProfileQueryResult = Apollo.QueryResult<LatestActiveCandidateProfileQuery, LatestActiveCandidateProfileQueryVariables>;
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
export const PerfectCandidatesAmountDocument = /*#__PURE__*/ gql`
    query perfectCandidatesAmount($where: PublicProfilesParameters) {
  perfectCandidatesAmount(where: $where)
}
    `;

/**
 * __usePerfectCandidatesAmountQuery__
 *
 * To run a query within a React component, call `usePerfectCandidatesAmountQuery` and pass it any options that fit your needs.
 * When your component renders, `usePerfectCandidatesAmountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePerfectCandidatesAmountQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePerfectCandidatesAmountQuery(baseOptions?: Apollo.QueryHookOptions<PerfectCandidatesAmountQuery, PerfectCandidatesAmountQueryVariables>) {
        return Apollo.useQuery<PerfectCandidatesAmountQuery, PerfectCandidatesAmountQueryVariables>(PerfectCandidatesAmountDocument, baseOptions);
      }
export function usePerfectCandidatesAmountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PerfectCandidatesAmountQuery, PerfectCandidatesAmountQueryVariables>) {
          return Apollo.useLazyQuery<PerfectCandidatesAmountQuery, PerfectCandidatesAmountQueryVariables>(PerfectCandidatesAmountDocument, baseOptions);
        }
export type PerfectCandidatesAmountQueryHookResult = ReturnType<typeof usePerfectCandidatesAmountQuery>;
export type PerfectCandidatesAmountLazyQueryHookResult = ReturnType<typeof usePerfectCandidatesAmountLazyQuery>;
export type PerfectCandidatesAmountQueryResult = Apollo.QueryResult<PerfectCandidatesAmountQuery, PerfectCandidatesAmountQueryVariables>;
export const CandidateProfileStatusUpdatedDocument = /*#__PURE__*/ gql`
    subscription candidateProfileStatusUpdated {
  candidateProfileStatusUpdated {
    ...CandidateProfileBase
  }
}
    ${CandidateProfileBaseFragmentDoc}`;

/**
 * __useCandidateProfileStatusUpdatedSubscription__
 *
 * To run a query within a React component, call `useCandidateProfileStatusUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCandidateProfileStatusUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCandidateProfileStatusUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCandidateProfileStatusUpdatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<CandidateProfileStatusUpdatedSubscription, CandidateProfileStatusUpdatedSubscriptionVariables>) {
        return Apollo.useSubscription<CandidateProfileStatusUpdatedSubscription, CandidateProfileStatusUpdatedSubscriptionVariables>(CandidateProfileStatusUpdatedDocument, baseOptions);
      }
export type CandidateProfileStatusUpdatedSubscriptionHookResult = ReturnType<typeof useCandidateProfileStatusUpdatedSubscription>;
export type CandidateProfileStatusUpdatedSubscriptionResult = Apollo.SubscriptionResult<CandidateProfileStatusUpdatedSubscription>;
export const PublicCandidateProfilesDocument = /*#__PURE__*/ gql`
    query publicCandidateProfiles($where: PublicProfilesParameters, $options: PublicProfilesOptions) {
  publicCandidateProfiles(where: $where, options: $options) {
    rows {
      ...CandidateProfileBase
      ...CandidateProfileTechnologies
      ...CandidateProfileEnglishLevel
      ...CandidateProfileJobExperience
      ...CandidateProfileEmploymentTypes
      ...CandidateProfileSpecializations
      ...CandidateProfileCities
      ...CandidateProfileEmploymentLocations
      ...CandidateProfileConnections
      ...CandidateProfileWorkPlaces
      ...CandidateProfileUserWithNft
    }
    hasMore
    count
  }
}
    ${CandidateProfileBaseFragmentDoc}
${CandidateProfileTechnologiesFragmentDoc}
${CandidateProfileEnglishLevelFragmentDoc}
${CandidateProfileJobExperienceFragmentDoc}
${CandidateProfileEmploymentTypesFragmentDoc}
${CandidateProfileSpecializationsFragmentDoc}
${CandidateProfileCitiesFragmentDoc}
${CandidateProfileEmploymentLocationsFragmentDoc}
${CandidateProfileConnectionsFragmentDoc}
${CandidateProfileWorkPlacesFragmentDoc}
${CandidateProfileUserWithNftFragmentDoc}`;

/**
 * __usePublicCandidateProfilesQuery__
 *
 * To run a query within a React component, call `usePublicCandidateProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicCandidateProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicCandidateProfilesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      options: // value for 'options'
 *   },
 * });
 */
export function usePublicCandidateProfilesQuery(baseOptions?: Apollo.QueryHookOptions<PublicCandidateProfilesQuery, PublicCandidateProfilesQueryVariables>) {
        return Apollo.useQuery<PublicCandidateProfilesQuery, PublicCandidateProfilesQueryVariables>(PublicCandidateProfilesDocument, baseOptions);
      }
export function usePublicCandidateProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicCandidateProfilesQuery, PublicCandidateProfilesQueryVariables>) {
          return Apollo.useLazyQuery<PublicCandidateProfilesQuery, PublicCandidateProfilesQueryVariables>(PublicCandidateProfilesDocument, baseOptions);
        }
export type PublicCandidateProfilesQueryHookResult = ReturnType<typeof usePublicCandidateProfilesQuery>;
export type PublicCandidateProfilesLazyQueryHookResult = ReturnType<typeof usePublicCandidateProfilesLazyQuery>;
export type PublicCandidateProfilesQueryResult = Apollo.QueryResult<PublicCandidateProfilesQuery, PublicCandidateProfilesQueryVariables>;
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
    mutation updateCandidateProfile($position: String, $salary: Float, $candidateDescription: String, $experienceDescription: String, $workExpectations: String, $achievements: String, $technologiesIds: [Int!], $jobExperienceId: Int, $employmentTypesIds: [Int!], $employmentLocationsIds: [Int!], $englishLevelId: Int, $specializationId: Int, $specializationsIds: [Int!], $cities: [CandidateProfileCityInput!], $workPlaces: [CandidateProfileWorkPlaceInput!]) {
  updateCandidateProfile(position: $position, salary: $salary, candidateDescription: $candidateDescription, experienceDescription: $experienceDescription, workExpectations: $workExpectations, achievements: $achievements, technologiesIds: $technologiesIds, jobExperienceId: $jobExperienceId, employmentTypesIds: $employmentTypesIds, employmentLocationsIds: $employmentLocationsIds, englishLevelId: $englishLevelId, specializationId: $specializationId, specializationsIds: $specializationsIds, cities: $cities, workPlaces: $workPlaces) {
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
 *      specializationsIds: // value for 'specializationsIds'
 *      cities: // value for 'cities'
 *      workPlaces: // value for 'workPlaces'
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
export const UpdateMessageDocument = /*#__PURE__*/ gql`
    mutation updateMessage($id: Int!, $values: UpdateMessageValues!) {
  updateMessage(id: $id, values: $values) {
    ...ChatMessageBase
  }
}
    ${ChatMessageBaseFragmentDoc}`;
export type UpdateMessageMutationFn = Apollo.MutationFunction<UpdateMessageMutation, UpdateMessageMutationVariables>;

/**
 * __useUpdateMessageMutation__
 *
 * To run a mutation, you first call `useUpdateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMessageMutation, { data, loading, error }] = useUpdateMessageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateMessageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMessageMutation, UpdateMessageMutationVariables>) {
        return Apollo.useMutation<UpdateMessageMutation, UpdateMessageMutationVariables>(UpdateMessageDocument, baseOptions);
      }
export type UpdateMessageMutationHookResult = ReturnType<typeof useUpdateMessageMutation>;
export type UpdateMessageMutationResult = Apollo.MutationResult<UpdateMessageMutation>;
export type UpdateMessageMutationOptions = Apollo.BaseMutationOptions<UpdateMessageMutation, UpdateMessageMutationVariables>;
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
export const EmploymentTypesDocument = /*#__PURE__*/ gql`
    query employmentTypes {
  employmentTypes {
    ...EmploymentTypeBase
  }
}
    ${EmploymentTypeBaseFragmentDoc}`;

/**
 * __useEmploymentTypesQuery__
 *
 * To run a query within a React component, call `useEmploymentTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmploymentTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmploymentTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useEmploymentTypesQuery(baseOptions?: Apollo.QueryHookOptions<EmploymentTypesQuery, EmploymentTypesQueryVariables>) {
        return Apollo.useQuery<EmploymentTypesQuery, EmploymentTypesQueryVariables>(EmploymentTypesDocument, baseOptions);
      }
export function useEmploymentTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmploymentTypesQuery, EmploymentTypesQueryVariables>) {
          return Apollo.useLazyQuery<EmploymentTypesQuery, EmploymentTypesQueryVariables>(EmploymentTypesDocument, baseOptions);
        }
export type EmploymentTypesQueryHookResult = ReturnType<typeof useEmploymentTypesQuery>;
export type EmploymentTypesLazyQueryHookResult = ReturnType<typeof useEmploymentTypesLazyQuery>;
export type EmploymentTypesQueryResult = Apollo.QueryResult<EmploymentTypesQuery, EmploymentTypesQueryVariables>;
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
export const SendFeedbackDocument = /*#__PURE__*/ gql`
    mutation sendFeedback($title: String!, $body: String!) {
  sendFeedback(title: $title, body: $body)
}
    `;
export type SendFeedbackMutationFn = Apollo.MutationFunction<SendFeedbackMutation, SendFeedbackMutationVariables>;

/**
 * __useSendFeedbackMutation__
 *
 * To run a mutation, you first call `useSendFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendFeedbackMutation, { data, loading, error }] = useSendFeedbackMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useSendFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<SendFeedbackMutation, SendFeedbackMutationVariables>) {
        return Apollo.useMutation<SendFeedbackMutation, SendFeedbackMutationVariables>(SendFeedbackDocument, baseOptions);
      }
export type SendFeedbackMutationHookResult = ReturnType<typeof useSendFeedbackMutation>;
export type SendFeedbackMutationResult = Apollo.MutationResult<SendFeedbackMutation>;
export type SendFeedbackMutationOptions = Apollo.BaseMutationOptions<SendFeedbackMutation, SendFeedbackMutationVariables>;
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
export const AllNftsDocument = /*#__PURE__*/ gql`
    query allNfts {
  allNfts {
    ...NftBase
  }
}
    ${NftBaseFragmentDoc}`;

/**
 * __useAllNftsQuery__
 *
 * To run a query within a React component, call `useAllNftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllNftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllNftsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllNftsQuery(baseOptions?: Apollo.QueryHookOptions<AllNftsQuery, AllNftsQueryVariables>) {
        return Apollo.useQuery<AllNftsQuery, AllNftsQueryVariables>(AllNftsDocument, baseOptions);
      }
export function useAllNftsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllNftsQuery, AllNftsQueryVariables>) {
          return Apollo.useLazyQuery<AllNftsQuery, AllNftsQueryVariables>(AllNftsDocument, baseOptions);
        }
export type AllNftsQueryHookResult = ReturnType<typeof useAllNftsQuery>;
export type AllNftsLazyQueryHookResult = ReturnType<typeof useAllNftsLazyQuery>;
export type AllNftsQueryResult = Apollo.QueryResult<AllNftsQuery, AllNftsQueryVariables>;
export const ClaimNftDocument = /*#__PURE__*/ gql`
    mutation claimNft($nftId: Int) {
  claimNft(nftId: $nftId) {
    ...NftBase
  }
}
    ${NftBaseFragmentDoc}`;
export type ClaimNftMutationFn = Apollo.MutationFunction<ClaimNftMutation, ClaimNftMutationVariables>;

/**
 * __useClaimNftMutation__
 *
 * To run a mutation, you first call `useClaimNftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClaimNftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [claimNftMutation, { data, loading, error }] = useClaimNftMutation({
 *   variables: {
 *      nftId: // value for 'nftId'
 *   },
 * });
 */
export function useClaimNftMutation(baseOptions?: Apollo.MutationHookOptions<ClaimNftMutation, ClaimNftMutationVariables>) {
        return Apollo.useMutation<ClaimNftMutation, ClaimNftMutationVariables>(ClaimNftDocument, baseOptions);
      }
export type ClaimNftMutationHookResult = ReturnType<typeof useClaimNftMutation>;
export type ClaimNftMutationResult = Apollo.MutationResult<ClaimNftMutation>;
export type ClaimNftMutationOptions = Apollo.BaseMutationOptions<ClaimNftMutation, ClaimNftMutationVariables>;
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
export const SocialSignUpAsInactiveUserDocument = /*#__PURE__*/ gql`
    mutation socialSignUpAsInactiveUser($username: String!, $email: String!, $phone: String, $firstName: String, $lastName: String, $fvType: String, $fvSource: String, $fvMedium: String, $fvCampaign: String, $fvContent: String, $fvTerm: String, $lvType: String, $lvSource: String, $lvMedium: String, $lvCampaign: String, $lvContent: String, $lvTerm: String, $gClientid: String, $gIp: String, $gAgent: String, $gclid: String, $providerId: String!, $providerName: String!, $token: String) {
  socialSignUpAsInactiveUser(username: $username, email: $email, phone: $phone, firstName: $firstName, lastName: $lastName, fvType: $fvType, fvSource: $fvSource, fvMedium: $fvMedium, fvCampaign: $fvCampaign, fvContent: $fvContent, fvTerm: $fvTerm, lvType: $lvType, lvSource: $lvSource, lvMedium: $lvMedium, lvCampaign: $lvCampaign, lvContent: $lvContent, lvTerm: $lvTerm, gClientid: $gClientid, gIp: $gIp, gAgent: $gAgent, gclid: $gclid, providerId: $providerId, providerName: $providerName, token: $token) {
    ...UserBase
    ...UserPrimaryProfile
    ...UserEngagementFields
  }
}
    ${UserBaseFragmentDoc}
${UserPrimaryProfileFragmentDoc}
${UserEngagementFieldsFragmentDoc}`;
export type SocialSignUpAsInactiveUserMutationFn = Apollo.MutationFunction<SocialSignUpAsInactiveUserMutation, SocialSignUpAsInactiveUserMutationVariables>;

/**
 * __useSocialSignUpAsInactiveUserMutation__
 *
 * To run a mutation, you first call `useSocialSignUpAsInactiveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSocialSignUpAsInactiveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [socialSignUpAsInactiveUserMutation, { data, loading, error }] = useSocialSignUpAsInactiveUserMutation({
 *   variables: {
 *      username: // value for 'username'
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
export function useSocialSignUpAsInactiveUserMutation(baseOptions?: Apollo.MutationHookOptions<SocialSignUpAsInactiveUserMutation, SocialSignUpAsInactiveUserMutationVariables>) {
        return Apollo.useMutation<SocialSignUpAsInactiveUserMutation, SocialSignUpAsInactiveUserMutationVariables>(SocialSignUpAsInactiveUserDocument, baseOptions);
      }
export type SocialSignUpAsInactiveUserMutationHookResult = ReturnType<typeof useSocialSignUpAsInactiveUserMutation>;
export type SocialSignUpAsInactiveUserMutationResult = Apollo.MutationResult<SocialSignUpAsInactiveUserMutation>;
export type SocialSignUpAsInactiveUserMutationOptions = Apollo.BaseMutationOptions<SocialSignUpAsInactiveUserMutation, SocialSignUpAsInactiveUserMutationVariables>;
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
export const SendPaymentRequestDocument = /*#__PURE__*/ gql`
    mutation sendPaymentRequest($profileConnectionId: Int!, $paymentAmount: Int!, $candidateSlug: String!) {
  sendPaymentRequest(profileConnectionId: $profileConnectionId, paymentAmount: $paymentAmount, candidateSlug: $candidateSlug) {
    ...ProfileConnectionBase
  }
}
    ${ProfileConnectionBaseFragmentDoc}`;
export type SendPaymentRequestMutationFn = Apollo.MutationFunction<SendPaymentRequestMutation, SendPaymentRequestMutationVariables>;

/**
 * __useSendPaymentRequestMutation__
 *
 * To run a mutation, you first call `useSendPaymentRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendPaymentRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendPaymentRequestMutation, { data, loading, error }] = useSendPaymentRequestMutation({
 *   variables: {
 *      profileConnectionId: // value for 'profileConnectionId'
 *      paymentAmount: // value for 'paymentAmount'
 *      candidateSlug: // value for 'candidateSlug'
 *   },
 * });
 */
export function useSendPaymentRequestMutation(baseOptions?: Apollo.MutationHookOptions<SendPaymentRequestMutation, SendPaymentRequestMutationVariables>) {
        return Apollo.useMutation<SendPaymentRequestMutation, SendPaymentRequestMutationVariables>(SendPaymentRequestDocument, baseOptions);
      }
export type SendPaymentRequestMutationHookResult = ReturnType<typeof useSendPaymentRequestMutation>;
export type SendPaymentRequestMutationResult = Apollo.MutationResult<SendPaymentRequestMutation>;
export type SendPaymentRequestMutationOptions = Apollo.BaseMutationOptions<SendPaymentRequestMutation, SendPaymentRequestMutationVariables>;
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
export const ProfileConnectionMetaWithMessagesDocument = /*#__PURE__*/ gql`
    query profileConnectionMetaWithMessages($profileConnectionId: Int!) {
  profileConnection(id: $profileConnectionId) {
    ...ProfileConnectionBase
    ...ProfileConnectionWithUsers
    ...ProfileConnectionWithProfiles
    ...ProfileConnectionWithUsersMeta
    ...ProfileConnectionUnreadMessagesCount
    ...ProfileConnectionMessages
  }
}
    ${ProfileConnectionBaseFragmentDoc}
${ProfileConnectionWithUsersFragmentDoc}
${ProfileConnectionWithProfilesFragmentDoc}
${ProfileConnectionWithUsersMetaFragmentDoc}
${ProfileConnectionUnreadMessagesCountFragmentDoc}
${ProfileConnectionMessagesFragmentDoc}`;

/**
 * __useProfileConnectionMetaWithMessagesQuery__
 *
 * To run a query within a React component, call `useProfileConnectionMetaWithMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileConnectionMetaWithMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileConnectionMetaWithMessagesQuery({
 *   variables: {
 *      profileConnectionId: // value for 'profileConnectionId'
 *   },
 * });
 */
export function useProfileConnectionMetaWithMessagesQuery(baseOptions?: Apollo.QueryHookOptions<ProfileConnectionMetaWithMessagesQuery, ProfileConnectionMetaWithMessagesQueryVariables>) {
        return Apollo.useQuery<ProfileConnectionMetaWithMessagesQuery, ProfileConnectionMetaWithMessagesQueryVariables>(ProfileConnectionMetaWithMessagesDocument, baseOptions);
      }
export function useProfileConnectionMetaWithMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileConnectionMetaWithMessagesQuery, ProfileConnectionMetaWithMessagesQueryVariables>) {
          return Apollo.useLazyQuery<ProfileConnectionMetaWithMessagesQuery, ProfileConnectionMetaWithMessagesQueryVariables>(ProfileConnectionMetaWithMessagesDocument, baseOptions);
        }
export type ProfileConnectionMetaWithMessagesQueryHookResult = ReturnType<typeof useProfileConnectionMetaWithMessagesQuery>;
export type ProfileConnectionMetaWithMessagesLazyQueryHookResult = ReturnType<typeof useProfileConnectionMetaWithMessagesLazyQuery>;
export type ProfileConnectionMetaWithMessagesQueryResult = Apollo.QueryResult<ProfileConnectionMetaWithMessagesQuery, ProfileConnectionMetaWithMessagesQueryVariables>;
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
export const ReportOfferStatusDocument = /*#__PURE__*/ gql`
    mutation reportOfferStatus($profileConnectionId: Int!, $status: OfferStatus!) {
  reportOfferStatus(profileConnectionId: $profileConnectionId, status: $status) {
    ...ProfileConnectionBase
  }
}
    ${ProfileConnectionBaseFragmentDoc}`;
export type ReportOfferStatusMutationFn = Apollo.MutationFunction<ReportOfferStatusMutation, ReportOfferStatusMutationVariables>;

/**
 * __useReportOfferStatusMutation__
 *
 * To run a mutation, you first call `useReportOfferStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReportOfferStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reportOfferStatusMutation, { data, loading, error }] = useReportOfferStatusMutation({
 *   variables: {
 *      profileConnectionId: // value for 'profileConnectionId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useReportOfferStatusMutation(baseOptions?: Apollo.MutationHookOptions<ReportOfferStatusMutation, ReportOfferStatusMutationVariables>) {
        return Apollo.useMutation<ReportOfferStatusMutation, ReportOfferStatusMutationVariables>(ReportOfferStatusDocument, baseOptions);
      }
export type ReportOfferStatusMutationHookResult = ReturnType<typeof useReportOfferStatusMutation>;
export type ReportOfferStatusMutationResult = Apollo.MutationResult<ReportOfferStatusMutation>;
export type ReportOfferStatusMutationOptions = Apollo.BaseMutationOptions<ReportOfferStatusMutation, ReportOfferStatusMutationVariables>;
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
export const SendProfileConnectionRequestDocument = /*#__PURE__*/ gql`
    mutation sendProfileConnectionRequest($candidateProfileId: Int!, $recruiterProfileId: Int!) {
  sendProfileConnectionRequest(candidateProfileId: $candidateProfileId, recruiterProfileId: $recruiterProfileId) {
    ...ProfileConnectionBase
  }
}
    ${ProfileConnectionBaseFragmentDoc}`;
export type SendProfileConnectionRequestMutationFn = Apollo.MutationFunction<SendProfileConnectionRequestMutation, SendProfileConnectionRequestMutationVariables>;

/**
 * __useSendProfileConnectionRequestMutation__
 *
 * To run a mutation, you first call `useSendProfileConnectionRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendProfileConnectionRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendProfileConnectionRequestMutation, { data, loading, error }] = useSendProfileConnectionRequestMutation({
 *   variables: {
 *      candidateProfileId: // value for 'candidateProfileId'
 *      recruiterProfileId: // value for 'recruiterProfileId'
 *   },
 * });
 */
export function useSendProfileConnectionRequestMutation(baseOptions?: Apollo.MutationHookOptions<SendProfileConnectionRequestMutation, SendProfileConnectionRequestMutationVariables>) {
        return Apollo.useMutation<SendProfileConnectionRequestMutation, SendProfileConnectionRequestMutationVariables>(SendProfileConnectionRequestDocument, baseOptions);
      }
export type SendProfileConnectionRequestMutationHookResult = ReturnType<typeof useSendProfileConnectionRequestMutation>;
export type SendProfileConnectionRequestMutationResult = Apollo.MutationResult<SendProfileConnectionRequestMutation>;
export type SendProfileConnectionRequestMutationOptions = Apollo.BaseMutationOptions<SendProfileConnectionRequestMutation, SendProfileConnectionRequestMutationVariables>;
export const UnarchiveProfileConnectionForUserDocument = /*#__PURE__*/ gql`
    mutation unarchiveProfileConnectionForUser($id: Int!) {
  unarchiveProfileConnectionForUser(id: $id)
}
    `;
export type UnarchiveProfileConnectionForUserMutationFn = Apollo.MutationFunction<UnarchiveProfileConnectionForUserMutation, UnarchiveProfileConnectionForUserMutationVariables>;

/**
 * __useUnarchiveProfileConnectionForUserMutation__
 *
 * To run a mutation, you first call `useUnarchiveProfileConnectionForUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnarchiveProfileConnectionForUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unarchiveProfileConnectionForUserMutation, { data, loading, error }] = useUnarchiveProfileConnectionForUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnarchiveProfileConnectionForUserMutation(baseOptions?: Apollo.MutationHookOptions<UnarchiveProfileConnectionForUserMutation, UnarchiveProfileConnectionForUserMutationVariables>) {
        return Apollo.useMutation<UnarchiveProfileConnectionForUserMutation, UnarchiveProfileConnectionForUserMutationVariables>(UnarchiveProfileConnectionForUserDocument, baseOptions);
      }
export type UnarchiveProfileConnectionForUserMutationHookResult = ReturnType<typeof useUnarchiveProfileConnectionForUserMutation>;
export type UnarchiveProfileConnectionForUserMutationResult = Apollo.MutationResult<UnarchiveProfileConnectionForUserMutation>;
export type UnarchiveProfileConnectionForUserMutationOptions = Apollo.BaseMutationOptions<UnarchiveProfileConnectionForUserMutation, UnarchiveProfileConnectionForUserMutationVariables>;
export const UpdateConnectionLastActionTimeDocument = /*#__PURE__*/ gql`
    mutation updateConnectionLastActionTime($id: Int!, $time: GraphQLDateTime!) {
  updateConnectionLastActionTime(id: $id, time: $time) {
    id
    userMeta {
      id
      lastActionTime
    }
  }
}
    `;
export type UpdateConnectionLastActionTimeMutationFn = Apollo.MutationFunction<UpdateConnectionLastActionTimeMutation, UpdateConnectionLastActionTimeMutationVariables>;

/**
 * __useUpdateConnectionLastActionTimeMutation__
 *
 * To run a mutation, you first call `useUpdateConnectionLastActionTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConnectionLastActionTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConnectionLastActionTimeMutation, { data, loading, error }] = useUpdateConnectionLastActionTimeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      time: // value for 'time'
 *   },
 * });
 */
export function useUpdateConnectionLastActionTimeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConnectionLastActionTimeMutation, UpdateConnectionLastActionTimeMutationVariables>) {
        return Apollo.useMutation<UpdateConnectionLastActionTimeMutation, UpdateConnectionLastActionTimeMutationVariables>(UpdateConnectionLastActionTimeDocument, baseOptions);
      }
export type UpdateConnectionLastActionTimeMutationHookResult = ReturnType<typeof useUpdateConnectionLastActionTimeMutation>;
export type UpdateConnectionLastActionTimeMutationResult = Apollo.MutationResult<UpdateConnectionLastActionTimeMutation>;
export type UpdateConnectionLastActionTimeMutationOptions = Apollo.BaseMutationOptions<UpdateConnectionLastActionTimeMutation, UpdateConnectionLastActionTimeMutationVariables>;
export const BulkReportOfferStatusDocument = /*#__PURE__*/ gql`
    mutation bulkReportOfferStatus($values: [ReportOfferStatusValues!]!) {
  bulkReportOfferStatus(values: $values)
}
    `;
export type BulkReportOfferStatusMutationFn = Apollo.MutationFunction<BulkReportOfferStatusMutation, BulkReportOfferStatusMutationVariables>;

/**
 * __useBulkReportOfferStatusMutation__
 *
 * To run a mutation, you first call `useBulkReportOfferStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkReportOfferStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkReportOfferStatusMutation, { data, loading, error }] = useBulkReportOfferStatusMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useBulkReportOfferStatusMutation(baseOptions?: Apollo.MutationHookOptions<BulkReportOfferStatusMutation, BulkReportOfferStatusMutationVariables>) {
        return Apollo.useMutation<BulkReportOfferStatusMutation, BulkReportOfferStatusMutationVariables>(BulkReportOfferStatusDocument, baseOptions);
      }
export type BulkReportOfferStatusMutationHookResult = ReturnType<typeof useBulkReportOfferStatusMutation>;
export type BulkReportOfferStatusMutationResult = Apollo.MutationResult<BulkReportOfferStatusMutation>;
export type BulkReportOfferStatusMutationOptions = Apollo.BaseMutationOptions<BulkReportOfferStatusMutation, BulkReportOfferStatusMutationVariables>;
export const BulkSendMessageDocument = /*#__PURE__*/ gql`
    mutation bulkSendMessage($recruiterProfileId: Int!, $candidateProfileIds: [Int!]!, $message: String!) {
  bulkSendMessage(recruiterProfileId: $recruiterProfileId, candidateProfileIds: $candidateProfileIds, message: $message)
}
    `;
export type BulkSendMessageMutationFn = Apollo.MutationFunction<BulkSendMessageMutation, BulkSendMessageMutationVariables>;

/**
 * __useBulkSendMessageMutation__
 *
 * To run a mutation, you first call `useBulkSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkSendMessageMutation, { data, loading, error }] = useBulkSendMessageMutation({
 *   variables: {
 *      recruiterProfileId: // value for 'recruiterProfileId'
 *      candidateProfileIds: // value for 'candidateProfileIds'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useBulkSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<BulkSendMessageMutation, BulkSendMessageMutationVariables>) {
        return Apollo.useMutation<BulkSendMessageMutation, BulkSendMessageMutationVariables>(BulkSendMessageDocument, baseOptions);
      }
export type BulkSendMessageMutationHookResult = ReturnType<typeof useBulkSendMessageMutation>;
export type BulkSendMessageMutationResult = Apollo.MutationResult<BulkSendMessageMutation>;
export type BulkSendMessageMutationOptions = Apollo.BaseMutationOptions<BulkSendMessageMutation, BulkSendMessageMutationVariables>;
export const CreateRecruiterProfileDocument = /*#__PURE__*/ gql`
    mutation createRecruiterProfile($userId: Int!, $position: String!, $companyName: String!) {
  createRecruiterProfile(userId: $userId, position: $position, companyName: $companyName) {
    ...RecruiterProfileBase
  }
}
    ${RecruiterProfileBaseFragmentDoc}`;
export type CreateRecruiterProfileMutationFn = Apollo.MutationFunction<CreateRecruiterProfileMutation, CreateRecruiterProfileMutationVariables>;

/**
 * __useCreateRecruiterProfileMutation__
 *
 * To run a mutation, you first call `useCreateRecruiterProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecruiterProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecruiterProfileMutation, { data, loading, error }] = useCreateRecruiterProfileMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      position: // value for 'position'
 *      companyName: // value for 'companyName'
 *   },
 * });
 */
export function useCreateRecruiterProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateRecruiterProfileMutation, CreateRecruiterProfileMutationVariables>) {
        return Apollo.useMutation<CreateRecruiterProfileMutation, CreateRecruiterProfileMutationVariables>(CreateRecruiterProfileDocument, baseOptions);
      }
export type CreateRecruiterProfileMutationHookResult = ReturnType<typeof useCreateRecruiterProfileMutation>;
export type CreateRecruiterProfileMutationResult = Apollo.MutationResult<CreateRecruiterProfileMutation>;
export type CreateRecruiterProfileMutationOptions = Apollo.BaseMutationOptions<CreateRecruiterProfileMutation, CreateRecruiterProfileMutationVariables>;
export const DeactivateRecruiterProfilesDocument = /*#__PURE__*/ gql`
    mutation deactivateRecruiterProfiles {
  deactivateRecruiterProfiles
}
    `;
export type DeactivateRecruiterProfilesMutationFn = Apollo.MutationFunction<DeactivateRecruiterProfilesMutation, DeactivateRecruiterProfilesMutationVariables>;

/**
 * __useDeactivateRecruiterProfilesMutation__
 *
 * To run a mutation, you first call `useDeactivateRecruiterProfilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeactivateRecruiterProfilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deactivateRecruiterProfilesMutation, { data, loading, error }] = useDeactivateRecruiterProfilesMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeactivateRecruiterProfilesMutation(baseOptions?: Apollo.MutationHookOptions<DeactivateRecruiterProfilesMutation, DeactivateRecruiterProfilesMutationVariables>) {
        return Apollo.useMutation<DeactivateRecruiterProfilesMutation, DeactivateRecruiterProfilesMutationVariables>(DeactivateRecruiterProfilesDocument, baseOptions);
      }
export type DeactivateRecruiterProfilesMutationHookResult = ReturnType<typeof useDeactivateRecruiterProfilesMutation>;
export type DeactivateRecruiterProfilesMutationResult = Apollo.MutationResult<DeactivateRecruiterProfilesMutation>;
export type DeactivateRecruiterProfilesMutationOptions = Apollo.BaseMutationOptions<DeactivateRecruiterProfilesMutation, DeactivateRecruiterProfilesMutationVariables>;
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
export const LatestRecruiterProfileByUserIdDocument = /*#__PURE__*/ gql`
    query latestRecruiterProfileByUserId($userId: Int) {
  latestRecruiterProfileByUserId(userId: $userId) {
    ...RecruiterProfileFull
  }
}
    ${RecruiterProfileFullFragmentDoc}`;

/**
 * __useLatestRecruiterProfileByUserIdQuery__
 *
 * To run a query within a React component, call `useLatestRecruiterProfileByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestRecruiterProfileByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestRecruiterProfileByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useLatestRecruiterProfileByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<LatestRecruiterProfileByUserIdQuery, LatestRecruiterProfileByUserIdQueryVariables>) {
        return Apollo.useQuery<LatestRecruiterProfileByUserIdQuery, LatestRecruiterProfileByUserIdQueryVariables>(LatestRecruiterProfileByUserIdDocument, baseOptions);
      }
export function useLatestRecruiterProfileByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestRecruiterProfileByUserIdQuery, LatestRecruiterProfileByUserIdQueryVariables>) {
          return Apollo.useLazyQuery<LatestRecruiterProfileByUserIdQuery, LatestRecruiterProfileByUserIdQueryVariables>(LatestRecruiterProfileByUserIdDocument, baseOptions);
        }
export type LatestRecruiterProfileByUserIdQueryHookResult = ReturnType<typeof useLatestRecruiterProfileByUserIdQuery>;
export type LatestRecruiterProfileByUserIdLazyQueryHookResult = ReturnType<typeof useLatestRecruiterProfileByUserIdLazyQuery>;
export type LatestRecruiterProfileByUserIdQueryResult = Apollo.QueryResult<LatestRecruiterProfileByUserIdQuery, LatestRecruiterProfileByUserIdQueryVariables>;
export const PublicRecruiterProfilesDocument = /*#__PURE__*/ gql`
    query publicRecruiterProfiles {
  publicRecruiterProfiles {
    ...RecruiterProfileBase
  }
}
    ${RecruiterProfileBaseFragmentDoc}`;

/**
 * __usePublicRecruiterProfilesQuery__
 *
 * To run a query within a React component, call `usePublicRecruiterProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicRecruiterProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicRecruiterProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePublicRecruiterProfilesQuery(baseOptions?: Apollo.QueryHookOptions<PublicRecruiterProfilesQuery, PublicRecruiterProfilesQueryVariables>) {
        return Apollo.useQuery<PublicRecruiterProfilesQuery, PublicRecruiterProfilesQueryVariables>(PublicRecruiterProfilesDocument, baseOptions);
      }
export function usePublicRecruiterProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicRecruiterProfilesQuery, PublicRecruiterProfilesQueryVariables>) {
          return Apollo.useLazyQuery<PublicRecruiterProfilesQuery, PublicRecruiterProfilesQueryVariables>(PublicRecruiterProfilesDocument, baseOptions);
        }
export type PublicRecruiterProfilesQueryHookResult = ReturnType<typeof usePublicRecruiterProfilesQuery>;
export type PublicRecruiterProfilesLazyQueryHookResult = ReturnType<typeof usePublicRecruiterProfilesLazyQuery>;
export type PublicRecruiterProfilesQueryResult = Apollo.QueryResult<PublicRecruiterProfilesQuery, PublicRecruiterProfilesQueryVariables>;
export const RecruiterProfileActiveConnectionDocument = /*#__PURE__*/ gql`
    query recruiterProfileActiveConnection($candidateProfileId: Int!) {
  latestRecruiterProfile {
    id
    activeConnectionWithCandidate(candidateProfileId: $candidateProfileId) {
      ...ProfileConnectionBase
      ...ProfileConnectionWithUsers
      ...ProfileConnectionWithProfiles
    }
  }
}
    ${ProfileConnectionBaseFragmentDoc}
${ProfileConnectionWithUsersFragmentDoc}
${ProfileConnectionWithProfilesFragmentDoc}`;

/**
 * __useRecruiterProfileActiveConnectionQuery__
 *
 * To run a query within a React component, call `useRecruiterProfileActiveConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecruiterProfileActiveConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecruiterProfileActiveConnectionQuery({
 *   variables: {
 *      candidateProfileId: // value for 'candidateProfileId'
 *   },
 * });
 */
export function useRecruiterProfileActiveConnectionQuery(baseOptions?: Apollo.QueryHookOptions<RecruiterProfileActiveConnectionQuery, RecruiterProfileActiveConnectionQueryVariables>) {
        return Apollo.useQuery<RecruiterProfileActiveConnectionQuery, RecruiterProfileActiveConnectionQueryVariables>(RecruiterProfileActiveConnectionDocument, baseOptions);
      }
export function useRecruiterProfileActiveConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecruiterProfileActiveConnectionQuery, RecruiterProfileActiveConnectionQueryVariables>) {
          return Apollo.useLazyQuery<RecruiterProfileActiveConnectionQuery, RecruiterProfileActiveConnectionQueryVariables>(RecruiterProfileActiveConnectionDocument, baseOptions);
        }
export type RecruiterProfileActiveConnectionQueryHookResult = ReturnType<typeof useRecruiterProfileActiveConnectionQuery>;
export type RecruiterProfileActiveConnectionLazyQueryHookResult = ReturnType<typeof useRecruiterProfileActiveConnectionLazyQuery>;
export type RecruiterProfileActiveConnectionQueryResult = Apollo.QueryResult<RecruiterProfileActiveConnectionQuery, RecruiterProfileActiveConnectionQueryVariables>;
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
export const RecruiterProfileStatusUpdatedDocument = /*#__PURE__*/ gql`
    subscription recruiterProfileStatusUpdated {
  recruiterProfileStatusUpdated {
    ...RecruiterProfileBase
  }
}
    ${RecruiterProfileBaseFragmentDoc}`;

/**
 * __useRecruiterProfileStatusUpdatedSubscription__
 *
 * To run a query within a React component, call `useRecruiterProfileStatusUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRecruiterProfileStatusUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecruiterProfileStatusUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useRecruiterProfileStatusUpdatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<RecruiterProfileStatusUpdatedSubscription, RecruiterProfileStatusUpdatedSubscriptionVariables>) {
        return Apollo.useSubscription<RecruiterProfileStatusUpdatedSubscription, RecruiterProfileStatusUpdatedSubscriptionVariables>(RecruiterProfileStatusUpdatedDocument, baseOptions);
      }
export type RecruiterProfileStatusUpdatedSubscriptionHookResult = ReturnType<typeof useRecruiterProfileStatusUpdatedSubscription>;
export type RecruiterProfileStatusUpdatedSubscriptionResult = Apollo.SubscriptionResult<RecruiterProfileStatusUpdatedSubscription>;
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
export const CreateTechnologiesDocument = /*#__PURE__*/ gql`
    mutation createTechnologies($slugs: [String!]) {
  createTechnologies(slugs: $slugs) {
    ...TechnologyBase
  }
}
    ${TechnologyBaseFragmentDoc}`;
export type CreateTechnologiesMutationFn = Apollo.MutationFunction<CreateTechnologiesMutation, CreateTechnologiesMutationVariables>;

/**
 * __useCreateTechnologiesMutation__
 *
 * To run a mutation, you first call `useCreateTechnologiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTechnologiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTechnologiesMutation, { data, loading, error }] = useCreateTechnologiesMutation({
 *   variables: {
 *      slugs: // value for 'slugs'
 *   },
 * });
 */
export function useCreateTechnologiesMutation(baseOptions?: Apollo.MutationHookOptions<CreateTechnologiesMutation, CreateTechnologiesMutationVariables>) {
        return Apollo.useMutation<CreateTechnologiesMutation, CreateTechnologiesMutationVariables>(CreateTechnologiesDocument, baseOptions);
      }
export type CreateTechnologiesMutationHookResult = ReturnType<typeof useCreateTechnologiesMutation>;
export type CreateTechnologiesMutationResult = Apollo.MutationResult<CreateTechnologiesMutation>;
export type CreateTechnologiesMutationOptions = Apollo.BaseMutationOptions<CreateTechnologiesMutation, CreateTechnologiesMutationVariables>;
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
export const TechnologiesByNamesDocument = /*#__PURE__*/ gql`
    query technologiesByNames($names: [String!]!) {
  technologiesByNames(names: $names) {
    ...TechnologyBase
  }
}
    ${TechnologyBaseFragmentDoc}`;

/**
 * __useTechnologiesByNamesQuery__
 *
 * To run a query within a React component, call `useTechnologiesByNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTechnologiesByNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTechnologiesByNamesQuery({
 *   variables: {
 *      names: // value for 'names'
 *   },
 * });
 */
export function useTechnologiesByNamesQuery(baseOptions?: Apollo.QueryHookOptions<TechnologiesByNamesQuery, TechnologiesByNamesQueryVariables>) {
        return Apollo.useQuery<TechnologiesByNamesQuery, TechnologiesByNamesQueryVariables>(TechnologiesByNamesDocument, baseOptions);
      }
export function useTechnologiesByNamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TechnologiesByNamesQuery, TechnologiesByNamesQueryVariables>) {
          return Apollo.useLazyQuery<TechnologiesByNamesQuery, TechnologiesByNamesQueryVariables>(TechnologiesByNamesDocument, baseOptions);
        }
export type TechnologiesByNamesQueryHookResult = ReturnType<typeof useTechnologiesByNamesQuery>;
export type TechnologiesByNamesLazyQueryHookResult = ReturnType<typeof useTechnologiesByNamesLazyQuery>;
export type TechnologiesByNamesQueryResult = Apollo.QueryResult<TechnologiesByNamesQuery, TechnologiesByNamesQueryVariables>;
export const AdminSettingsDocument = /*#__PURE__*/ gql`
    query adminSettings {
  authUser {
    id
    ...AdminSettings
  }
}
    ${AdminSettingsFragmentDoc}`;

/**
 * __useAdminSettingsQuery__
 *
 * To run a query within a React component, call `useAdminSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminSettingsQuery(baseOptions?: Apollo.QueryHookOptions<AdminSettingsQuery, AdminSettingsQueryVariables>) {
        return Apollo.useQuery<AdminSettingsQuery, AdminSettingsQueryVariables>(AdminSettingsDocument, baseOptions);
      }
export function useAdminSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminSettingsQuery, AdminSettingsQueryVariables>) {
          return Apollo.useLazyQuery<AdminSettingsQuery, AdminSettingsQueryVariables>(AdminSettingsDocument, baseOptions);
        }
export type AdminSettingsQueryHookResult = ReturnType<typeof useAdminSettingsQuery>;
export type AdminSettingsLazyQueryHookResult = ReturnType<typeof useAdminSettingsLazyQuery>;
export type AdminSettingsQueryResult = Apollo.QueryResult<AdminSettingsQuery, AdminSettingsQueryVariables>;
export const AdminUserDocument = /*#__PURE__*/ gql`
    query adminUser {
  adminUser {
    ...UserBase
  }
}
    ${UserBaseFragmentDoc}`;

/**
 * __useAdminUserQuery__
 *
 * To run a query within a React component, call `useAdminUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminUserQuery(baseOptions?: Apollo.QueryHookOptions<AdminUserQuery, AdminUserQueryVariables>) {
        return Apollo.useQuery<AdminUserQuery, AdminUserQueryVariables>(AdminUserDocument, baseOptions);
      }
export function useAdminUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminUserQuery, AdminUserQueryVariables>) {
          return Apollo.useLazyQuery<AdminUserQuery, AdminUserQueryVariables>(AdminUserDocument, baseOptions);
        }
export type AdminUserQueryHookResult = ReturnType<typeof useAdminUserQuery>;
export type AdminUserLazyQueryHookResult = ReturnType<typeof useAdminUserLazyQuery>;
export type AdminUserQueryResult = Apollo.QueryResult<AdminUserQuery, AdminUserQueryVariables>;
export const AuthUserDocument = /*#__PURE__*/ gql`
    query authUser {
  authUser {
    ...UserBase
    ...UserPrimaryProfile
    ...UserEngagementFields
    ...UserCv
    ...UserAvatar
    ...IsFirstCandidateProfile
    ...IsFirstRecruiterProfile
    ...UserSocialLinks
    ...UserHasVacanciesSource
    ...UserNft
  }
}
    ${UserBaseFragmentDoc}
${UserPrimaryProfileFragmentDoc}
${UserEngagementFieldsFragmentDoc}
${UserCvFragmentDoc}
${UserAvatarFragmentDoc}
${IsFirstCandidateProfileFragmentDoc}
${IsFirstRecruiterProfileFragmentDoc}
${UserSocialLinksFragmentDoc}
${UserHasVacanciesSourceFragmentDoc}
${UserNftFragmentDoc}`;

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
export const AuthUserHiresDocument = /*#__PURE__*/ gql`
    query authUserHires {
  authUser {
    ...UserBase
    hires {
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
 * __useAuthUserHiresQuery__
 *
 * To run a query within a React component, call `useAuthUserHiresQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthUserHiresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthUserHiresQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthUserHiresQuery(baseOptions?: Apollo.QueryHookOptions<AuthUserHiresQuery, AuthUserHiresQueryVariables>) {
        return Apollo.useQuery<AuthUserHiresQuery, AuthUserHiresQueryVariables>(AuthUserHiresDocument, baseOptions);
      }
export function useAuthUserHiresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthUserHiresQuery, AuthUserHiresQueryVariables>) {
          return Apollo.useLazyQuery<AuthUserHiresQuery, AuthUserHiresQueryVariables>(AuthUserHiresDocument, baseOptions);
        }
export type AuthUserHiresQueryHookResult = ReturnType<typeof useAuthUserHiresQuery>;
export type AuthUserHiresLazyQueryHookResult = ReturnType<typeof useAuthUserHiresLazyQuery>;
export type AuthUserHiresQueryResult = Apollo.QueryResult<AuthUserHiresQuery, AuthUserHiresQueryVariables>;
export const ChangePasswordDocument = /*#__PURE__*/ gql`
    mutation changePassword($currentPassword: String!, $password: String!, $repeatPassword: String!) {
  changePassword(currentPassword: $currentPassword, password: $password, repeatPassword: $repeatPassword)
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      currentPassword: // value for 'currentPassword'
 *      password: // value for 'password'
 *      repeatPassword: // value for 'repeatPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ConfirmEmailDocument = /*#__PURE__*/ gql`
    mutation confirmEmail($token: String!) {
  confirmEmail(token: $token)
}
    `;
export type ConfirmEmailMutationFn = Apollo.MutationFunction<ConfirmEmailMutation, ConfirmEmailMutationVariables>;

/**
 * __useConfirmEmailMutation__
 *
 * To run a mutation, you first call `useConfirmEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmEmailMutation, { data, loading, error }] = useConfirmEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmEmailMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>) {
        return Apollo.useMutation<ConfirmEmailMutation, ConfirmEmailMutationVariables>(ConfirmEmailDocument, baseOptions);
      }
export type ConfirmEmailMutationHookResult = ReturnType<typeof useConfirmEmailMutation>;
export type ConfirmEmailMutationResult = Apollo.MutationResult<ConfirmEmailMutation>;
export type ConfirmEmailMutationOptions = Apollo.BaseMutationOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>;
export const CreateUserDocument = /*#__PURE__*/ gql`
    mutation createUser($firstName: String!, $lastName: String!) {
  createUser(firstName: $firstName, lastName: $lastName) {
    ...UserBase
  }
}
    ${UserBaseFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const ForgotPasswordDocument = /*#__PURE__*/ gql`
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const IsFirstTimeFillingCandidateProfileDocument = /*#__PURE__*/ gql`
    query isFirstTimeFillingCandidateProfile {
  authUser {
    id
    isFirstTimeFillingCandidateProfile: isFirstTimeFillingCandidateProfile
  }
}
    `;

/**
 * __useIsFirstTimeFillingCandidateProfileQuery__
 *
 * To run a query within a React component, call `useIsFirstTimeFillingCandidateProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsFirstTimeFillingCandidateProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsFirstTimeFillingCandidateProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsFirstTimeFillingCandidateProfileQuery(baseOptions?: Apollo.QueryHookOptions<IsFirstTimeFillingCandidateProfileQuery, IsFirstTimeFillingCandidateProfileQueryVariables>) {
        return Apollo.useQuery<IsFirstTimeFillingCandidateProfileQuery, IsFirstTimeFillingCandidateProfileQueryVariables>(IsFirstTimeFillingCandidateProfileDocument, baseOptions);
      }
export function useIsFirstTimeFillingCandidateProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsFirstTimeFillingCandidateProfileQuery, IsFirstTimeFillingCandidateProfileQueryVariables>) {
          return Apollo.useLazyQuery<IsFirstTimeFillingCandidateProfileQuery, IsFirstTimeFillingCandidateProfileQueryVariables>(IsFirstTimeFillingCandidateProfileDocument, baseOptions);
        }
export type IsFirstTimeFillingCandidateProfileQueryHookResult = ReturnType<typeof useIsFirstTimeFillingCandidateProfileQuery>;
export type IsFirstTimeFillingCandidateProfileLazyQueryHookResult = ReturnType<typeof useIsFirstTimeFillingCandidateProfileLazyQuery>;
export type IsFirstTimeFillingCandidateProfileQueryResult = Apollo.QueryResult<IsFirstTimeFillingCandidateProfileQuery, IsFirstTimeFillingCandidateProfileQueryVariables>;
export const IsFirstTimeFillingRecruiterProfileDocument = /*#__PURE__*/ gql`
    query isFirstTimeFillingRecruiterProfile {
  authUser {
    id
    isFirstTimeFillingRecruiterProfile: isFirstTimeFillingRecruiterProfile
  }
}
    `;

/**
 * __useIsFirstTimeFillingRecruiterProfileQuery__
 *
 * To run a query within a React component, call `useIsFirstTimeFillingRecruiterProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsFirstTimeFillingRecruiterProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsFirstTimeFillingRecruiterProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsFirstTimeFillingRecruiterProfileQuery(baseOptions?: Apollo.QueryHookOptions<IsFirstTimeFillingRecruiterProfileQuery, IsFirstTimeFillingRecruiterProfileQueryVariables>) {
        return Apollo.useQuery<IsFirstTimeFillingRecruiterProfileQuery, IsFirstTimeFillingRecruiterProfileQueryVariables>(IsFirstTimeFillingRecruiterProfileDocument, baseOptions);
      }
export function useIsFirstTimeFillingRecruiterProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsFirstTimeFillingRecruiterProfileQuery, IsFirstTimeFillingRecruiterProfileQueryVariables>) {
          return Apollo.useLazyQuery<IsFirstTimeFillingRecruiterProfileQuery, IsFirstTimeFillingRecruiterProfileQueryVariables>(IsFirstTimeFillingRecruiterProfileDocument, baseOptions);
        }
export type IsFirstTimeFillingRecruiterProfileQueryHookResult = ReturnType<typeof useIsFirstTimeFillingRecruiterProfileQuery>;
export type IsFirstTimeFillingRecruiterProfileLazyQueryHookResult = ReturnType<typeof useIsFirstTimeFillingRecruiterProfileLazyQuery>;
export type IsFirstTimeFillingRecruiterProfileQueryResult = Apollo.QueryResult<IsFirstTimeFillingRecruiterProfileQuery, IsFirstTimeFillingRecruiterProfileQueryVariables>;
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
export const LogOutFromUserDocument = /*#__PURE__*/ gql`
    mutation logOutFromUser {
  logOutFromUser {
    ...UserBase
  }
}
    ${UserBaseFragmentDoc}`;
export type LogOutFromUserMutationFn = Apollo.MutationFunction<LogOutFromUserMutation, LogOutFromUserMutationVariables>;

/**
 * __useLogOutFromUserMutation__
 *
 * To run a mutation, you first call `useLogOutFromUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogOutFromUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logOutFromUserMutation, { data, loading, error }] = useLogOutFromUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogOutFromUserMutation(baseOptions?: Apollo.MutationHookOptions<LogOutFromUserMutation, LogOutFromUserMutationVariables>) {
        return Apollo.useMutation<LogOutFromUserMutation, LogOutFromUserMutationVariables>(LogOutFromUserDocument, baseOptions);
      }
export type LogOutFromUserMutationHookResult = ReturnType<typeof useLogOutFromUserMutation>;
export type LogOutFromUserMutationResult = Apollo.MutationResult<LogOutFromUserMutation>;
export type LogOutFromUserMutationOptions = Apollo.BaseMutationOptions<LogOutFromUserMutation, LogOutFromUserMutationVariables>;
export const RemoveCvFileDocument = /*#__PURE__*/ gql`
    mutation removeCvFile {
  removeCvFile {
    ...UserCv
  }
}
    ${UserCvFragmentDoc}`;
export type RemoveCvFileMutationFn = Apollo.MutationFunction<RemoveCvFileMutation, RemoveCvFileMutationVariables>;

/**
 * __useRemoveCvFileMutation__
 *
 * To run a mutation, you first call `useRemoveCvFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCvFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCvFileMutation, { data, loading, error }] = useRemoveCvFileMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveCvFileMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCvFileMutation, RemoveCvFileMutationVariables>) {
        return Apollo.useMutation<RemoveCvFileMutation, RemoveCvFileMutationVariables>(RemoveCvFileDocument, baseOptions);
      }
export type RemoveCvFileMutationHookResult = ReturnType<typeof useRemoveCvFileMutation>;
export type RemoveCvFileMutationResult = Apollo.MutationResult<RemoveCvFileMutation>;
export type RemoveCvFileMutationOptions = Apollo.BaseMutationOptions<RemoveCvFileMutation, RemoveCvFileMutationVariables>;
export const ResetPasswordDocument = /*#__PURE__*/ gql`
    mutation resetPassword($token: String!, $password: String!, $repeatPassword: String!) {
  resetPassword(token: $token, password: $password, repeatPassword: $repeatPassword)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *      repeatPassword: // value for 'repeatPassword'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SendConfirmEmailLinkDocument = /*#__PURE__*/ gql`
    mutation sendConfirmEmailLink {
  sendConfirmEmailLink
}
    `;
export type SendConfirmEmailLinkMutationFn = Apollo.MutationFunction<SendConfirmEmailLinkMutation, SendConfirmEmailLinkMutationVariables>;

/**
 * __useSendConfirmEmailLinkMutation__
 *
 * To run a mutation, you first call `useSendConfirmEmailLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendConfirmEmailLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendConfirmEmailLinkMutation, { data, loading, error }] = useSendConfirmEmailLinkMutation({
 *   variables: {
 *   },
 * });
 */
export function useSendConfirmEmailLinkMutation(baseOptions?: Apollo.MutationHookOptions<SendConfirmEmailLinkMutation, SendConfirmEmailLinkMutationVariables>) {
        return Apollo.useMutation<SendConfirmEmailLinkMutation, SendConfirmEmailLinkMutationVariables>(SendConfirmEmailLinkDocument, baseOptions);
      }
export type SendConfirmEmailLinkMutationHookResult = ReturnType<typeof useSendConfirmEmailLinkMutation>;
export type SendConfirmEmailLinkMutationResult = Apollo.MutationResult<SendConfirmEmailLinkMutation>;
export type SendConfirmEmailLinkMutationOptions = Apollo.BaseMutationOptions<SendConfirmEmailLinkMutation, SendConfirmEmailLinkMutationVariables>;
export const ServiceUserDocument = /*#__PURE__*/ gql`
    query serviceUser {
  serviceUser {
    ...UserBase
  }
}
    ${UserBaseFragmentDoc}`;

/**
 * __useServiceUserQuery__
 *
 * To run a query within a React component, call `useServiceUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useServiceUserQuery(baseOptions?: Apollo.QueryHookOptions<ServiceUserQuery, ServiceUserQueryVariables>) {
        return Apollo.useQuery<ServiceUserQuery, ServiceUserQueryVariables>(ServiceUserDocument, baseOptions);
      }
export function useServiceUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServiceUserQuery, ServiceUserQueryVariables>) {
          return Apollo.useLazyQuery<ServiceUserQuery, ServiceUserQueryVariables>(ServiceUserDocument, baseOptions);
        }
export type ServiceUserQueryHookResult = ReturnType<typeof useServiceUserQuery>;
export type ServiceUserLazyQueryHookResult = ReturnType<typeof useServiceUserLazyQuery>;
export type ServiceUserQueryResult = Apollo.QueryResult<ServiceUserQuery, ServiceUserQueryVariables>;
export const SetNftAvatarDocument = /*#__PURE__*/ gql`
    mutation setNftAvatar($nftId: Int) {
  setNftAvatar(nftId: $nftId) {
    ...UserAvatar
  }
}
    ${UserAvatarFragmentDoc}`;
export type SetNftAvatarMutationFn = Apollo.MutationFunction<SetNftAvatarMutation, SetNftAvatarMutationVariables>;

/**
 * __useSetNftAvatarMutation__
 *
 * To run a mutation, you first call `useSetNftAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetNftAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setNftAvatarMutation, { data, loading, error }] = useSetNftAvatarMutation({
 *   variables: {
 *      nftId: // value for 'nftId'
 *   },
 * });
 */
export function useSetNftAvatarMutation(baseOptions?: Apollo.MutationHookOptions<SetNftAvatarMutation, SetNftAvatarMutationVariables>) {
        return Apollo.useMutation<SetNftAvatarMutation, SetNftAvatarMutationVariables>(SetNftAvatarDocument, baseOptions);
      }
export type SetNftAvatarMutationHookResult = ReturnType<typeof useSetNftAvatarMutation>;
export type SetNftAvatarMutationResult = Apollo.MutationResult<SetNftAvatarMutation>;
export type SetNftAvatarMutationOptions = Apollo.BaseMutationOptions<SetNftAvatarMutation, SetNftAvatarMutationVariables>;
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
export const SignInAsUserDocument = /*#__PURE__*/ gql`
    mutation signInAsUser($email: String!) {
  signInAsUser(email: $email) {
    ...UserBase
    ...UserPrimaryProfile
    ...UserEngagementFields
  }
}
    ${UserBaseFragmentDoc}
${UserPrimaryProfileFragmentDoc}
${UserEngagementFieldsFragmentDoc}`;
export type SignInAsUserMutationFn = Apollo.MutationFunction<SignInAsUserMutation, SignInAsUserMutationVariables>;

/**
 * __useSignInAsUserMutation__
 *
 * To run a mutation, you first call `useSignInAsUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInAsUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInAsUserMutation, { data, loading, error }] = useSignInAsUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSignInAsUserMutation(baseOptions?: Apollo.MutationHookOptions<SignInAsUserMutation, SignInAsUserMutationVariables>) {
        return Apollo.useMutation<SignInAsUserMutation, SignInAsUserMutationVariables>(SignInAsUserDocument, baseOptions);
      }
export type SignInAsUserMutationHookResult = ReturnType<typeof useSignInAsUserMutation>;
export type SignInAsUserMutationResult = Apollo.MutationResult<SignInAsUserMutation>;
export type SignInAsUserMutationOptions = Apollo.BaseMutationOptions<SignInAsUserMutation, SignInAsUserMutationVariables>;
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
export const SignUpAsInactiveUserDocument = /*#__PURE__*/ gql`
    mutation signUpAsInactiveUser($username: String!, $email: String!, $phone: String, $password: String!, $repeatPassword: String!, $firstName: String, $lastName: String, $fvType: String, $fvSource: String, $fvMedium: String, $fvCampaign: String, $fvContent: String, $fvTerm: String, $lvType: String, $lvSource: String, $lvMedium: String, $lvCampaign: String, $lvContent: String, $lvTerm: String, $gClientid: String, $gIp: String, $gAgent: String, $gclid: String) {
  signUpAsInactiveUser(username: $username, email: $email, phone: $phone, password: $password, repeatPassword: $repeatPassword, firstName: $firstName, lastName: $lastName, fvType: $fvType, fvSource: $fvSource, fvMedium: $fvMedium, fvCampaign: $fvCampaign, fvContent: $fvContent, fvTerm: $fvTerm, lvType: $lvType, lvSource: $lvSource, lvMedium: $lvMedium, lvCampaign: $lvCampaign, lvContent: $lvContent, lvTerm: $lvTerm, gClientid: $gClientid, gIp: $gIp, gAgent: $gAgent, gclid: $gclid) {
    ...UserBase
    ...UserPrimaryProfile
    ...UserEngagementFields
  }
}
    ${UserBaseFragmentDoc}
${UserPrimaryProfileFragmentDoc}
${UserEngagementFieldsFragmentDoc}`;
export type SignUpAsInactiveUserMutationFn = Apollo.MutationFunction<SignUpAsInactiveUserMutation, SignUpAsInactiveUserMutationVariables>;

/**
 * __useSignUpAsInactiveUserMutation__
 *
 * To run a mutation, you first call `useSignUpAsInactiveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpAsInactiveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpAsInactiveUserMutation, { data, loading, error }] = useSignUpAsInactiveUserMutation({
 *   variables: {
 *      username: // value for 'username'
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
export function useSignUpAsInactiveUserMutation(baseOptions?: Apollo.MutationHookOptions<SignUpAsInactiveUserMutation, SignUpAsInactiveUserMutationVariables>) {
        return Apollo.useMutation<SignUpAsInactiveUserMutation, SignUpAsInactiveUserMutationVariables>(SignUpAsInactiveUserDocument, baseOptions);
      }
export type SignUpAsInactiveUserMutationHookResult = ReturnType<typeof useSignUpAsInactiveUserMutation>;
export type SignUpAsInactiveUserMutationResult = Apollo.MutationResult<SignUpAsInactiveUserMutation>;
export type SignUpAsInactiveUserMutationOptions = Apollo.BaseMutationOptions<SignUpAsInactiveUserMutation, SignUpAsInactiveUserMutationVariables>;
export const UpdateProfileContactsDocument = /*#__PURE__*/ gql`
    mutation updateProfileContacts($phone: String, $firstName: String, $lastName: String, $linkedinUrl: String, $behanceUrl: String, $githubUrl: String, $ethWalletAddress: String) {
  updateProfileContacts(firstName: $firstName, lastName: $lastName, phone: $phone, linkedinUrl: $linkedinUrl, behanceUrl: $behanceUrl, githubUrl: $githubUrl, ethWalletAddress: $ethWalletAddress) {
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
 *      ethWalletAddress: // value for 'ethWalletAddress'
 *   },
 * });
 */
export function useUpdateProfileContactsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileContactsMutation, UpdateProfileContactsMutationVariables>) {
        return Apollo.useMutation<UpdateProfileContactsMutation, UpdateProfileContactsMutationVariables>(UpdateProfileContactsDocument, baseOptions);
      }
export type UpdateProfileContactsMutationHookResult = ReturnType<typeof useUpdateProfileContactsMutation>;
export type UpdateProfileContactsMutationResult = Apollo.MutationResult<UpdateProfileContactsMutation>;
export type UpdateProfileContactsMutationOptions = Apollo.BaseMutationOptions<UpdateProfileContactsMutation, UpdateProfileContactsMutationVariables>;
export const UploadAvatarDocument = /*#__PURE__*/ gql`
    mutation uploadAvatar($file: Upload!, $size: Int!) {
  uploadAvatar(file: $file, size: $size) {
    ...UserAvatar
  }
}
    ${UserAvatarFragmentDoc}`;
export type UploadAvatarMutationFn = Apollo.MutationFunction<UploadAvatarMutation, UploadAvatarMutationVariables>;

/**
 * __useUploadAvatarMutation__
 *
 * To run a mutation, you first call `useUploadAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadAvatarMutation, { data, loading, error }] = useUploadAvatarMutation({
 *   variables: {
 *      file: // value for 'file'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useUploadAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UploadAvatarMutation, UploadAvatarMutationVariables>) {
        return Apollo.useMutation<UploadAvatarMutation, UploadAvatarMutationVariables>(UploadAvatarDocument, baseOptions);
      }
export type UploadAvatarMutationHookResult = ReturnType<typeof useUploadAvatarMutation>;
export type UploadAvatarMutationResult = Apollo.MutationResult<UploadAvatarMutation>;
export type UploadAvatarMutationOptions = Apollo.BaseMutationOptions<UploadAvatarMutation, UploadAvatarMutationVariables>;
export const UploadCvFileDocument = /*#__PURE__*/ gql`
    mutation uploadCvFile($file: Upload!, $size: Int!) {
  uploadCvFile(file: $file, size: $size) {
    ...UserCv
  }
}
    ${UserCvFragmentDoc}`;
export type UploadCvFileMutationFn = Apollo.MutationFunction<UploadCvFileMutation, UploadCvFileMutationVariables>;

/**
 * __useUploadCvFileMutation__
 *
 * To run a mutation, you first call `useUploadCvFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadCvFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadCvFileMutation, { data, loading, error }] = useUploadCvFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useUploadCvFileMutation(baseOptions?: Apollo.MutationHookOptions<UploadCvFileMutation, UploadCvFileMutationVariables>) {
        return Apollo.useMutation<UploadCvFileMutation, UploadCvFileMutationVariables>(UploadCvFileDocument, baseOptions);
      }
export type UploadCvFileMutationHookResult = ReturnType<typeof useUploadCvFileMutation>;
export type UploadCvFileMutationResult = Apollo.MutationResult<UploadCvFileMutation>;
export type UploadCvFileMutationOptions = Apollo.BaseMutationOptions<UploadCvFileMutation, UploadCvFileMutationVariables>;
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
export const UserByUsernameDocument = /*#__PURE__*/ gql`
    query userByUsername($username: String) {
  userByUsername(username: $username) {
    ...UserBase
  }
}
    ${UserBaseFragmentDoc}`;

/**
 * __useUserByUsernameQuery__
 *
 * To run a query within a React component, call `useUserByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserByUsernameQuery(baseOptions?: Apollo.QueryHookOptions<UserByUsernameQuery, UserByUsernameQueryVariables>) {
        return Apollo.useQuery<UserByUsernameQuery, UserByUsernameQueryVariables>(UserByUsernameDocument, baseOptions);
      }
export function useUserByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByUsernameQuery, UserByUsernameQueryVariables>) {
          return Apollo.useLazyQuery<UserByUsernameQuery, UserByUsernameQueryVariables>(UserByUsernameDocument, baseOptions);
        }
export type UserByUsernameQueryHookResult = ReturnType<typeof useUserByUsernameQuery>;
export type UserByUsernameLazyQueryHookResult = ReturnType<typeof useUserByUsernameLazyQuery>;
export type UserByUsernameQueryResult = Apollo.QueryResult<UserByUsernameQuery, UserByUsernameQueryVariables>;
export const UserCvDocument = /*#__PURE__*/ gql`
    query UserCv {
  authUser {
    ...UserCv
  }
}
    ${UserCvFragmentDoc}`;

/**
 * __useUserCvQuery__
 *
 * To run a query within a React component, call `useUserCvQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCvQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCvQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserCvQuery(baseOptions?: Apollo.QueryHookOptions<UserCvQuery, UserCvQueryVariables>) {
        return Apollo.useQuery<UserCvQuery, UserCvQueryVariables>(UserCvDocument, baseOptions);
      }
export function useUserCvLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserCvQuery, UserCvQueryVariables>) {
          return Apollo.useLazyQuery<UserCvQuery, UserCvQueryVariables>(UserCvDocument, baseOptions);
        }
export type UserCvQueryHookResult = ReturnType<typeof useUserCvQuery>;
export type UserCvLazyQueryHookResult = ReturnType<typeof useUserCvLazyQuery>;
export type UserCvQueryResult = Apollo.QueryResult<UserCvQuery, UserCvQueryVariables>;
export const UserMessageTemplatesDocument = /*#__PURE__*/ gql`
    query UserMessageTemplates($messageType: PrimaryProfile!) {
  authUser {
    id
    messageTemplates: messageTemplates(messageType: $messageType) {
      ...MessageTemplateBase
    }
  }
}
    ${MessageTemplateBaseFragmentDoc}`;

/**
 * __useUserMessageTemplatesQuery__
 *
 * To run a query within a React component, call `useUserMessageTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserMessageTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserMessageTemplatesQuery({
 *   variables: {
 *      messageType: // value for 'messageType'
 *   },
 * });
 */
export function useUserMessageTemplatesQuery(baseOptions?: Apollo.QueryHookOptions<UserMessageTemplatesQuery, UserMessageTemplatesQueryVariables>) {
        return Apollo.useQuery<UserMessageTemplatesQuery, UserMessageTemplatesQueryVariables>(UserMessageTemplatesDocument, baseOptions);
      }
export function useUserMessageTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserMessageTemplatesQuery, UserMessageTemplatesQueryVariables>) {
          return Apollo.useLazyQuery<UserMessageTemplatesQuery, UserMessageTemplatesQueryVariables>(UserMessageTemplatesDocument, baseOptions);
        }
export type UserMessageTemplatesQueryHookResult = ReturnType<typeof useUserMessageTemplatesQuery>;
export type UserMessageTemplatesLazyQueryHookResult = ReturnType<typeof useUserMessageTemplatesLazyQuery>;
export type UserMessageTemplatesQueryResult = Apollo.QueryResult<UserMessageTemplatesQuery, UserMessageTemplatesQueryVariables>;
export const UserNftDocument = /*#__PURE__*/ gql`
    query UserNft {
  authUser {
    ...UserNft
  }
}
    ${UserNftFragmentDoc}`;

/**
 * __useUserNftQuery__
 *
 * To run a query within a React component, call `useUserNftQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserNftQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserNftQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserNftQuery(baseOptions?: Apollo.QueryHookOptions<UserNftQuery, UserNftQueryVariables>) {
        return Apollo.useQuery<UserNftQuery, UserNftQueryVariables>(UserNftDocument, baseOptions);
      }
export function useUserNftLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserNftQuery, UserNftQueryVariables>) {
          return Apollo.useLazyQuery<UserNftQuery, UserNftQueryVariables>(UserNftDocument, baseOptions);
        }
export type UserNftQueryHookResult = ReturnType<typeof useUserNftQuery>;
export type UserNftLazyQueryHookResult = ReturnType<typeof useUserNftLazyQuery>;
export type UserNftQueryResult = Apollo.QueryResult<UserNftQuery, UserNftQueryVariables>;
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
export const UserSubscriptionsDocument = /*#__PURE__*/ gql`
    query userSubscriptions {
  authUser {
    id
    ...SearchSubscriptions
  }
}
    ${SearchSubscriptionsFragmentDoc}`;

/**
 * __useUserSubscriptionsQuery__
 *
 * To run a query within a React component, call `useUserSubscriptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSubscriptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSubscriptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserSubscriptionsQuery(baseOptions?: Apollo.QueryHookOptions<UserSubscriptionsQuery, UserSubscriptionsQueryVariables>) {
        return Apollo.useQuery<UserSubscriptionsQuery, UserSubscriptionsQueryVariables>(UserSubscriptionsDocument, baseOptions);
      }
export function useUserSubscriptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserSubscriptionsQuery, UserSubscriptionsQueryVariables>) {
          return Apollo.useLazyQuery<UserSubscriptionsQuery, UserSubscriptionsQueryVariables>(UserSubscriptionsDocument, baseOptions);
        }
export type UserSubscriptionsQueryHookResult = ReturnType<typeof useUserSubscriptionsQuery>;
export type UserSubscriptionsLazyQueryHookResult = ReturnType<typeof useUserSubscriptionsLazyQuery>;
export type UserSubscriptionsQueryResult = Apollo.QueryResult<UserSubscriptionsQuery, UserSubscriptionsQueryVariables>;
export const UserUnreadMessagesCountDocument = /*#__PURE__*/ gql`
    query userUnreadMessagesCount {
  authUser {
    ...UserUnreadMessagesCount
  }
}
    ${UserUnreadMessagesCountFragmentDoc}`;

/**
 * __useUserUnreadMessagesCountQuery__
 *
 * To run a query within a React component, call `useUserUnreadMessagesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserUnreadMessagesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserUnreadMessagesCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserUnreadMessagesCountQuery(baseOptions?: Apollo.QueryHookOptions<UserUnreadMessagesCountQuery, UserUnreadMessagesCountQueryVariables>) {
        return Apollo.useQuery<UserUnreadMessagesCountQuery, UserUnreadMessagesCountQueryVariables>(UserUnreadMessagesCountDocument, baseOptions);
      }
export function useUserUnreadMessagesCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserUnreadMessagesCountQuery, UserUnreadMessagesCountQueryVariables>) {
          return Apollo.useLazyQuery<UserUnreadMessagesCountQuery, UserUnreadMessagesCountQueryVariables>(UserUnreadMessagesCountDocument, baseOptions);
        }
export type UserUnreadMessagesCountQueryHookResult = ReturnType<typeof useUserUnreadMessagesCountQuery>;
export type UserUnreadMessagesCountLazyQueryHookResult = ReturnType<typeof useUserUnreadMessagesCountLazyQuery>;
export type UserUnreadMessagesCountQueryResult = Apollo.QueryResult<UserUnreadMessagesCountQuery, UserUnreadMessagesCountQueryVariables>;
export const UserUnreadMessagesCountUpdatedDocument = /*#__PURE__*/ gql`
    subscription userUnreadMessagesCountUpdated {
  userUnreadMessagesCountUpdated {
    ...UserUnreadMessagesCount
  }
}
    ${UserUnreadMessagesCountFragmentDoc}`;

/**
 * __useUserUnreadMessagesCountUpdatedSubscription__
 *
 * To run a query within a React component, call `useUserUnreadMessagesCountUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserUnreadMessagesCountUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserUnreadMessagesCountUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUserUnreadMessagesCountUpdatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UserUnreadMessagesCountUpdatedSubscription, UserUnreadMessagesCountUpdatedSubscriptionVariables>) {
        return Apollo.useSubscription<UserUnreadMessagesCountUpdatedSubscription, UserUnreadMessagesCountUpdatedSubscriptionVariables>(UserUnreadMessagesCountUpdatedDocument, baseOptions);
      }
export type UserUnreadMessagesCountUpdatedSubscriptionHookResult = ReturnType<typeof useUserUnreadMessagesCountUpdatedSubscription>;
export type UserUnreadMessagesCountUpdatedSubscriptionResult = Apollo.SubscriptionResult<UserUnreadMessagesCountUpdatedSubscription>;
export const CreateMessageTemplateDocument = /*#__PURE__*/ gql`
    mutation createMessageTemplate($userId: Int!, $messageType: PrimaryProfile!, $messageTitle: String!, $messageBody: String!) {
  createMessageTemplate(userId: $userId, messageType: $messageType, messageTitle: $messageTitle, messageBody: $messageBody) {
    ...MessageTemplateBase
  }
}
    ${MessageTemplateBaseFragmentDoc}`;
export type CreateMessageTemplateMutationFn = Apollo.MutationFunction<CreateMessageTemplateMutation, CreateMessageTemplateMutationVariables>;

/**
 * __useCreateMessageTemplateMutation__
 *
 * To run a mutation, you first call `useCreateMessageTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageTemplateMutation, { data, loading, error }] = useCreateMessageTemplateMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      messageType: // value for 'messageType'
 *      messageTitle: // value for 'messageTitle'
 *      messageBody: // value for 'messageBody'
 *   },
 * });
 */
export function useCreateMessageTemplateMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageTemplateMutation, CreateMessageTemplateMutationVariables>) {
        return Apollo.useMutation<CreateMessageTemplateMutation, CreateMessageTemplateMutationVariables>(CreateMessageTemplateDocument, baseOptions);
      }
export type CreateMessageTemplateMutationHookResult = ReturnType<typeof useCreateMessageTemplateMutation>;
export type CreateMessageTemplateMutationResult = Apollo.MutationResult<CreateMessageTemplateMutation>;
export type CreateMessageTemplateMutationOptions = Apollo.BaseMutationOptions<CreateMessageTemplateMutation, CreateMessageTemplateMutationVariables>;
export const DeleteMessageTemplateDocument = /*#__PURE__*/ gql`
    mutation deleteMessageTemplate($id: Int!, $userId: Int) {
  deleteMessageTemplate(id: $id, userId: $userId)
}
    `;
export type DeleteMessageTemplateMutationFn = Apollo.MutationFunction<DeleteMessageTemplateMutation, DeleteMessageTemplateMutationVariables>;

/**
 * __useDeleteMessageTemplateMutation__
 *
 * To run a mutation, you first call `useDeleteMessageTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMessageTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMessageTemplateMutation, { data, loading, error }] = useDeleteMessageTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteMessageTemplateMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMessageTemplateMutation, DeleteMessageTemplateMutationVariables>) {
        return Apollo.useMutation<DeleteMessageTemplateMutation, DeleteMessageTemplateMutationVariables>(DeleteMessageTemplateDocument, baseOptions);
      }
export type DeleteMessageTemplateMutationHookResult = ReturnType<typeof useDeleteMessageTemplateMutation>;
export type DeleteMessageTemplateMutationResult = Apollo.MutationResult<DeleteMessageTemplateMutation>;
export type DeleteMessageTemplateMutationOptions = Apollo.BaseMutationOptions<DeleteMessageTemplateMutation, DeleteMessageTemplateMutationVariables>;
export const UpdateMessageTemplateDocument = /*#__PURE__*/ gql`
    mutation updateMessageTemplate($id: Int!, $userId: Int, $values: UpdateTemplateMessageValues!) {
  updateMessageTemplate(id: $id, userId: $userId, values: $values) {
    ...MessageTemplateBase
  }
}
    ${MessageTemplateBaseFragmentDoc}`;
export type UpdateMessageTemplateMutationFn = Apollo.MutationFunction<UpdateMessageTemplateMutation, UpdateMessageTemplateMutationVariables>;

/**
 * __useUpdateMessageTemplateMutation__
 *
 * To run a mutation, you first call `useUpdateMessageTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMessageTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMessageTemplateMutation, { data, loading, error }] = useUpdateMessageTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateMessageTemplateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMessageTemplateMutation, UpdateMessageTemplateMutationVariables>) {
        return Apollo.useMutation<UpdateMessageTemplateMutation, UpdateMessageTemplateMutationVariables>(UpdateMessageTemplateDocument, baseOptions);
      }
export type UpdateMessageTemplateMutationHookResult = ReturnType<typeof useUpdateMessageTemplateMutation>;
export type UpdateMessageTemplateMutationResult = Apollo.MutationResult<UpdateMessageTemplateMutation>;
export type UpdateMessageTemplateMutationOptions = Apollo.BaseMutationOptions<UpdateMessageTemplateMutation, UpdateMessageTemplateMutationVariables>;
export const SubscribeToCandidatesSearchDocument = /*#__PURE__*/ gql`
    mutation subscribeToCandidatesSearch($userId: Int, $title: String!, $searchParams: PublicProfilesParameters!) {
  subscribeToCandidatesSearch(userId: $userId, title: $title, searchParams: $searchParams) {
    ...UsersSearchSubscriptionBase
  }
}
    ${UsersSearchSubscriptionBaseFragmentDoc}`;
export type SubscribeToCandidatesSearchMutationFn = Apollo.MutationFunction<SubscribeToCandidatesSearchMutation, SubscribeToCandidatesSearchMutationVariables>;

/**
 * __useSubscribeToCandidatesSearchMutation__
 *
 * To run a mutation, you first call `useSubscribeToCandidatesSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToCandidatesSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeToCandidatesSearchMutation, { data, loading, error }] = useSubscribeToCandidatesSearchMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      title: // value for 'title'
 *      searchParams: // value for 'searchParams'
 *   },
 * });
 */
export function useSubscribeToCandidatesSearchMutation(baseOptions?: Apollo.MutationHookOptions<SubscribeToCandidatesSearchMutation, SubscribeToCandidatesSearchMutationVariables>) {
        return Apollo.useMutation<SubscribeToCandidatesSearchMutation, SubscribeToCandidatesSearchMutationVariables>(SubscribeToCandidatesSearchDocument, baseOptions);
      }
export type SubscribeToCandidatesSearchMutationHookResult = ReturnType<typeof useSubscribeToCandidatesSearchMutation>;
export type SubscribeToCandidatesSearchMutationResult = Apollo.MutationResult<SubscribeToCandidatesSearchMutation>;
export type SubscribeToCandidatesSearchMutationOptions = Apollo.BaseMutationOptions<SubscribeToCandidatesSearchMutation, SubscribeToCandidatesSearchMutationVariables>;
export const UnsubscribeFromCandidatesSearchDocument = /*#__PURE__*/ gql`
    mutation unsubscribeFromCandidatesSearch($id: Int!, $userId: Int!) {
  unsubscribeFromCandidatesSearch(id: $id, userId: $userId)
}
    `;
export type UnsubscribeFromCandidatesSearchMutationFn = Apollo.MutationFunction<UnsubscribeFromCandidatesSearchMutation, UnsubscribeFromCandidatesSearchMutationVariables>;

/**
 * __useUnsubscribeFromCandidatesSearchMutation__
 *
 * To run a mutation, you first call `useUnsubscribeFromCandidatesSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnsubscribeFromCandidatesSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unsubscribeFromCandidatesSearchMutation, { data, loading, error }] = useUnsubscribeFromCandidatesSearchMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUnsubscribeFromCandidatesSearchMutation(baseOptions?: Apollo.MutationHookOptions<UnsubscribeFromCandidatesSearchMutation, UnsubscribeFromCandidatesSearchMutationVariables>) {
        return Apollo.useMutation<UnsubscribeFromCandidatesSearchMutation, UnsubscribeFromCandidatesSearchMutationVariables>(UnsubscribeFromCandidatesSearchDocument, baseOptions);
      }
export type UnsubscribeFromCandidatesSearchMutationHookResult = ReturnType<typeof useUnsubscribeFromCandidatesSearchMutation>;
export type UnsubscribeFromCandidatesSearchMutationResult = Apollo.MutationResult<UnsubscribeFromCandidatesSearchMutation>;
export type UnsubscribeFromCandidatesSearchMutationOptions = Apollo.BaseMutationOptions<UnsubscribeFromCandidatesSearchMutation, UnsubscribeFromCandidatesSearchMutationVariables>;
export const UpdateSubscriptionLastUsedDocument = /*#__PURE__*/ gql`
    mutation updateSubscriptionLastUsed($id: Int!, $userId: Int!) {
  updateSubscriptionLastUsed(id: $id, userId: $userId) {
    ...UsersSearchSubscriptionBase
  }
}
    ${UsersSearchSubscriptionBaseFragmentDoc}`;
export type UpdateSubscriptionLastUsedMutationFn = Apollo.MutationFunction<UpdateSubscriptionLastUsedMutation, UpdateSubscriptionLastUsedMutationVariables>;

/**
 * __useUpdateSubscriptionLastUsedMutation__
 *
 * To run a mutation, you first call `useUpdateSubscriptionLastUsedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubscriptionLastUsedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSubscriptionLastUsedMutation, { data, loading, error }] = useUpdateSubscriptionLastUsedMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUpdateSubscriptionLastUsedMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSubscriptionLastUsedMutation, UpdateSubscriptionLastUsedMutationVariables>) {
        return Apollo.useMutation<UpdateSubscriptionLastUsedMutation, UpdateSubscriptionLastUsedMutationVariables>(UpdateSubscriptionLastUsedDocument, baseOptions);
      }
export type UpdateSubscriptionLastUsedMutationHookResult = ReturnType<typeof useUpdateSubscriptionLastUsedMutation>;
export type UpdateSubscriptionLastUsedMutationResult = Apollo.MutationResult<UpdateSubscriptionLastUsedMutation>;
export type UpdateSubscriptionLastUsedMutationOptions = Apollo.BaseMutationOptions<UpdateSubscriptionLastUsedMutation, UpdateSubscriptionLastUsedMutationVariables>;
export const UpdateSubscriptionTitleDocument = /*#__PURE__*/ gql`
    mutation updateSubscriptionTitle($id: Int!, $userId: Int!, $values: UpdateSubscriptionsTitleValues!) {
  updateSubscriptionTitle(id: $id, userId: $userId, values: $values) {
    ...UsersSearchSubscriptionBase
  }
}
    ${UsersSearchSubscriptionBaseFragmentDoc}`;
export type UpdateSubscriptionTitleMutationFn = Apollo.MutationFunction<UpdateSubscriptionTitleMutation, UpdateSubscriptionTitleMutationVariables>;

/**
 * __useUpdateSubscriptionTitleMutation__
 *
 * To run a mutation, you first call `useUpdateSubscriptionTitleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubscriptionTitleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSubscriptionTitleMutation, { data, loading, error }] = useUpdateSubscriptionTitleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateSubscriptionTitleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSubscriptionTitleMutation, UpdateSubscriptionTitleMutationVariables>) {
        return Apollo.useMutation<UpdateSubscriptionTitleMutation, UpdateSubscriptionTitleMutationVariables>(UpdateSubscriptionTitleDocument, baseOptions);
      }
export type UpdateSubscriptionTitleMutationHookResult = ReturnType<typeof useUpdateSubscriptionTitleMutation>;
export type UpdateSubscriptionTitleMutationResult = Apollo.MutationResult<UpdateSubscriptionTitleMutation>;
export type UpdateSubscriptionTitleMutationOptions = Apollo.BaseMutationOptions<UpdateSubscriptionTitleMutation, UpdateSubscriptionTitleMutationVariables>;
export const UserSearchSubscriptionsByUserIdDocument = /*#__PURE__*/ gql`
    query userSearchSubscriptionsByUserId($userId: Int) {
  userSearchSubscriptionsByUserId(userId: $userId) {
    ...UsersSearchSubscriptionFull
  }
}
    ${UsersSearchSubscriptionFullFragmentDoc}`;

/**
 * __useUserSearchSubscriptionsByUserIdQuery__
 *
 * To run a query within a React component, call `useUserSearchSubscriptionsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSearchSubscriptionsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSearchSubscriptionsByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserSearchSubscriptionsByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<UserSearchSubscriptionsByUserIdQuery, UserSearchSubscriptionsByUserIdQueryVariables>) {
        return Apollo.useQuery<UserSearchSubscriptionsByUserIdQuery, UserSearchSubscriptionsByUserIdQueryVariables>(UserSearchSubscriptionsByUserIdDocument, baseOptions);
      }
export function useUserSearchSubscriptionsByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserSearchSubscriptionsByUserIdQuery, UserSearchSubscriptionsByUserIdQueryVariables>) {
          return Apollo.useLazyQuery<UserSearchSubscriptionsByUserIdQuery, UserSearchSubscriptionsByUserIdQueryVariables>(UserSearchSubscriptionsByUserIdDocument, baseOptions);
        }
export type UserSearchSubscriptionsByUserIdQueryHookResult = ReturnType<typeof useUserSearchSubscriptionsByUserIdQuery>;
export type UserSearchSubscriptionsByUserIdLazyQueryHookResult = ReturnType<typeof useUserSearchSubscriptionsByUserIdLazyQuery>;
export type UserSearchSubscriptionsByUserIdQueryResult = Apollo.QueryResult<UserSearchSubscriptionsByUserIdQuery, UserSearchSubscriptionsByUserIdQueryVariables>;
export const CreateMultipleVacanciesSourcesDocument = /*#__PURE__*/ gql`
    mutation createMultipleVacanciesSources($options: CreateMultipleVacanciesSourcesParameters!) {
  createMultipleVacanciesSources(options: $options)
}
    `;
export type CreateMultipleVacanciesSourcesMutationFn = Apollo.MutationFunction<CreateMultipleVacanciesSourcesMutation, CreateMultipleVacanciesSourcesMutationVariables>;

/**
 * __useCreateMultipleVacanciesSourcesMutation__
 *
 * To run a mutation, you first call `useCreateMultipleVacanciesSourcesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMultipleVacanciesSourcesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMultipleVacanciesSourcesMutation, { data, loading, error }] = useCreateMultipleVacanciesSourcesMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateMultipleVacanciesSourcesMutation(baseOptions?: Apollo.MutationHookOptions<CreateMultipleVacanciesSourcesMutation, CreateMultipleVacanciesSourcesMutationVariables>) {
        return Apollo.useMutation<CreateMultipleVacanciesSourcesMutation, CreateMultipleVacanciesSourcesMutationVariables>(CreateMultipleVacanciesSourcesDocument, baseOptions);
      }
export type CreateMultipleVacanciesSourcesMutationHookResult = ReturnType<typeof useCreateMultipleVacanciesSourcesMutation>;
export type CreateMultipleVacanciesSourcesMutationResult = Apollo.MutationResult<CreateMultipleVacanciesSourcesMutation>;
export type CreateMultipleVacanciesSourcesMutationOptions = Apollo.BaseMutationOptions<CreateMultipleVacanciesSourcesMutation, CreateMultipleVacanciesSourcesMutationVariables>;
export const CreateVacanciesSourceDocument = /*#__PURE__*/ gql`
    mutation createVacanciesSource($atsId: String!, $type: VacancySourceType!) {
  createVacanciesSource(atsId: $atsId, type: $type) {
    ...VacanciesSourceBase
  }
}
    ${VacanciesSourceBaseFragmentDoc}`;
export type CreateVacanciesSourceMutationFn = Apollo.MutationFunction<CreateVacanciesSourceMutation, CreateVacanciesSourceMutationVariables>;

/**
 * __useCreateVacanciesSourceMutation__
 *
 * To run a mutation, you first call `useCreateVacanciesSourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVacanciesSourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVacanciesSourceMutation, { data, loading, error }] = useCreateVacanciesSourceMutation({
 *   variables: {
 *      atsId: // value for 'atsId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateVacanciesSourceMutation(baseOptions?: Apollo.MutationHookOptions<CreateVacanciesSourceMutation, CreateVacanciesSourceMutationVariables>) {
        return Apollo.useMutation<CreateVacanciesSourceMutation, CreateVacanciesSourceMutationVariables>(CreateVacanciesSourceDocument, baseOptions);
      }
export type CreateVacanciesSourceMutationHookResult = ReturnType<typeof useCreateVacanciesSourceMutation>;
export type CreateVacanciesSourceMutationResult = Apollo.MutationResult<CreateVacanciesSourceMutation>;
export type CreateVacanciesSourceMutationOptions = Apollo.BaseMutationOptions<CreateVacanciesSourceMutation, CreateVacanciesSourceMutationVariables>;
export const AddVacanciesLogoDocument = /*#__PURE__*/ gql`
    mutation addVacanciesLogo($companyNames: [String!]) {
  addVacanciesLogo(companyNames: $companyNames)
}
    `;
export type AddVacanciesLogoMutationFn = Apollo.MutationFunction<AddVacanciesLogoMutation, AddVacanciesLogoMutationVariables>;

/**
 * __useAddVacanciesLogoMutation__
 *
 * To run a mutation, you first call `useAddVacanciesLogoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddVacanciesLogoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addVacanciesLogoMutation, { data, loading, error }] = useAddVacanciesLogoMutation({
 *   variables: {
 *      companyNames: // value for 'companyNames'
 *   },
 * });
 */
export function useAddVacanciesLogoMutation(baseOptions?: Apollo.MutationHookOptions<AddVacanciesLogoMutation, AddVacanciesLogoMutationVariables>) {
        return Apollo.useMutation<AddVacanciesLogoMutation, AddVacanciesLogoMutationVariables>(AddVacanciesLogoDocument, baseOptions);
      }
export type AddVacanciesLogoMutationHookResult = ReturnType<typeof useAddVacanciesLogoMutation>;
export type AddVacanciesLogoMutationResult = Apollo.MutationResult<AddVacanciesLogoMutation>;
export type AddVacanciesLogoMutationOptions = Apollo.BaseMutationOptions<AddVacanciesLogoMutation, AddVacanciesLogoMutationVariables>;
export const HotVacanciesDocument = /*#__PURE__*/ gql`
    query hotVacancies {
  hotVacancies {
    ...VacancyBase
    ...VacancyEnglishLevel
    ...VacancyJobExperience
    ...VacancySpecializations
    ...CompanyLogo
  }
}
    ${VacancyBaseFragmentDoc}
${VacancyEnglishLevelFragmentDoc}
${VacancyJobExperienceFragmentDoc}
${VacancySpecializationsFragmentDoc}
${CompanyLogoFragmentDoc}`;

/**
 * __useHotVacanciesQuery__
 *
 * To run a query within a React component, call `useHotVacanciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHotVacanciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHotVacanciesQuery({
 *   variables: {
 *   },
 * });
 */
export function useHotVacanciesQuery(baseOptions?: Apollo.QueryHookOptions<HotVacanciesQuery, HotVacanciesQueryVariables>) {
        return Apollo.useQuery<HotVacanciesQuery, HotVacanciesQueryVariables>(HotVacanciesDocument, baseOptions);
      }
export function useHotVacanciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HotVacanciesQuery, HotVacanciesQueryVariables>) {
          return Apollo.useLazyQuery<HotVacanciesQuery, HotVacanciesQueryVariables>(HotVacanciesDocument, baseOptions);
        }
export type HotVacanciesQueryHookResult = ReturnType<typeof useHotVacanciesQuery>;
export type HotVacanciesLazyQueryHookResult = ReturnType<typeof useHotVacanciesLazyQuery>;
export type HotVacanciesQueryResult = Apollo.QueryResult<HotVacanciesQuery, HotVacanciesQueryVariables>;
export const SalariesDataByCategoryDocument = /*#__PURE__*/ gql`
    query salariesDataByCategory($keywords: [String!]) {
  salariesDataByCategory(keywords: $keywords) {
    maxSalary
    averageMinSalary
    averageSalary
  }
}
    `;

/**
 * __useSalariesDataByCategoryQuery__
 *
 * To run a query within a React component, call `useSalariesDataByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSalariesDataByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSalariesDataByCategoryQuery({
 *   variables: {
 *      keywords: // value for 'keywords'
 *   },
 * });
 */
export function useSalariesDataByCategoryQuery(baseOptions?: Apollo.QueryHookOptions<SalariesDataByCategoryQuery, SalariesDataByCategoryQueryVariables>) {
        return Apollo.useQuery<SalariesDataByCategoryQuery, SalariesDataByCategoryQueryVariables>(SalariesDataByCategoryDocument, baseOptions);
      }
export function useSalariesDataByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SalariesDataByCategoryQuery, SalariesDataByCategoryQueryVariables>) {
          return Apollo.useLazyQuery<SalariesDataByCategoryQuery, SalariesDataByCategoryQueryVariables>(SalariesDataByCategoryDocument, baseOptions);
        }
export type SalariesDataByCategoryQueryHookResult = ReturnType<typeof useSalariesDataByCategoryQuery>;
export type SalariesDataByCategoryLazyQueryHookResult = ReturnType<typeof useSalariesDataByCategoryLazyQuery>;
export type SalariesDataByCategoryQueryResult = Apollo.QueryResult<SalariesDataByCategoryQuery, SalariesDataByCategoryQueryVariables>;
export const SendNewVacancyApplicationDocument = /*#__PURE__*/ gql`
    mutation sendNewVacancyApplication($companyName: String!, $jobTitle: String!) {
  sendNewVacancyApplication(companyName: $companyName, jobTitle: $jobTitle)
}
    `;
export type SendNewVacancyApplicationMutationFn = Apollo.MutationFunction<SendNewVacancyApplicationMutation, SendNewVacancyApplicationMutationVariables>;

/**
 * __useSendNewVacancyApplicationMutation__
 *
 * To run a mutation, you first call `useSendNewVacancyApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendNewVacancyApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendNewVacancyApplicationMutation, { data, loading, error }] = useSendNewVacancyApplicationMutation({
 *   variables: {
 *      companyName: // value for 'companyName'
 *      jobTitle: // value for 'jobTitle'
 *   },
 * });
 */
export function useSendNewVacancyApplicationMutation(baseOptions?: Apollo.MutationHookOptions<SendNewVacancyApplicationMutation, SendNewVacancyApplicationMutationVariables>) {
        return Apollo.useMutation<SendNewVacancyApplicationMutation, SendNewVacancyApplicationMutationVariables>(SendNewVacancyApplicationDocument, baseOptions);
      }
export type SendNewVacancyApplicationMutationHookResult = ReturnType<typeof useSendNewVacancyApplicationMutation>;
export type SendNewVacancyApplicationMutationResult = Apollo.MutationResult<SendNewVacancyApplicationMutation>;
export type SendNewVacancyApplicationMutationOptions = Apollo.BaseMutationOptions<SendNewVacancyApplicationMutation, SendNewVacancyApplicationMutationVariables>;
export const SendNewVacancyRequestDocument = /*#__PURE__*/ gql`
    mutation sendNewVacancyRequest($vacancyLink: String!, $contactEmail: String!) {
  sendNewVacancyRequest(vacancyLink: $vacancyLink, contactEmail: $contactEmail)
}
    `;
export type SendNewVacancyRequestMutationFn = Apollo.MutationFunction<SendNewVacancyRequestMutation, SendNewVacancyRequestMutationVariables>;

/**
 * __useSendNewVacancyRequestMutation__
 *
 * To run a mutation, you first call `useSendNewVacancyRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendNewVacancyRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendNewVacancyRequestMutation, { data, loading, error }] = useSendNewVacancyRequestMutation({
 *   variables: {
 *      vacancyLink: // value for 'vacancyLink'
 *      contactEmail: // value for 'contactEmail'
 *   },
 * });
 */
export function useSendNewVacancyRequestMutation(baseOptions?: Apollo.MutationHookOptions<SendNewVacancyRequestMutation, SendNewVacancyRequestMutationVariables>) {
        return Apollo.useMutation<SendNewVacancyRequestMutation, SendNewVacancyRequestMutationVariables>(SendNewVacancyRequestDocument, baseOptions);
      }
export type SendNewVacancyRequestMutationHookResult = ReturnType<typeof useSendNewVacancyRequestMutation>;
export type SendNewVacancyRequestMutationResult = Apollo.MutationResult<SendNewVacancyRequestMutation>;
export type SendNewVacancyRequestMutationOptions = Apollo.BaseMutationOptions<SendNewVacancyRequestMutation, SendNewVacancyRequestMutationVariables>;
export const VacanciesDocument = /*#__PURE__*/ gql`
    query vacancies($options: VacanciesParameters, $offset: Int) {
  vacancies(options: $options, offset: $offset) {
    rows {
      ...VacancyFull
    }
    hasMore
  }
}
    ${VacancyFullFragmentDoc}`;

/**
 * __useVacanciesQuery__
 *
 * To run a query within a React component, call `useVacanciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useVacanciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVacanciesQuery({
 *   variables: {
 *      options: // value for 'options'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useVacanciesQuery(baseOptions?: Apollo.QueryHookOptions<VacanciesQuery, VacanciesQueryVariables>) {
        return Apollo.useQuery<VacanciesQuery, VacanciesQueryVariables>(VacanciesDocument, baseOptions);
      }
export function useVacanciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VacanciesQuery, VacanciesQueryVariables>) {
          return Apollo.useLazyQuery<VacanciesQuery, VacanciesQueryVariables>(VacanciesDocument, baseOptions);
        }
export type VacanciesQueryHookResult = ReturnType<typeof useVacanciesQuery>;
export type VacanciesLazyQueryHookResult = ReturnType<typeof useVacanciesLazyQuery>;
export type VacanciesQueryResult = Apollo.QueryResult<VacanciesQuery, VacanciesQueryVariables>;
export const VacanciesByCompanyDocument = /*#__PURE__*/ gql`
    query vacanciesByCompany($options: VacanciesByCompanyParameters) {
  vacanciesByCompany(options: $options) {
    ...VacancyFull
  }
}
    ${VacancyFullFragmentDoc}`;

/**
 * __useVacanciesByCompanyQuery__
 *
 * To run a query within a React component, call `useVacanciesByCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useVacanciesByCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVacanciesByCompanyQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useVacanciesByCompanyQuery(baseOptions?: Apollo.QueryHookOptions<VacanciesByCompanyQuery, VacanciesByCompanyQueryVariables>) {
        return Apollo.useQuery<VacanciesByCompanyQuery, VacanciesByCompanyQueryVariables>(VacanciesByCompanyDocument, baseOptions);
      }
export function useVacanciesByCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VacanciesByCompanyQuery, VacanciesByCompanyQueryVariables>) {
          return Apollo.useLazyQuery<VacanciesByCompanyQuery, VacanciesByCompanyQueryVariables>(VacanciesByCompanyDocument, baseOptions);
        }
export type VacanciesByCompanyQueryHookResult = ReturnType<typeof useVacanciesByCompanyQuery>;
export type VacanciesByCompanyLazyQueryHookResult = ReturnType<typeof useVacanciesByCompanyLazyQuery>;
export type VacanciesByCompanyQueryResult = Apollo.QueryResult<VacanciesByCompanyQuery, VacanciesByCompanyQueryVariables>;
export const CreateWorkPlaceDocument = /*#__PURE__*/ gql`
    mutation createWorkPlace($candidateProfileId: Int!, $companyName: String!, $companyUrl: String, $companySizeFrom: Int, $companySizeTo: Int, $companyIndustry: String, $companyCategories: String, $companySpecialities: String, $companyFundingType: String, $title: String!, $description: String, $startDate: String!, $endDate: String) {
  createWorkPlace(candidateProfileId: $candidateProfileId, companyName: $companyName, companyUrl: $companyUrl, companySizeFrom: $companySizeFrom, companySizeTo: $companySizeTo, companyIndustry: $companyIndustry, companyCategories: $companyCategories, companySpecialities: $companySpecialities, companyFundingType: $companyFundingType, title: $title, description: $description, startDate: $startDate, endDate: $endDate) {
    ...WorkPlaceFull
  }
}
    ${WorkPlaceFullFragmentDoc}`;
export type CreateWorkPlaceMutationFn = Apollo.MutationFunction<CreateWorkPlaceMutation, CreateWorkPlaceMutationVariables>;

/**
 * __useCreateWorkPlaceMutation__
 *
 * To run a mutation, you first call `useCreateWorkPlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkPlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkPlaceMutation, { data, loading, error }] = useCreateWorkPlaceMutation({
 *   variables: {
 *      candidateProfileId: // value for 'candidateProfileId'
 *      companyName: // value for 'companyName'
 *      companyUrl: // value for 'companyUrl'
 *      companySizeFrom: // value for 'companySizeFrom'
 *      companySizeTo: // value for 'companySizeTo'
 *      companyIndustry: // value for 'companyIndustry'
 *      companyCategories: // value for 'companyCategories'
 *      companySpecialities: // value for 'companySpecialities'
 *      companyFundingType: // value for 'companyFundingType'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useCreateWorkPlaceMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkPlaceMutation, CreateWorkPlaceMutationVariables>) {
        return Apollo.useMutation<CreateWorkPlaceMutation, CreateWorkPlaceMutationVariables>(CreateWorkPlaceDocument, baseOptions);
      }
export type CreateWorkPlaceMutationHookResult = ReturnType<typeof useCreateWorkPlaceMutation>;
export type CreateWorkPlaceMutationResult = Apollo.MutationResult<CreateWorkPlaceMutation>;
export type CreateWorkPlaceMutationOptions = Apollo.BaseMutationOptions<CreateWorkPlaceMutation, CreateWorkPlaceMutationVariables>;
export const DeleteWorkPlaceDocument = /*#__PURE__*/ gql`
    mutation deleteWorkPlace($id: Int!) {
  deleteWorkPlace(id: $id)
}
    `;
export type DeleteWorkPlaceMutationFn = Apollo.MutationFunction<DeleteWorkPlaceMutation, DeleteWorkPlaceMutationVariables>;

/**
 * __useDeleteWorkPlaceMutation__
 *
 * To run a mutation, you first call `useDeleteWorkPlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkPlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkPlaceMutation, { data, loading, error }] = useDeleteWorkPlaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteWorkPlaceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkPlaceMutation, DeleteWorkPlaceMutationVariables>) {
        return Apollo.useMutation<DeleteWorkPlaceMutation, DeleteWorkPlaceMutationVariables>(DeleteWorkPlaceDocument, baseOptions);
      }
export type DeleteWorkPlaceMutationHookResult = ReturnType<typeof useDeleteWorkPlaceMutation>;
export type DeleteWorkPlaceMutationResult = Apollo.MutationResult<DeleteWorkPlaceMutation>;
export type DeleteWorkPlaceMutationOptions = Apollo.BaseMutationOptions<DeleteWorkPlaceMutation, DeleteWorkPlaceMutationVariables>;
export const FetchWorkPlacesDocument = /*#__PURE__*/ gql`
    mutation fetchWorkPlaces($linkedinUrl: String!, $candidateProfileId: Int!, $liveScrape: Boolean) {
  fetchWorkPlaces(linkedinUrl: $linkedinUrl, candidateProfileId: $candidateProfileId, liveScrape: $liveScrape) {
    ...WorkPlaceFull
  }
}
    ${WorkPlaceFullFragmentDoc}`;
export type FetchWorkPlacesMutationFn = Apollo.MutationFunction<FetchWorkPlacesMutation, FetchWorkPlacesMutationVariables>;

/**
 * __useFetchWorkPlacesMutation__
 *
 * To run a mutation, you first call `useFetchWorkPlacesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFetchWorkPlacesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fetchWorkPlacesMutation, { data, loading, error }] = useFetchWorkPlacesMutation({
 *   variables: {
 *      linkedinUrl: // value for 'linkedinUrl'
 *      candidateProfileId: // value for 'candidateProfileId'
 *      liveScrape: // value for 'liveScrape'
 *   },
 * });
 */
export function useFetchWorkPlacesMutation(baseOptions?: Apollo.MutationHookOptions<FetchWorkPlacesMutation, FetchWorkPlacesMutationVariables>) {
        return Apollo.useMutation<FetchWorkPlacesMutation, FetchWorkPlacesMutationVariables>(FetchWorkPlacesDocument, baseOptions);
      }
export type FetchWorkPlacesMutationHookResult = ReturnType<typeof useFetchWorkPlacesMutation>;
export type FetchWorkPlacesMutationResult = Apollo.MutationResult<FetchWorkPlacesMutation>;
export type FetchWorkPlacesMutationOptions = Apollo.BaseMutationOptions<FetchWorkPlacesMutation, FetchWorkPlacesMutationVariables>;
export const UpdateWorkPlaceDocument = /*#__PURE__*/ gql`
    mutation updateWorkPlace($id: Int!, $companyName: String!, $companyUrl: String, $companySizeFrom: Int, $companySizeTo: Int, $companyIndustry: String, $companyCategories: String, $companySpecialities: String, $companyFundingType: String, $title: String, $description: String, $startDate: String, $endDate: String) {
  updateWorkPlace(id: $id, companyName: $companyName, companyUrl: $companyUrl, companySizeFrom: $companySizeFrom, companySizeTo: $companySizeTo, companyIndustry: $companyIndustry, companyCategories: $companyCategories, companySpecialities: $companySpecialities, companyFundingType: $companyFundingType, title: $title, description: $description, startDate: $startDate, endDate: $endDate) {
    ...WorkPlaceFull
  }
}
    ${WorkPlaceFullFragmentDoc}`;
export type UpdateWorkPlaceMutationFn = Apollo.MutationFunction<UpdateWorkPlaceMutation, UpdateWorkPlaceMutationVariables>;

/**
 * __useUpdateWorkPlaceMutation__
 *
 * To run a mutation, you first call `useUpdateWorkPlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkPlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkPlaceMutation, { data, loading, error }] = useUpdateWorkPlaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      companyName: // value for 'companyName'
 *      companyUrl: // value for 'companyUrl'
 *      companySizeFrom: // value for 'companySizeFrom'
 *      companySizeTo: // value for 'companySizeTo'
 *      companyIndustry: // value for 'companyIndustry'
 *      companyCategories: // value for 'companyCategories'
 *      companySpecialities: // value for 'companySpecialities'
 *      companyFundingType: // value for 'companyFundingType'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useUpdateWorkPlaceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkPlaceMutation, UpdateWorkPlaceMutationVariables>) {
        return Apollo.useMutation<UpdateWorkPlaceMutation, UpdateWorkPlaceMutationVariables>(UpdateWorkPlaceDocument, baseOptions);
      }
export type UpdateWorkPlaceMutationHookResult = ReturnType<typeof useUpdateWorkPlaceMutation>;
export type UpdateWorkPlaceMutationResult = Apollo.MutationResult<UpdateWorkPlaceMutation>;
export type UpdateWorkPlaceMutationOptions = Apollo.BaseMutationOptions<UpdateWorkPlaceMutation, UpdateWorkPlaceMutationVariables>;
export const DeleteMessageDocument = /*#__PURE__*/ gql`
    mutation deleteMessage($id: Int!) {
  deleteMessage(id: $id) @client
}
    `;
export type DeleteMessageMutationFn = Apollo.MutationFunction<DeleteMessageMutation, DeleteMessageMutationVariables>;

/**
 * __useDeleteMessageMutation__
 *
 * To run a mutation, you first call `useDeleteMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMessageMutation, { data, loading, error }] = useDeleteMessageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMessageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMessageMutation, DeleteMessageMutationVariables>) {
        return Apollo.useMutation<DeleteMessageMutation, DeleteMessageMutationVariables>(DeleteMessageDocument, baseOptions);
      }
export type DeleteMessageMutationHookResult = ReturnType<typeof useDeleteMessageMutation>;
export type DeleteMessageMutationResult = Apollo.MutationResult<DeleteMessageMutation>;
export type DeleteMessageMutationOptions = Apollo.BaseMutationOptions<DeleteMessageMutation, DeleteMessageMutationVariables>;
export const PostMessageDocument = /*#__PURE__*/ gql`
    mutation postMessage($type: FlashMessageType!, $heading: String!, $text: String!, $cta: CtaInput) {
  postMessage(type: $type, heading: $heading, text: $text, cta: $cta) @client
}
    `;
export type PostMessageMutationFn = Apollo.MutationFunction<PostMessageMutation, PostMessageMutationVariables>;

/**
 * __usePostMessageMutation__
 *
 * To run a mutation, you first call `usePostMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postMessageMutation, { data, loading, error }] = usePostMessageMutation({
 *   variables: {
 *      type: // value for 'type'
 *      heading: // value for 'heading'
 *      text: // value for 'text'
 *      cta: // value for 'cta'
 *   },
 * });
 */
export function usePostMessageMutation(baseOptions?: Apollo.MutationHookOptions<PostMessageMutation, PostMessageMutationVariables>) {
        return Apollo.useMutation<PostMessageMutation, PostMessageMutationVariables>(PostMessageDocument, baseOptions);
      }
export type PostMessageMutationHookResult = ReturnType<typeof usePostMessageMutation>;
export type PostMessageMutationResult = Apollo.MutationResult<PostMessageMutation>;
export type PostMessageMutationOptions = Apollo.BaseMutationOptions<PostMessageMutation, PostMessageMutationVariables>;
export const VisibleMessagesDocument = /*#__PURE__*/ gql`
    query visibleMessages {
  visibleMessages @client {
    id
    type
    heading
    text
    cta {
      title
      link
    }
  }
}
    `;

/**
 * __useVisibleMessagesQuery__
 *
 * To run a query within a React component, call `useVisibleMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useVisibleMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVisibleMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useVisibleMessagesQuery(baseOptions?: Apollo.QueryHookOptions<VisibleMessagesQuery, VisibleMessagesQueryVariables>) {
        return Apollo.useQuery<VisibleMessagesQuery, VisibleMessagesQueryVariables>(VisibleMessagesDocument, baseOptions);
      }
export function useVisibleMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VisibleMessagesQuery, VisibleMessagesQueryVariables>) {
          return Apollo.useLazyQuery<VisibleMessagesQuery, VisibleMessagesQueryVariables>(VisibleMessagesDocument, baseOptions);
        }
export type VisibleMessagesQueryHookResult = ReturnType<typeof useVisibleMessagesQuery>;
export type VisibleMessagesLazyQueryHookResult = ReturnType<typeof useVisibleMessagesLazyQuery>;
export type VisibleMessagesQueryResult = Apollo.QueryResult<VisibleMessagesQuery, VisibleMessagesQueryVariables>;