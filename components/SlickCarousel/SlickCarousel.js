import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./SlickCarousel.module.scss";

const cx = classNames.bind(styles);

function SlickCarousel({ children }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className={cx("slick-carousel")} {...settings}>
      {children}
    </Slider>
  );
}

export default SlickCarousel;

SlickCarousel.propTypes = {
  children: PropTypes.array.isRequired,
};
