import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { getCookie, clearCookie } from '../CookieUtils'; // Import clearCookie
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardPage from "../pages/DashboardPage";
import ProfilePage from "../pages/ProfilePage";
import { useQueryClient } from 'react-query';

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
  const navigate = useNavigate(); // Use navigate hook
  const userId = getCookie('userId');

  if (userId) {
    clearCookie('userId');
    navigate('/login'); // Redirect to login page after logout
  }
};

const Navigation = () => {
  useEffect(() => {
    const userId = getCookie('userId');
    if (userId) {
      console.log('User is logged in. UserId:', userId);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </DefaultLayout>
        }
      />
      <Route path="/login" element={<DefaultLayout><Login /></DefaultLayout>} />
      <Route path="/logout" element={<DefaultLayout><Logout /></DefaultLayout>} />
      <Route path="/register" element={<DefaultLayout><Register /></DefaultLayout>} />
      <Route path="/dashboard" element={<DashboardLayout><DashboardPage /></DashboardLayout>} />
      <Route path="/profile" element={<DashboardLayout><ProfilePage /></DashboardLayout>} />
    </Routes>
  );
};

export default Navigation;
