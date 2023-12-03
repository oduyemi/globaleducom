import React from "react";
import { Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/theme.css";
import "../css/theme-rtl.css";



export const Resources = () => {
    return(
        <Box className="py-6">
        <Box className="container">
          <Box className="row">
            <h1 className="header-title display-4 header text-start mb-5"> TOP RESOURCE MATERIALS</h1>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/art-masterclass.png")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/moma.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-primary rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <h5 className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1">The Professional Art Masterclass</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">The Museum of Modern Art</a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/premiere.png")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/moma.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-primary rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <h5 className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1">Premiere Pro CC for Beginners</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">The Museum of Modern Art</a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/electricity.png")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/y.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-primary rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <h5 className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1">Electricity & Magnetism</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">Duke University</a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/chemistry.png")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/school.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-primary rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <h5 className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1">School chemistry beta</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">Duke University</a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/oriental-art.png")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/moma.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-primary rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <h5 className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1">Modernism in Oriental Art</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">The Museum of Modern Art</a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/visual-art.png")}alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/cal-arts.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-primary rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <h5 className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1">Compositions in Visual Art</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">The Museum of Modern Art</a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/physics.png")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/school-physics.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-primary rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <h5 className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1">High school physics</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">The Museum of Modern Art</a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/davinci.png")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/moma.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-primary rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <h5 className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1">Color Grading with Da Vinci</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">Duke University</a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    )
}