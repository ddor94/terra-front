import { gql } from "@apollo/client";

export const registerUser = gql`
  mutation registerUser(
    $userName: String!
    $email: String!
    $password: String!
  ) {
    registerUser(input: {
      userName: $userName,
      email: $email,
      password: $password,
    }) {
      user {
        id
        userName
        email
        authenticationToken
      }
      success
      errors
    }
  }
`;
