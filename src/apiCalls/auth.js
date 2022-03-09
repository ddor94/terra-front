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

export const loginUser = gql`
  mutation loginUser(
    $email: String!
    $password: String!
  ) {
    loginUser(input: {
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

export const logoutUser = gql`
  mutation logoutUser {
    logoutUser(input: {}) {
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

export const getCurrentUser = gql`
  query {
    currentUser {
      user {
        id
        userName
        email
      }
      success
      errors
    }
  }
`;
