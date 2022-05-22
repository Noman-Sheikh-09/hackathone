import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Typed from "react-typed";
import "./HomeStyle.css";
import { Fade } from "react-reveal";
import { Zoom } from "react-reveal";
import Footer from "../../components/footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      
      <Grid container align="center" sx={{marginTop:'70px'}}>
        <Grid item xs={12} sm={12} md={12} lg={12} align="center">
        
 <Zoom>
        <Paper elevation={10} color="inherit" className="hero-banner">
        <Fade left>
            <Typography variant="h1"  className="top-title">
              <Typed
                strings={[" We are Here for you", "We Have Best Services", "And Offers For you"]}
                typeSpeed={100}
                backSpeed={90}
                loop
              />
            </Typography>
          </Fade>
        </Paper>
      </Zoom>
        </Grid>

      </Grid>
     
    
     

      <br />
      <Products />
    <br />
      <Footer />
      <br />

    </>
  );
} 
