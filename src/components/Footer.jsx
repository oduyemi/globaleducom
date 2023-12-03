import { Box, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/theme.css";
import "../css/theme-rtl.css";


export const Footer = () => {
    return(
        <Box maxWidth="xl" sx={{ backgroundColor: "#1D3461"}}>
            <Box className="container">
            <Box className="row">
                <Box className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0 my-auto">
                    <a className="text-decoration-none" href="/">
                        <img src={require("../assets/images/logos/logo.png")} height="100" width="120" alt="logo" />
                    </a>
                    <Typography variant="h5" paragraph sx={{ fontWeight: "light", fontSize: "16px"}} className="text-light">
                        Global Educom is a leading digital provider of academic and professional support services.
                        <br className="d-none d-sm-block" />We provide postgraduates with all the resources and 
                        <br className="d-none d-sm-block" />support you need to succeed in your career and academics.  
                        <br className="d-none d-sm-block" />Stress no more…make Global Educom your no.1 go-to-career and academic solution.
                    </Typography>
                </Box>
                <Box className="col-6 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
                <Typography variant="h3" className="lh-lg fw-normal mb-2 text-light font-sans-serif">Links</Typography>
                <ul className="list-unstyled mb-md-4 mb-lg-0">
                    <li className="lh-lg"><a className="text-light" href="#!">Home</a></li>
                    <li className="lh-lg"><a className="text-light" href="#!">Register</a></li>
                    <li className="lh-lg"><a className="text-light" href="#!">Login</a></li>                    
                </ul>
                </Box>
                <Box className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                <h3 className="lh-lg fw-bold text-light mb-4 font-sans-serif">Connect</h3>
                <ul className="list-unstyled mb-md-4 mb-lg-0">
                <   li className="lh-lg"><a className="text-light" href="#!">Facebook</a></li>
                    <li className="lh-lg"><a className="text-light" href="#!">Twitter</a></li>
                    <li className="lh-lg"><a className="text-light" href="#!">Instagram</a></li>
                </ul>
                </Box>
                <Box className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                <h3 className="lh-lg fw-bold text-light mb-4 font-sans-serif"> Legal</h3>
                <ul className="list-unstyled mb-md-4 mb-lg-0">
                    <li className="lh-lg"><a className="text-light" href="#!">Terms of Services</a></li>
                    <li className="lh-lg"><a className="text-light" href="#!">Privacy Policy</a></li>
                    <li className="lh-lg"><a className="text-light" href="#!">Accessibility</a></li>
                </ul>
                </Box>
            </Box>
            </Box>
        </Box>
    )
}