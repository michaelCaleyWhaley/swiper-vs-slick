import React from "react";
import PropTypes from "prop-types";

import "../pagesStyling/global.scss";
import "swiper/css";

function MyApp({ Component }) {
  return <Component />;
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default MyApp;
