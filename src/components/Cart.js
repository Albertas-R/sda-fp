import React from "react";

import styles from "./Cart.module.css";

function Cart() {
  const { cart, cart_container, cart_txt } = styles;

  return (
    <div className={cart}>
      <div className={cart_container}>
        <p className={cart_txt}>cart page</p>
      </div>
    </div>
  );
}

export default Cart;
