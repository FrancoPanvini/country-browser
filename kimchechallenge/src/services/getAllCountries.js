import { gql } from "apollo-boost";

export const GET_COUNTRIES_BY_CONTINENT = gql`
  query {
    continents {
      code
      name
      countries {
        code
        name
        emoji
        native
        phone
        capital
        currency
        emojiU
      }
    }
  }
`;
