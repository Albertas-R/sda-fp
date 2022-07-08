import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProductList.module.css";

function ProductCard({ product }) {
  // console.log(product);

  const {
    product_img_box,
    product_info_box,
    product_card,
    product_card_img,
    product_title,
    product_price,
    product_btn,
  } = styles;

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const checkItem = cartItems.find((item) => item.id === product.id);

    if (checkItem) {
      checkItem.amount++;
    } else {
      cartItems.push({ id: product.id, amount: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    console.log("----- cartItems from ProductCard", cartItems);
  };

  return (
    <>
      <li className={product_card}>
        <div className={product_img_box}>
          <Link to={`/product/${product.id}`}>
            <img className={product_card_img} src={product.images[0]} alt="" />
          </Link>
        </div>
        <div className={product_info_box}>
          <Link to={`/product/${product.id}`} className={product_title}>
            <p>{product.title}</p>
          </Link>
          <p className={product_price}>{product.price} €</p>
          <button className={product_btn} type="button" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </li>
    </>
  );
}

export default ProductCard;
