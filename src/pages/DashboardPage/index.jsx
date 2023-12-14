import React, { useState, useEffect } from "react";
import { Dashboard } from "../../views/pages/Dashboard";
import { Typography } from "@mui/material";
import { useQuery } from "react-query";
import loginUser from "../../loginUser";
import { FooterBottom } from "../../components/FooterBottom";

const DashboardPage = ({ userId }) => {
  const { data: userData, isLoading, isError } = useQuery(
    ['user', userId],
    () => loginUser(userId),
    {
      enabled: !!userId,
    }
  );

  const [firstName, setFirstName] = useState(""); 

  useEffect(() => {
    console.log('userData:', userData);
    console.log('isLoading:', isLoading);
    console.log('isError:', isError);

    if (userData && userData.data && userData.data.length > 0) {
      const { user_fname } = userData.data[0];
      setFirstName(user_fname);
    }
  }, [userData, isLoading, isError]);

  if (isLoading) {
    return <Typography>Loading user data...</Typography>;
  }

  if (isError) {
    return <Typography>Error fetching user data.</Typography>;
  }

  return (
    <>
    <Dashboard userId={userId} setFirstName={setFirstName} />
    <FooterBottom />
  </>
  );
};

export default DashboardPage;
