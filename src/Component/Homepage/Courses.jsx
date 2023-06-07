import React, { useState, useEffect } from "react";
import styles from "./Homepagestyle/Courses.module.scss";
import { Avatar, Box, Grid, Paper } from "@mui/material";
import { Business, Computer, ManageAccounts, Science } from "@mui/icons-material";
import { motion, useCycle } from "framer-motion";

function GridItem({ frontIcon, backContent }) {
  const [isFlipped, setFlipped] = useState(false);
  const [yPosition, setYPosition] = useState(0);
  const [cycle, setCycle] = useCycle(-5, 5);

  const handleHover = () => {
    setFlipped(!isFlipped);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCycle();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setYPosition(cycle);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [cycle]);

  return (
    <Grid
      item
      xs={0}
      className={`${styles.gridItem} ${isFlipped ? styles.back : styles.front}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <motion.div
        style={{ y: yPosition }}
        animate={{ y: yPosition }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Paper className={styles.content}>
          {isFlipped ? (
            <div> {backContent} </div>
          ) : (
            <div
              style={{
                backgroundColor: "rgba(38, 162, 102, 0.4)",
                height: "8rem",
                width: "8rem",
                borderRadius: "100px",
                margin: "50px 50px",
              }}
            >
              {frontIcon}
            </div>
          )}
        </Paper>
      </motion.div>
    </Grid>
  );
}

const Courses = () => {
  return (
    <div className={styles.coursesContent}>
      <h1 className={styles.coursesHeading}> Courses and Remarks </h1>
      <Box className={styles.container}>
        <h1 style={{ display: "flex", alignItems: "center" }}>
          You've got the courses, we've got the perfect notes
        </h1>
        <Grid
          container
          spacing={9}
          style={{
            marginBottom: "2rem",
            marginTop: "-7rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <GridItem
            frontIcon={
              <div>
                <Computer
                  style={{ color: "#26A266", fontSize: "5rem", margin: "1.4rem" }}
                />
                <h4 className={styles.subTitlefront}>BTech</h4>
              </div>
            }
            backContent={
              <div>
                <Avatar className={styles.circle}>
                  <h1 style={{ fontSize: "3rem" }}>8+</h1>
                </Avatar>
                <h4 className={styles.subTitle}>Number of Students</h4>
                <h4 className={styles.subTitle}>Enrolled</h4>
              </div>
            }
          />

          <GridItem
            frontIcon={
              <div>
                <Science
                  style={{ color: "#26A266", fontSize: "5rem", margin: "1.4rem" }}
                />
                <h4 className={styles.subTitlefront}>BSc</h4>
              </div>
            }
            backContent={
              <div>
                <Avatar className={styles.circle}>
                  <h1 style={{ fontSize: "3rem" }}>5+</h1>
                </Avatar>
                <h4 className={styles.subTitle}>Number of Students</h4>
                <h4 className={styles.subTitle}>Enrolled</h4>
              </div>
            }
          />

          <GridItem
            frontIcon={
              <div>
                <Business
                  style={{ color: "#26A266", fontSize: "5rem", margin: "1.4rem" }}
                />
                <h4 className={styles.subTitlefront}>Business</h4>
              </div>
            }
            backContent={
              <div>
                <Avatar className={styles.circle}>
                  <h1 style={{ fontSize: "3rem" }}>4+</h1>
                </Avatar>
                <h4 className={styles.subTitle}>Number of Students</h4>
                <h4 className={styles.subTitle}>Enrolled</h4>
              </div>
            }
          />

          <GridItem
            frontIcon={
              <div>
                <ManageAccounts
                  style={{ color: "#26A266", fontSize: "5rem", margin: "1.4rem" }}
                />
                <h4 className={styles.subTitlefront}>CA</h4>
              </div>
            }
            backContent={
              <div>
                <Avatar className={styles.circle}>
                  <h1 style={{ fontSize: "2rem" }}>10+</h1>
                </Avatar>
                <h4 className={styles.subTitle}>Number of Students</h4>
                <h4 className={styles.subTitle}>Enrolled</h4>
              </div>
            }
          />
        </Grid>
      </Box>
    </div>
  );
};

export default Courses;
