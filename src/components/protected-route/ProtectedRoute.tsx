import { useAuth } from '@/context/auth/auth.context';
import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    state: { user },
  } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};
