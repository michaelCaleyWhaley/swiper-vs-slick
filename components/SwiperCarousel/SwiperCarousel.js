import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SwiperCarousel.module.scss";

const cx = classNames.bind(styles);

function SwiperCarousel({ children }) {
  return (
    <Swiper
      className={cx("swiper-carousel")}
      spaceBetween={0}
      slidesPerView={2}
      breakpoints={{ 769: { slidesPerView: 4 } }}
    >
      {children.map((child, index) => {
        const key = `${index}-swipe`;
        return <SwiperSlide key={key}>{child}</SwiperSlide>;
      })}
    </Swiper>
  );
}

export default SwiperCarousel;

SwiperCarousel.propTypes = {
  children: PropTypes.array.isRequired,
};
