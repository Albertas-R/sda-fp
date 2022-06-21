import { React, useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

import Hero from "./Hero";

import styles from "./ProductList.module.css";

function ProductList({ products }) {
  const {
    product_list,
    product_img_box,
    product_info_box,
    product_list_li,
    product_list_li_img,
    product_title,
    product_price,
    product_btn,
  } = styles;

  /*
  const handleClick = (item) => {

    localStorage.setItem(
      "cartItem",
      JSON.stringify({ title: item.title, image: item.images[0], price: item.price })
    );

    // setCartItems(JSON.parse(localStorage.getItem("cartItem")));

    setCartItems(() => [...cartItems, JSON.parse(localStorage.getItem("cartItem"))]);

    console.log(JSON.parse(localStorage.getItem("cartItem")));
  };
  */

  const handleClick = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const checkItem = cartItems.find((el) => el.id === item.id);

    if (checkItem) {
      checkItem.amount++;
    } else {
      cartItems.push({ id: item.id, amount: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    console.log(cartItems);

    // const addItem = (itemId) => {
    //   const previousItem = items.find(({ id }) => id === itemId);

    //   if (previousItem) {
    //     previousItem.amount++;

    //     return;
    //   }

    //   items.push({ id: itemId, amount: 1 });
    // };
  };

  return (
    <>
      <Hero />
      {/* <Outlet /> */}
      <ul className={product_list} id="product_list">
        {products.map((item) => {
          return (
            <li className={product_list_li} key={item.id}>
              <div className={product_img_box}>
                <Link to={`/product/${item.id}`}>
                  <img className={product_list_li_img} src={item.images[0]} alt="" />
                </Link>
              </div>
              <div className={product_info_box}>
                <Link to={`/product/${item.id}`} className={product_title}>
                  <p>{item.title}</p>
                </Link>
                <p className={product_price}>{item.price} €</p>
                <button className={product_btn} type="button" onClick={() => handleClick(item)}>
                  Add to Cart
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductList;
