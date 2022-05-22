import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";
import "./FooterStyle.css";
export default function Footer() {
  return (
    <Fade bottom>
      <Grid container spacing={4} className="footer-grid">
        <Grid item xs={6} sm={6} md={6}>
          <Typography variant="h5" className="footer">
            What We Do
          </Typography>
          <Typography variant="h5" className="footer">
            What We are
          </Typography>
          <Typography variant="h5" className="footer">
            What We have
          </Typography>
          <Typography variant="h5" className="footer">
            Our Impact
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Typography variant="h5" className="footer">
            Our Team
          </Typography>
          <Typography variant="h5" className="footer">
            Careers
          </Typography>
          <Typography variant="h5" className="footer">
            Newsroom
          </Typography>
          <Typography variant="h5" className="footer">
            Vision
          </Typography>
        </Grid>
      </Grid>
    </Fade>
  );
}
