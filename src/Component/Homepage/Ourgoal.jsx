import React from "react";
import styles from "./Homepagestyle/Ourgoal.module.scss";
import ourgoal from "../../images/Ourgoal-images/ourgoal.png";
import whoweare from "../../images/Ourgoal-images/whoweare.png";
import { Box } from "@mui/material";

const Ourgoal = () => {
  return (
    <div className={styles.ourgoalContent}>
      <h1 className={styles.goalHeading}> Our Goal </h1>
      <Box className={styles.container}>
        <img src={ourgoal} alt="Our Goal" className={styles.ourgoalImage} />
        <p className={styles.containerContent}>
          <h1> You've got the courses, we've got the perfect notes </h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          commodo nunc. Vivamus vestibulum, nunc sed consequat luctus, metus mi
          suscipit lectus, nec gravida tortor mauris ac nisi.
        </p>
      </Box>
      <h1 className={styles.goalHeading1}> Who We Are </h1>
      <Box className={styles.container1}>
        <p className={styles.containerContent1}>
          <h1> You've got the courses, we've got the perfect notes </h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          commodo nunc. Vivamus vestibulum, nunc sed consequat luctus, metus mi
          suscipit lectus, nec gravida tortor mauris ac nisi.
        </p>
        <img src={whoweare} alt="Who We Are" className={styles.whoweareImage} />
      </Box>
    </div>
  );
};

export default Ourgoal;
