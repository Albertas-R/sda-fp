import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";

function Cart(props) {
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

  return (
    <div className={cart}>
      <ul className={cart_list}>
        <li className={cart_list_li}>
          <Link to="/product">
            <img className={cart_list_li_img} src={props.image} alt="" />
          </Link>
          <Link to="/product" className={cart_title}>
            <p>{props.title}</p>
          </Link>
          <p className={cart_price}>{props.price} €</p>
          <div className={cart_amount}>
            <div className={cart_amount_nr}>
              <p>1</p>
            </div>
            <div className={cart_amount_btns}>
              <button className={cart_amount_add}>+</button>
              <button className={cart_amount_min}>-</button>
            </div>
          </div>
        </li>

        <li className={cart_list_li}>
          <Link to="/product">
            <img className={cart_list_li_img} src="https://via.placeholder.com/50x40" alt="" />
          </Link>
          <Link to="/product" className={cart_title}>
            <p>Product 2 Title</p>
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
        </li>

        <li className={cart_list_li}>
          <Link to="/product">
            <img className={cart_list_li_img} src="https://via.placeholder.com/50x40" alt="" />
          </Link>
          <Link to="/product" className={cart_title}>
            <p>Product 3 Title</p>
          </Link>
          <p className={cart_price}>75 €</p>
          <div className={cart_amount}>
            <div className={cart_amount_nr}>
              <p>1</p>
            </div>
            <div className={cart_amount_btns}>
              <button className={cart_amount_add}>+</button>
              <button className={cart_amount_min}>-</button>
            </div>
          </div>
        </li>
      </ul>
      <div className={cart_total}>
        Total: <strong>225 €</strong>
      </div>
      <button className={cart_btn_pay} type="button" onClick={handleClick}>
        Pay now
      </button>
    </div>
  );
}

export default Cart;
