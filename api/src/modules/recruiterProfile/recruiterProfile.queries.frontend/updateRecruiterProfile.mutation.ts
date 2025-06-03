import gql from 'graphql-tag';
import { RECRUITER_PROFILE_BASE_FRAGMENT } from '@/modules/recruiterProfile/recruiterProfile.fragments.frontend/recruiterProfileBase.fragment';

export const UPDATE_RECRUITER_PROFILE_MUTATION = gql`
  mutation updateRecruiterProfile(
    $position: String
    $companyName: String
    $city: String
  ) {
    updateRecruiterProfile(
      position: $position
      companyName: $companyName
      city: $city
    ) {
      ...RecruiterProfileBase
    }
  }
  ${RECRUITER_PROFILE_BASE_FRAGMENT}
`;
