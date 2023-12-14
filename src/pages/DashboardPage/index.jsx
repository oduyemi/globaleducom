import React from "react";
import { Dashboard } from "../../views/pages/Dashboard";
import { Typography } from "@mui/material";
import { useQuery } from "react-query";
import loginUser from "../../loginUser";
import { FooterBottom } from "../../components/FooterBottom";
import { Navigate } from "react-router-dom"; // Import Navigate

const DashboardPage = ({ userId }) => {
  // const { data: userData, isLoading, isError } = useQuery(
  //   ["userData", userId],
  //   () => loginUser(userId),
  //   {
  //     enabled: !!userId,
  //   }
  // );

  // if (isLoading) {
  //   return <Typography>Loading user data...</Typography>;
  // }

  // if (isError || !userData) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <>
      <Dashboard />
      <FooterBottom />
    </>
  );
};

export default DashboardPage;