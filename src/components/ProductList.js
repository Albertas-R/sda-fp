import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

import Hero from "./Hero";

import styles from "./ProductList.module.css";

function ProductList({ products }) {
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
      <Hero />
      {/* <Outlet /> */}
      <ul className={product_list} id="product_list">
        {products.map((item) => {
          return (
            <li className={product_list_li} key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img className={product_list_li_img} src={item.images[0]} alt="" />
              </Link>
              <Link to={`/product/${item.id}`} className={product_title}>
                <p>{item.title}</p>
              </Link>
              <p className={product_price}>{item.price} €</p>
              <button className={product_btn} type="button" onClick={handleClick}>
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductList;
