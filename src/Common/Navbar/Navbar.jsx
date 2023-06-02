import React from "react";
import logo from "../../images/getmynotes.png";
import styles from "./Navbar.module.scss";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <div className={styles.appBar}>
      <AppBar position="static" style={{ backgroundColor: "#3f51b5" }}>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <img
                src={logo}
                alt="GetMyNotes Logo"
                style={{
                  cursor: "pointer",
                  width: "30%",
                  padding: "4px",
                  marginLeft: "3rem",
                }}
                className={styles.logo}
              />
            </Grid>
            <Grid item style={{ marginRight: "3rem" }}>
              <Button color="inherit">Sign In</Button>
              <Button color="inherit">Register</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
