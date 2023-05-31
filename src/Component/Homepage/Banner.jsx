import React from "react";
import styles from "./Homepagestyle/Banner.module.scss";
import { Avatar, Grid, IconButton, TextField } from "@mui/material";
import { Person, School, Search, Star, TextSnippet } from "@mui/icons-material";
// import Particle from "./Particle";
// import { TextField, IconButton, Grid, Avatar } from "@material-ui/core";
// import { Search } from "@material-ui/icons";
// import SchoolIcon from "@mui/icons-material/School";
// import PersonIcon from '@mui/icons-material/Person';
// import StarIcon from '@mui/icons-material/Star';
// import TextSnippetIcon from '@mui/icons-material/TextSnippet';


export const Banner = () => {
  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      {/* <div style={{ height: '20px'}}>
      <Particle />
      </div> */}
      <div className={styles.content}>
        <h1 className={styles.bannerHeading}>
          Curated Notes & Study Material You Need To Ace Your Exams.
        </h1>
        <form style={{ marginBottom: "3rem" }}>
          <TextField
            variant="outlined"
            placeholder="Search"
            onChange={handleSearch}
            style={{ width: "600px" }}
            InputProps={{
              endAdornment: (
                <IconButton type="submit">
                  <Search />
                </IconButton>
              ),
            }}
          />
        </form>
        <Grid container spacing={9} style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center'}}>
          <Grid item xs={0}>
            <Avatar className={styles.circle}>
              <TextSnippet style={{ color: "white", fontSize: "5.5rem" }} />
            </Avatar>
            <h4 className={styles.subTitle}> Count Of </h4>
            <h4 className={styles.subTitle}> Notes </h4>
          </Grid>
          <Grid item xs={0}>
            <Avatar className={styles.circle}>
              <School style={{ color: "white", fontSize: "5.5rem" }} />
            </Avatar>
            <h4 className={styles.subTitle}> Universities We </h4>
            <h4 className={styles.subTitle}> Are Serving </h4>
          </Grid>
          <Grid item xs={0}>
            <Avatar className={styles.circle}>
              <Person style={{ color: "white", fontSize: "5.5rem" }} />
            </Avatar>
            <h4 className={styles.subTitle}> Number Of </h4>
            <h4 className={styles.subTitle}> Students </h4>
          </Grid>
          <Grid item xs={0}>
            <Avatar className={styles.circle}>
              <Star style={{ color: "white", fontSize: "5.5rem" }} />
            </Avatar>
            <h4 className={styles.subTitle}> Ratings </h4>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Banner;
