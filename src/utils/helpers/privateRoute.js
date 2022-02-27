import React from 'react';
import { Navigate } from "react-router-dom";
import { isAuthenticated } from './auth';

export const PrivateRoute = ({ children}) => {
  if (isAuthenticated ) {
    return children
  }

  return <Navigate to="/login" />
};
