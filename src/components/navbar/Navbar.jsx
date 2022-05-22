import { AppBar, Badge, IconButton, Toolbar, Typography, FormControl, FormLabel, FormHelperText, Button } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./NavbarStyle.css";
import CommerceLogo from '../../assets/commerce.png'
import Login from '../../modules/login/Login'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <AppBar position="fixed" color='inherit' >
      <Toolbar className="n-roots">
        <Link to='/' className="home-logo">
       
        <Typography variant="h6" color="primary"  >
          <img src={CommerceLogo} alt="" height="25x" className="nav-logo"/>
          Shop Online 
        </Typography>
        </Link>
        <div />
        <div>
          
        </div>
        <div>
      
<Button color="priamry" variant>
<Link to="./login" className="login-btn">
  Login
  </Link>
</Button>

          <IconButton aria-label="Add to cart item">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
