import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Button from "./elements/Button";
import { Link } from "react-router-dom";
import "../App.css";
import loginUser from "../loginUser";
import axios from "axios";
import { useQueryClient } from "react-query";
import { setCookie } from "../CookieUtils";
import { getCookie } from "../CookieUtils";




export const LoginForm = () => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [errorFlashMessage, setErrorFlashMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    console.log("Attempting login...");
  
    try {
      setLoading(true);
  
      const userId = getCookie('userId');
      console.log("Getting userId cookie:", userId);
      
      if (!userId) {
        console.error('User is not logged in. Unable to fetch user data.');
        return;
      }
  
      const response = await axios.post("https://globaleducomm.com/api/send/login", formData);
      const userData = await loginUser(response.data.userId);

      queryClient.setQueryData("user", userData);
  
      const { message, flashMessage, flashType } = response.data;
  
      if (flashType === "success") {
        setFlashMessage(flashMessage);
        
        setCookie('userId', response.data.userId, { expires: new Date(Date.now() + 3600000) });
  
        console.log("Login successful. Redirecting to dashboard...");
        window.location.href = "/dashboard";
      } else if (flashType === "error") {
        setErrorFlashMessage(flashMessage);
        console.log("Error Flash Message:", flashMessage);
      }      
      
      console.log(message);
    } catch (error) {
      console.error("Login failed", error.response?.data || error.message);
      setErrorFlashMessage("Login failed. Please try again.");
    } finally {
      setLoading(false);
      console.log("Login completed.");
    }
  };
  
  return (
    <Box container maxWidth="xl" className="mb-2 mx-auto gradient-form">
      <Box className="row">
        <Box col="6" sx={{ display: "flex", justifyItem: "center", alignItems: "center", flexDirection: "column" }} className="mb-5">
          <div className="mx-auto my-5">
            <img src={require("../assets/images/gallery/login.png")}
                style={{width: "240px"}} alt="logo" />
              <Typography variant="h4" className="mt-1 mb-3 pb-1 text-warning">Login Form</Typography>
            <Typography variant="h6" sx={{ fontSize: "16px" }} paragraph className="text-muted">Please login to your account</Typography>
              <div>{flashMessage && <div className="success-message">{flashMessage}</div>}
                <div>{errorFlashMessage && <div className="error-message">{errorFlashMessage}</div>}
          </div>

          </div>
            <div className="formgroup mb-3">
              <input
                className="form-control text-light"
                placeholder=" &emsp; Enter email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <input
                placeholder="&emsp; Enter password"
                className="form-control"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="text-center pt-1 mb-2 pb-1">
              <Button onClick={handleLogin} className="mb-2 w-100" disable={loading}>
                {loading ? "Hang on..." : "Login"}
              </Button>
              <Link className="text-muted" to="#!">Forgot password?</Link>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <Typography variant="h6" sx={{ fontWeight: "light", fontSize: "12px" }} paragraph className="mb-0 ">Don"t have an account?
                <span><Link to="/register"><Typography variant="h6" sx={{ fontWeight: "light", fontSize: "10px" }} className="text-success d-inline" paragraph> Click Here</Typography></Link></span>
              </Typography>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
