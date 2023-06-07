import React from "react";
import styles from "./SliderBannerCard.module.scss";

const SliderBannerCard = ({ data }) => {
  return (
    <div className={styles.SliderBannerCard}>
      <div className={styles.imagebox}>
        <img src={data.image} alt={data.title} className={styles.images} />
      </div>
      <div className={styles.datadiv}>
        <h4>{data.description}</h4>
      </div>
    </div>
  );
};

export default SliderBannerCard;
