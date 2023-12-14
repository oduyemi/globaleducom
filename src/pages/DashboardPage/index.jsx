import React, {useEffect} from "react";
import { Dashboard } from "../../views/pages/Dashboard";
import { Typography } from "@mui/material";
import { useQuery } from "react-query";
import loginUser from "../../loginUser";
import { FooterBottom } from "../../components/FooterBottom"




const DashboardPage = ({ userId }) => {
  const { data: userData, isLoading, isError } = useQuery(
    ["userData", userId],
    () => loginUser(userId),
    {
      enabled: !!userId,
    }
  );

  useEffect(() => {
    if (userData) {
      console.log("User data fetched successfully:", userData);
    }
  }, [userData]);

  if (isLoading) {
    return <Typography>Loading user data...</Typography>;
  }

  if (isError) {
    return <Typography>Error fetching user data.</Typography>;
  }

  // Render your DashboardPage with userData
  return (
    <>
      <Dashboard />
      <FooterBottom />
    </>
    
  );
};

export default DashboardPage;