import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Sidemenu from "./components/Sidemenu";
import Workarea from "./components/Workarea";
import NavbarSection from "./components/PrivyLogin/NarbarSection";
import ParticlesComponent from "./components/particles/Particles";
import ProtectedRoute from "./auth/ProtectedRoute";
import { usePrivy } from "@privy-io/react-auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css";
import MarketSection from "./components/Pages/MarketSection";
import WalletSection from "./components/Pages/WalletSection";
import StackingSection from "./components/Pages/StackingSection";
import LoansSection from "./components/Pages/LoansSection";
import ProfileSection from "./components/Pages/ProfileSection";

import LoadingComponent from './components/LoadingPage/LoadingComponent'
function App() {
  const { ready, authenticated } = usePrivy();
  const [loading,setLoading]= useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (authenticated && location.pathname === "/") {
      navigate("/user", { replace: true });
    }
  }, [authenticated, navigate, location.pathname]);

  if (!ready) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <ParticlesComponent />
        <LoadingComponent/>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ParticlesComponent />
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
        <Route
          path="/market"
          element={
            <ProtectedRoute>
              <Header />
              <Sidemenu />
              <MarketSection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wallet"
          element={
            <ProtectedRoute>
              <Header />
              <Sidemenu />
              <WalletSection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stacking"
          element={
            <ProtectedRoute>
              <Header />
              <Sidemenu />
              <StackingSection />
            </ProtectedRoute>
          }
        />

        <Route
          path="/loans"
          element={
            <ProtectedRoute>
              <Header />
              <Sidemenu />
              <LoansSection/>
            </ProtectedRoute>
          }
        />

        <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Header />
            <Sidemenu />
            <ProfileSection/>
          </ProtectedRoute>
        }
      />

      </Routes>
    </React.Fragment>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
