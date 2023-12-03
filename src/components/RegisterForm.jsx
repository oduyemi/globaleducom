import React from "react";
import { Box, Typography } from "@mui/material"
import Button from "./elements/Button";
import { Link } from "react-router-dom";
import "../App.css"


export const RegisterForm = () => {
    return(
      <Box container maxWidth="xl" className="mb-2 mx-auto gradient-form">
      <Box className="row">
        <Box col="6" sx={{ display: "flex", justifyItem: "center", alignItems: "center", flexDirection: "column" }} className="mb-5">
          <div className="mx-auto my-5">
            <img src={require("../assets/images/gallery/reg.png")}
                style={{width: "240px"}} alt="logo" />
            <Typography variant="h6" sx={{ fontSize: "16px" }} paragraph className="text-muted">Global Educom Registration</Typography>
            <div className="formgroup mb-3">
            <input className="form-control text-light mb-2" placeholder=" &emsp; First name" name="fname" type="text"/>
            <input className="form-control text-light" placeholder=" &emsp; Last name" name="lname" type="text"/>
            </div>
            <div className="formgroup mb-3">
            <input className="form-control text-light mb-2" placeholder=" &emsp; Email address" name="mail" type="text"/>
            <input className="form-control text-light" placeholder=" &emsp; Phone number" name="phone" type="number"/>
            </div>
            <div className="mb-2">
            <input placeholder="&emsp; Create password"className="form-control mb-2" name="pwd" type="password"/>
            <input placeholder="&emsp; Confirm password"className="form-control " name="cpwd" type="password"/>
            </div>
            <div className="text-center pt-1 mb-2 pb-1">
              <Button className="mb-2 w-100">Register</Button>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <Typography variant="h6" sx={{ fontWeight: "light", fontSize: "12px" }} paragraph className="mb-0 ">Already have an account?
                <span><Link to="/login"><Typography variant="h6"sx={{ fontWeight: "light", fontSize: "10px" }} className="text-success d-inline" paragraph> Click Here</Typography></Link></span>
              </Typography>
            </div>

          </div>

        </Box>
      </Box>

    </Box>
    )
}