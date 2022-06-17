import React from "react";
import { Link, useNavigate } from "react-router-dom";

// import Hero from "./Hero";

import styles from "./ProductList.module.css";

function ProductList() {
  const {
    product_list,
    product_list_li,
    product_list_li_img,
    product_title,
    product_price,
    product_btn,
  } = styles;

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <>
      <ul className={product_list} id="product_list">
        <li className={product_list_li}>
          <Link to="/product">
            <img className={product_list_li_img} src="https://via.placeholder.com/50x40" alt="" />
          </Link>
          <Link to="/product" className={product_title}>
            <p>Product 1 Title</p>
          </Link>
          <p className={product_price}>100 €</p>
          <button className={product_btn} type="button" onClick={handleClick}>
            Add to Cart
          </button>
        </li>

        <li className={product_list_li}>
          <Link to="/product">
            <img className={product_list_li_img} src="https://via.placeholder.com/50x40" alt="" />
          </Link>
          <Link to="/product" className={product_title}>
            <p>Product 2 Title</p>
          </Link>
          <p className={product_price}>50 €</p>
          <button className={product_btn} type="button" onClick={handleClick}>
            Add to Cart
          </button>
        </li>

        <li className={product_list_li}>
          <Link to="/product">
            <img className={product_list_li_img} src="https://via.placeholder.com/50x40" alt="" />
          </Link>
          <Link to="/product" className={product_title}>
            <p>Product 3 Title</p>
          </Link>
          <p className={product_price}>75 €</p>
          <button className={product_btn} type="button" onClick={handleClick}>
            Add to Cart
          </button>
        </li>

        <li className={product_list_li}>
          <Link to="/product">
            <img className={product_list_li_img} src="https://via.placeholder.com/50x40" alt="" />
          </Link>
          <Link to="/product" className={product_title}>
            <p>Product 4 Title</p>
          </Link>
          <p className={product_price}>200 €</p>
          <button className={product_btn} type="button" onClick={handleClick}>
            Add to Cart
          </button>
        </li>
      </ul>
    </>
  );
}

export default ProductList;
