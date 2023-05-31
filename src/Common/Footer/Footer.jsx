import React from "react";
// import { Typography, Link } from "@material-ui/core"
import styles from "./Footer.module.scss";
import ios from "../../images/Footer-images/appstoreiOS.png";
import android from "../../images/Footer-images/appstoreAndroid.png";
// import Instagram from "@mui/s-material/Instagram";
// import Facebook from "@mui/s-material/Facebook";
// import Twitter from "@mui/s-material/Twitter";
import { Link, Typography } from "@mui/material";
// import { Facebook, Instagram, Twitter } from "@mui/s-material";
import { FacebookOutlined } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
      <div className={styles.footerUp}>
        <div className={styles.students}>
          <h3 className={styles.upHeading}>For Students</h3>
          <ul className={styles.boxlist}>
            <li> Search Study Materials </li>
            <li> Rewards Store </li>
            <li> Find Jobs </li>
            <li> Community Guidelines </li>
          </ul>
        </div>
        <div className={styles.companies}>
          <h3 className={styles.upHeading}>For Companies</h3>
          <ul className={styles.boxlist}>
            <li> Search Study Materials </li>
            <li> Rewards Store </li>
            <li> Find Jobs </li>
            <li> Community Guidelines </li>
          </ul>
        </div>
        <div className={styles.socialLogo}>
          <h3 className={styles.upHeading}>Social Media</h3>
          <ul className={styles.socialList}>
            <li>
              <Link href="/">
                <FacebookOutlined style={{ fontSize: "30px", color: "#ffffff" }} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FacebookOutlined style={{ fontSize: "30px", color: "#ffffff" }} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FacebookOutlined style={{ fontSize: "30px", color: "#ffffff" }} />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.store}>
          <Link href="/">
            <img src={ios} alt="ios" height={55} width={175} />
          </Link>
          <Link href="/">
            <img src={android} alt="android" height={55} width={175} />
          </Link>
        </div>
      </div>
      <div className={styles.footerDown}>
        <Typography className={styles.downHeadingone}>
          &copy; GetMyNotes 2023 - 2027
        </Typography>
        <Typography className={styles.downHeadingtwo}>
          Privacy Policy | Terms & Conditions
        </Typography>
        <Typography className={styles.downHeadingLast}>
          Version 1.1.2
        </Typography>
      </div>
      </div>
    </div>
  );
};

export default Footer;