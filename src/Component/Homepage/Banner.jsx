import React, { useState, useEffect } from "react";
import styles from "./Homepagestyle/Banner.module.scss";
import { Avatar, Grid, IconButton, TextField } from "@mui/material";
import { Person, School, Search, Star, TextSnippet } from "@mui/icons-material";
import { motion } from "framer-motion";
import Background from "../../Common/Background/Background";

export const Banner = () => {
  const [text, setText] = useState("");
  const fullText = "Curated Notes & Study Material You Need To Ace Your Exams.";

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const type = () => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
        setTimeout(type, 100);
      }
    };

    type();
  }, []);

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className={styles.herodiv}>
      <div className={styles.content}>
        <div className={styles.hero}>
        <div className={styles.herosub}>
        <h1 className={styles.bannerHeading}>{text}</h1>
        </div>
        <div className={styles.herosub}
        >
        <img 
        className={styles.heroimage} src='./homepageimages/herobanner.png' alt='hero'/>
        </div>
        </div>
        {/* <form style={{ marginBottom: "3rem" }}>
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
        </form> */}
        <Grid
          container
          spacing={9}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom:'40px',
          }}
        >
          <Grid
            item
            xs={0}
            component={motion.div}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Avatar className={styles.circle}>
              <TextSnippet style={{ color: "white", fontSize: "5.5rem" }} />
            </Avatar>
            <h4 className={styles.subTitle}>Count Of</h4>
            <h4 className={styles.subTitle}>Notes</h4>
          </Grid>

          <Grid
            item
            xs={0}
            component={motion.div}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Avatar className={styles.circle}>
              <School style={{ color: "white", fontSize: "5.5rem" }} />
            </Avatar>
            <h4 className={styles.subTitle}>Universities We</h4>
            <h4 className={styles.subTitle}>Are Serving</h4>
          </Grid>

          <Grid
            item
            xs={0}
            component={motion.div}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Avatar className={styles.circle}>
              <Person style={{ color: "white", fontSize: "5.5rem" }} />
            </Avatar>
            <h4 className={styles.subTitle}>Number Of</h4>
            <h4 className={styles.subTitle}>Students</h4>
          </Grid>
          
          <Grid
            item
            xs={0}
            component={motion.div}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Avatar className={styles.circle}>
              <Star style={{ color: "white", fontSize: "5.5rem" }} />
            </Avatar>
            <h4 className={styles.subTitle}>Ratings</h4>
          </Grid>
        </Grid>
      </div>      
    </div>
  );
};

export default Banner;
