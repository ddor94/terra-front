import { gql } from "@apollo/client";

export const listCities = gql`
  query listCities(
    $uf: String!
  ) {
    listCities(input: { uf: $uf }) {
      cities {
        id
        name
        ibgeCode
        uf
      }
      success
      errors
    }
  }
`;
