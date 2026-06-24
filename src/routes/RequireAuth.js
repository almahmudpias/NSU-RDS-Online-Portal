// components/RequireAuth.js
import React from 'react';
import { Navigate } from 'react-router-dom';

// Dummy auth check function — replace with real one
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // or however you're storing login status
};

const RequireAuth = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RequireAuth;
