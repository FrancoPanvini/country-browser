import { gql } from "apollo-boost";

export const GET_COUNTRIES_BY_CONTINENT = gql`
  query {
    continents {
      name
      countries {
        code
        name
        emoji
        native
        phone
        capital
      }
    }
  }
`;

export const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
      native
      phone
      capital
      languages {
        name
      }
    }
  }
`;
