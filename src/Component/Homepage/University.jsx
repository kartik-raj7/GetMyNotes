import React from "react";
import styles from "./Homepagestyle/University.module.scss";
import { Box } from "@mui/material";

const University = () => {
  return (
    <div className={styles.universityContent}>
      <h1 className={styles.universityHeading}> University </h1>
      <Box className={styles.container}>
        <h1 style={{ display: "flex", alignItems: "center" }}>
          Universities we are serving
        </h1>
      </Box>
    </div>
  );
};

export default University;
