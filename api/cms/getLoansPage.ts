import gql from 'graphql-tag';
import {
  HERO_FIELDS_FRAGMENT,
  IMAGE_FIELDS_FRAGMENT,
  SEO_FIELDS_FRAGMENT,
} from '~/api/cms/fragments';
import graphqlFetcher from '~/api/graphqlFetcher';
import { CMSLoans } from '~/types/Models/CMSLoans';

const getLoansPage = async (): Promise<CMSLoans> => {
  const response = await graphqlFetcher<{ page: CMSLoans }>(gql`
    ${IMAGE_FIELDS_FRAGMENT}
    ${SEO_FIELDS_FRAGMENT}
    ${HERO_FIELDS_FRAGMENT}
    query LoanPage {
      page: loan {
        seo {
          ...SeoFields
        }
        whatsapps {
          id
          name
          number
        }
        hero {
          ...HeroFields
        }
        bank {
          bankName
          number
          clabe
        }
        payment {
          title
          description
          image {
            ...ImageFields
          }
        }
        faqs {
          id
          question
          section {
            slug
          }
        }
      }
    }
  `);
  return response?.page;
};

export default getLoansPage;
