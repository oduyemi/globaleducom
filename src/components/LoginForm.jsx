import React from "react";
import { Box, Typography } from "@mui/material"
import Button from "./elements/Button";
import { Link } from "react-router-dom";
import "../App.css"

export const LoginForm = () =>{
  return (
    <Box container maxWidth="xl" className="mb-2 mx-auto gradient-form">
      <Box className="row">
        <Box col="6" sx={{ display: "flex", justifyItem: "center", alignItems: "center", flexDirection: "column" }} className="mb-5">
          <div className="mx-auto my-5">
            <img src={require("../assets/images/gallery/login.png")}
                style={{width: "240px"}} alt="logo" />
              <Typography variant="h4" className="mt-1 mb-3 pb-1 text-warning">Login Form</Typography>
            <Typography variant="h6" sx={{ fontSize: "16px" }} paragraph className="text-muted">Please login to your account</Typography>
            <div className="formgroup mb-3">
            <input className="form-control text-light" placeholder=" &emsp; Enter email address" name="mail" type="email"/>
            </div>
            <div className="mb-2">
            <input placeholder="&emsp; Enter password"className="form-control" name="pwd" type="password"/>
            </div>
            <div className="text-center pt-1 mb-2 pb-1">
              <Button className="mb-2 w-100">Login</Button>
              <Link className="text-muted" to="#!">Forgot password?</Link>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <Typography variant="h6" sx={{ fontWeight: "light", fontSize: "12px" }} paragraph className="mb-0 ">Don"t have an account?
                <span><Link to="/register"><Typography variant="h6"sx={{ fontWeight: "light", fontSize: "10px" }} className="text-success d-inline" paragraph> Click Here</Typography></Link></span>
              </Typography>
            </div>

          </div>

        </Box>
      </Box>

    </Box>
  );
}

