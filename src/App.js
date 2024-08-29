import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidemenu from "./components/Sidemenu";
import Workarea from "./components/Workarea";
import NavbarSection from "./components/PrivyLogin/NarbarSection";
import ParticlesComponent from "./components/particles/Particles";
import ProtectedRoute from "./auth/ProtectedRoute";
import { usePrivy } from "@privy-io/react-auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css";

function App() {
  const { authenticated } = usePrivy();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (authenticated) {
      navigate('/user');
    }
  }, [authenticated, navigate]);

  useEffect(() => {
    // No need to toggle classes or additional styling based on routes
  }, [location.pathname]);

  return (
    <React.Fragment>
      <ParticlesComponent />

      {/* Conditionally render NavbarSection based on authentication */}
      {!authenticated && <NavbarSection />}

      <Routes>
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <Header />
              <Sidemenu />
              <Workarea />
            </ProtectedRoute>
          }
        />
        {/* Other routes can be added here */}
      </Routes>
    </React.Fragment>
  );
}

// Wrap the App component inside the Router
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
