import React, { useState,useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import useStyles from "./style";


const Navbar = ({totalItems}) => {
  const classes = useStyles();
  const location = useLocation();

  const [count, setCount] = useState(-1);

  useEffect(() => {
    if (location.pathname === '/') {
      setCount(count+1);
      console.log(count + 1);
    }
  }, [totalItems, location.pathname]);
  
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="commerce.js"
              height="25px"
              className={classes.image}
            />{" "}
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' &&(
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={count} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
