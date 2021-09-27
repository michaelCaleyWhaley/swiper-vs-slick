import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.scss";

const cx = classNames.bind(styles);

function ProductCard({ src, alt, desc, price }) {
  return (
    <div className={cx("product-card")}>
      <div className={cx("product-card__image-container")}>
        <img className={cx("product-card__image")} src={src} alt={alt} />
      </div>
      <p className={cx("product-card__desc")}>{desc}</p>
      <p className={cx("product-card__desc", "product-card__desc--price")}>
        {price}
      </p>
    </div>
  );
}

ProductCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
