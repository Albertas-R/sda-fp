import React from "react";
import { useNavigate } from "react-router-dom";

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

  function handleClick() {
    navigate("/product");
  }

  return (
    <>
      <ul className={product_list} id="product_list">
        <li className={product_list_li}>
          <img className={product_list_li_img} src="http://via.placeholder.com/50x40" alt="" />
          <p className={product_title}>Product 1 Title</p>
          <p className={product_price}>100 €</p>
          <button className={product_btn} type="button" onClick={handleClick}>
            Add to Cart
          </button>
        </li>

        <li className={product_list_li}>
          <img className={product_list_li_img} src="http://via.placeholder.com/50x40" alt="" />
          <p className={product_title}>Product 2 Title</p>
          <p className={product_price}>50 €</p>
          <button className={product_btn} type="button" onClick={handleClick}>
            Add to Cart
          </button>
        </li>

        <li className={product_list_li}>
          <img className={product_list_li_img} src="http://via.placeholder.com/50x40" alt="" />
          <p className={product_title}>Product 3 Title</p>
          <p className={product_price}>75 €</p>
          <button className={product_btn} type="button" onClick={handleClick}>
            Add to Cart
          </button>
        </li>

        <li className={product_list_li}>
          <img className={product_list_li_img} src="http://via.placeholder.com/50x40" alt="" />
          <p className={product_title}>Product 4 Title</p>
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
