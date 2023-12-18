import React, { useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Button from "./elements/Button";
import { Link } from "react-router-dom";
// import loginUser from "../loginUser";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import useAuth from "../useAuth";

export const LoginForm = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);

      // Simplified login logic
      const loginResult = await login(formData);

      if (loginResult && loginResult.error) {
        console.error("Login failed", loginResult.error);
      } else {
        console.log("Login successful. Redirecting to dashboard...");
        await new Promise((resolve) => setTimeout(resolve, 500));
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  return (
    <Box container maxWidth="xl" className="mb-2 mx-auto gradient-form">
      <div>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
    </Box>
  );
};
