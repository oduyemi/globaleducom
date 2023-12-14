import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { getCookie, clearCookie } from '../CookieUtils'; // Import clearCookie
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardPage from "../pages/DashboardPage";
import ProfilePage from "../pages/ProfilePage";
import { useQueryClient } from 'react-query';
import SessionProvider from "../SessionProvider";
import { Navigate } from "react-router-dom";





const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

const DashboardLayout = ({ children }) => (
  <>
    {/* Header is not included in the Dashboard layout */}
    {children}
  </>
);

const Logout = () => {
  const userId = getCookie('userId');

  useEffect(() => {
    const logoutUser = async () => {
      try {
        if (userId) {
          await clearCookie('userId');
          window.location.href = "/";
        }

      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    logoutUser();
  }, [userId]);

  return <Navigate to="/" />;
};




const Navigation = () => {
  const userId = getCookie('userId');

  useEffect(() => {
    if (userId) {
      console.log('User is logged in. UserId:', userId);
    }
  }, [userId]);

  return (
    <Routes>
      <Route
        index
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route path="/login" element={<DefaultLayout><Login /></DefaultLayout>} />
      <Route path="/logout" element={<DefaultLayout><Logout /></DefaultLayout>} />
      <Route path="/register" element={<DefaultLayout><Register /></DefaultLayout>} />
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <SessionProvider user={userId}>
              <DashboardPage />
            </SessionProvider>
          </DashboardLayout>
        }
      />

      <Route path="/profile" element={<DashboardLayout><ProfilePage /></DashboardLayout>} />
    </Routes>
  );
};

export default Navigation;
