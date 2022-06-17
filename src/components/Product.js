import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Product.module.css";

function Product() {
  const {
    product,
    image_container,
    product_image,
    description_container,
    product_title,
    product_description,
    price_container,
    product_price,
    product_btn,
  } = styles;

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <div className={product}>
      <div className={image_container}>
        <img className={product_image} src="https://via.placeholder.com/50x40" alt="" />
      </div>
      <div className={description_container}>
        <p className={product_title}>Product Title</p>
        <p className={product_description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.e
        </p>
        <div className={price_container}>
          <p className={product_price}>100 €</p>
          <button className={product_btn} type="button" onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
