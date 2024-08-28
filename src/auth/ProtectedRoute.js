import React from 'react';
import { Navigate } from 'react-router-dom';
import { usePrivy } from '@privy-io/react-auth';
import ParticlesComponent from "../components/particles/Particles";


const ProtectedRoute = ({ children }) => {
  const { ready, authenticated } = usePrivy();

  if (!ready) {
    return;
  }

  return authenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
