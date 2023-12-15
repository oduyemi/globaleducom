import React from "react";
import { Dashboard } from "../../views/pages/Dashboard";
import { FooterBottom } from "../../components/FooterBottom";
import useAuth from "../../useAuth";


const DashboardPage = () => {
  const { userId } = useAuth();
  
  return (
    <>
      <Dashboard userId={userId} />
      <FooterBottom />
    </>
  );
};

export default DashboardPage;