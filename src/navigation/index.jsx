import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardPage from "../pages/DashboardPage";
import ProfilePage from "../pages/ProfilePage";

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

const Navigation = () => {
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
      <Route path="/register" element={<DefaultLayout><Register /></DefaultLayout>} />
      <Route path="/dashboard" element={<DashboardLayout><DashboardPage /></DashboardLayout>} />
      <Route path="/profile" element={<DashboardLayout><ProfilePage /></DashboardLayout>} />
    </Routes>
  );
};

export default Navigation;

