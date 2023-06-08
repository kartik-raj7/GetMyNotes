import React from "react";
import logo from "../../images/gmn.png";
import styles from "./Navbar.module.scss";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <div className={styles.appBar}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <img
                src={logo}
                alt="GetMyNotes Logo"
                className={styles.logo}
              />
            </Grid>
            <Grid item style={{ marginRight: "3rem" }}>
              <Button sx={{color:'#26A266'}} color="inherit">Sign In</Button>
              <Button sx={{color:'#26A266'}} color="inherit">Register</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
