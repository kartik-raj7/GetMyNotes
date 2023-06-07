import React from "react";
import styles from "./Homepagestyle/University.module.scss";
import { Box } from "@mui/material";
import SliderBannerData from "../../Data/SliderBannerData";
import SliderBannerCard from "../../Common/SliderBanner/SliderBannerCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const University = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    // autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };

  const sliderItems = SliderBannerData.map((data, index) => (
    <div key={index}>
      <div className={styles.sliderbanner}>
        <SliderBannerCard data={data} />
      </div>
    </div>
  ));

  return (
    <div className={styles.universityContent}>
      <h1 className={styles.universityHeading}> University </h1>
      <Box className={styles.container}>
        <h1 align="center"> Universities we are serving </h1>
        <div className={styles.sliders}>
          <Slider {...sliderSettings}>{sliderItems}</Slider>
        </div>
      </Box>
    </div>
  );
};

export default University;
