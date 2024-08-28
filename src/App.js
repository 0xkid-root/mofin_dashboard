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

    if (location.pathname === '/user') {
      document.body.classList.add('user-route');
    } else {
      document.body.classList.remove('user-route');
    }
  }, [location.pathname]);

  return (
    <React.Fragment>
      {!authenticated && location.pathname !== '/user' && (
        <>
          <ParticlesComponent />
          <NavbarSection />
        </>
      )}

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
