import gql from 'graphql-tag';

export const RecruiterProfileSchema = gql`
  extend type Subscription {
    recruiterProfileStatusUpdated: RecruiterProfile!
  }

  extend type Query {
    latestRecruiterProfile: RecruiterProfile
    latestRecruiterProfileByUserId(userId: Int): RecruiterProfile
    publicRecruiterProfiles: [RecruiterProfile!]!
    recruiterProfileBySlug(slug: String!): RecruiterProfile
  }

  extend type Mutation {
    updateStatusesNotificationTime(profileIds: [Int!]!): Boolean!

    createRecruiterProfile(
      userId: Int!
      position: String!
      companyName: String!
      city: String
    ): RecruiterProfile!

    updateRecruiterProfile(
      position: String
      companyName: String
      city: String
    ): RecruiterProfile!

    sendRecruiterProfileToReview: RecruiterProfile!
    reviewRecruiterProfile(
      id: Int!
      status: RecruiterProfileStatus!
      rejectReason: String
    ): RecruiterProfile!

    deactivateRecruiterProfiles: Boolean!
    bulkSendMessage(
      recruiterProfileId: Int!
      candidateProfileIds: [Int!]!
      message: String!
    ): Boolean!
    bulkReportOfferStatus(
      values: [ReportOfferStatusValues!]!
    ): Boolean!
  }

  enum RecruiterProfileStatus {
    DRAFT
    ON_REVIEW
    REJECTED
    ACTIVE
    INACTIVE
  }

  type RecruiterProfile {
    id: Int!
    slug: String
    status: RecruiterProfileStatus!
    rejectReason: String
    position: String
    city: String
    companyName: String
    user: User
    lastActionTime: GraphQLDateTime
    statusesNotificationSentAt: GraphQLDateTime
    activeConnectionWithCandidate(candidateProfileId: Int!): ProfileConnection
  }

  input ReportOfferStatusValues {
    profileConnectionId: Int!
    status: OfferStatus!
  }
`;
