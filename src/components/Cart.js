import { React, useState, useEffect } from "react";
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
    cart_total_price,
    cart_total_price_empty,
    cart_btn_pay,
  } = styles;

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/pay");
  };

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  ////// 1 variantas - vietoj filter -> reduce
  ////// 2 variantas - map productsInCart ir ziuret koks amount

  const productsInCart = products.filter((product) => {
    const isProductInCart = cartItems.some((item) => {
      return product.id === item.id;
    });
    return isProductInCart;
  });
  console.log("productsInCart ----------", productsInCart);

  let totalPrice = 0;
  cartItems.forEach((item) => {
    // console.log(item);

    productsInCart.forEach((product) => {
      // console.log(product);
      if (item.id === product.id) {
        product.amount = item.amount;
        totalPrice += product.price * item.amount;
      }
    });
  });
  // console.log(totalPrice);

  const [cartItemsState, setCartItemsState] = useState(cartItems);

  const handleCartAmountAdd = (product) => {
    console.log(`----- btn ADD id:${product.id} clicked`);
    // console.log(product);

    cartItems.forEach((item) => {
      if (product.id === item.id) {
        product.amount++;

        // console.log(item);
        // item.amount++;
        setCartItemsState({ ...item, amount: item.amount++ });
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  // console.log("cartItems ---------------", cartItems);

  // product ----> productsInCart
  const handleCartAmountMinus = (product) => {
    console.log(`----- btn MINUS id:${product.id} clicked`);
    // console.log(product);

    cartItems.forEach((item) => {
      if (product.id === item.id) {
        product.amount--;

        // console.log(item);
        // item.amount--;
        setCartItemsState({ ...item, amount: item.amount-- });
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    if (product.amount === 0) {
      const removeProduct = (productId) => {
        const index = cartItems.findIndex((item) => item.id === productId);

        if (index > -1) {
          cartItems.splice(index, 1);
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      };
      removeProduct(product.id);
    }
  };

  console.log("cartItems ---------------", cartItems);

  const totalPriceEl = (
    <>
      {totalPrice > 0 ? (
        <div className={cart_total_price}>
          Total Price: <strong>{totalPrice} €</strong>
        </div>
      ) : (
        <div className={cart_total_price_empty}>Cart is empty.</div>
      )}
    </>
  );

  const cartBtnPayEl = (
    <>
      {totalPrice > 0 ? (
        <button className={cart_btn_pay} type="button" onClick={handleClick}>
          Pay now
        </button>
      ) : null}
    </>
  );

  return (
    <div className={cart}>
      <ul className={cart_list}>
        {productsInCart.map((product) => {
          // console.log(product);
          return (
            <li className={cart_list_li} key={product.id}>
              <Link to="/product">
                <img className={cart_list_li_img} src={product.images[0]} alt="" />
              </Link>
              <Link to="/product" className={cart_title}>
                <p>{product.title}</p>
              </Link>
              <p className={cart_price}>{product.price} €</p>
              <div className={cart_amount}>
                <div className={cart_amount_nr}>
                  <p>
                    {product.amount} {product.amount > 1 ? "items" : "item"}
                  </p>
                </div>
                <div className={cart_amount_btns}>
                  {/* <button className={cart_amount_add}>+</button>
                  <button className={cart_amount_min}>-</button> */}
                  <button className={cart_amount_add} onClick={() => handleCartAmountAdd(product)}>
                    <PlusIconHi />
                  </button>
                  <button
                    className={cart_amount_min}
                    onClick={() => handleCartAmountMinus(product)}
                  >
                    <MinusIconHi />
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <div className={cart_total_price}>
        Total Price: <strong>{totalPrice} €</strong>
      </div> */}
      <>{totalPriceEl}</>
      {/* <button className={cart_btn_pay} type="button" onClick={handleClick}>
        Pay now
      </button> */}
      <>{cartBtnPayEl}</>
    </div>
  );
}

export default Cart;
