import gql from "graphql-tag";

export const GET_ALL_CHARACTERS_QUERY = gql`
  query GetAllCharacters {
    characters {
      results {
        name
        status
        image
      }
    }
  }
`;
