import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ isAuthenticated, role, children }) => {
  return isAuthenticated && role === 'admin' ? children : <Navigate to="/login" />;
};

export default AdminRoute;
