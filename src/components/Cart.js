import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { PlusIconHi, MinusIconHi } from "./Icons";

import styles from "./Cart.module.css";

function Cart({ products }) {
  const {
    cart,
    cart_list,
    cart_list_li,
    cart_list_li_img,
    cart_title,
    cart_price,
    cart_amount,
    cart_amount_nr,
    cart_amount_btns,
    cart_amount_add,
    cart_amount_min,
    cart_total,
    cart_btn_pay,
  } = styles;

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/pay");
  };

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  // console.log("cartItems", cartItems);

  ////// 1 variantas - vietoj filter -> reduce
  ////// 2 variantas - map productsInCart ir ziuret koks amount

  const productsInCart = products.filter((el) => {
    const isProductInCart = cartItems.some((x) => {
      return el.id === x.id;
    });
    return isProductInCart;
  });
  console.log("productsInCart", productsInCart);

  let total = 0;
  cartItems.forEach((cartItem) => {
    // console.log(carItem);

    productsInCart.forEach((product) => {
      // console.log(product);
      if (cartItem.id === product.id) {
        total += product.price * cartItem.amount;
      }
    });
  });
  // console.log(total);

  productsInCart.forEach((product) => {
    // console.log(product);

    cartItems.forEach((item) => {
      // console.log(item.amount);
      if (product.id === item.id) {
        product.amount = item.amount;
      }
    });
  });

  return (
    <div className={cart}>
      <ul className={cart_list}>
        {productsInCart.map((el) => {
          // console.log(el);
          return (
            <li className={cart_list_li} key={el.id}>
              <Link to="/product">
                <img className={cart_list_li_img} src={el.images[0]} alt="" />
              </Link>
              <Link to="/product" className={cart_title}>
                <p>{el.title}</p>
              </Link>
              <p className={cart_price}>{el.price} €</p>
              <div className={cart_amount}>
                <div className={cart_amount_nr}>
                  <p>{el.amount} item</p>
                </div>
                <div className={cart_amount_btns}>
                  {/* <button className={cart_amount_add}>+</button>
                  <button className={cart_amount_min}>-</button> */}
                  <button className={cart_amount_add} onClick={() => console.log('btn add clicked')}>
                    <PlusIconHi />
                  </button>
                  <button className={cart_amount_min} onClick={() => console.log('btn minus clicked')}>
                    <MinusIconHi />
                  </button>
                </div>
              </div>
            </li>
          );
        })}

        {/* <li className={cart_list_li}>
          <Link to="/product">
            <img className={cart_list_li_img} src="https://via.placeholder.com/50x40" alt="" />
          </Link>
          <Link to="/product" className={cart_title}>
            <p>Product 1 Title</p>
          </Link>
          <p className={cart_price}>50 €</p>
          <div className={cart_amount}>
            <div className={cart_amount_nr}>
              <p>1</p>
            </div>
            <div className={cart_amount_btns}>
              <button className={cart_amount_add}>+</button>
              <button className={cart_amount_min}>-</button>
            </div>
          </div>
        </li> */}
      </ul>
      <div className={cart_total}>
        Total: <strong>{total} €</strong>
      </div>
      <button className={cart_btn_pay} type="button" onClick={handleClick}>
        Pay now
      </button>
    </div>
  );
}

export default Cart;
