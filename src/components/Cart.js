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

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
  // console.log("cartItems ---------------", cartItems);

  const productsInCart = cartItems.reduce((acc, currentCartItem) => {
    const checkItem = products.find((product) => product.id === currentCartItem.id);

    if (checkItem) {
      const productWithAmount = { ...currentCartItem, ...checkItem };
      acc.push(productWithAmount);
    }
    return acc;
  }, []);
  // console.log("productsInCart ----------", productsInCart);

  const totalPrice = productsInCart.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.amount;
  }, 0);

  const handleCartAmountAdd = (productId) => {
    setCartItems((prevState) => {
      // Copy of previous state
      // const newState = JSON.parse(JSON.stringify(prevState));
      const newState = prevState.map((item) => ({ ...item }));

      const checkItem = newState.find((item) => item.id === productId);

      checkItem.amount++;

      console.log("btn ADD", { newState, checkItem });

      localStorage.setItem("cartItems", JSON.stringify(newState));

      return newState;
    });
  };

  const handleCartAmountMinus = (productId) => {
    setCartItems((prevState) => {
      // Copy of previous state
      // const newState = JSON.parse(JSON.stringify(prevState));
      const newState = prevState.map((item) => ({ ...item }));

      const checkItemIndex = newState.findIndex((item) => item.id === productId);

      const checkItem = newState[checkItemIndex];

      if (checkItem.amount === 1) {
        newState.splice(checkItemIndex, 1);
      } else {
        checkItem.amount--;
      }

      console.log("btn MINUS", { newState, checkItemIndex, checkItem });

      localStorage.setItem("cartItems", JSON.stringify(newState));

      return newState;
    });
  };

  const totalPriceEl =
    totalPrice > 0 ? (
      <div className={cart_total_price}>
        Total Price: <strong>{totalPrice} €</strong>
      </div>
    ) : (
      <div className={cart_total_price_empty}>Cart is empty.</div>
    );

  const cartBtnPayEl =
    totalPrice > 0 ? (
      <button className={cart_btn_pay} type="button" onClick={handleClick}>
        Proceed to Checkout
      </button>
    ) : null;

  return (
    <div className={cart}>
      <ul className={cart_list}>
        {productsInCart.map((product) => {
          // console.log(product);
          return (
            <li className={cart_list_li} key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img className={cart_list_li_img} src={product.images[0]} alt="" />
              </Link>
              <Link to={`/product/${product.id}`} className={cart_title}>
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
                  <button
                    className={cart_amount_add}
                    onClick={() => handleCartAmountAdd(product.id)}
                  >
                    <PlusIconHi />
                  </button>
                  <button
                    className={cart_amount_min}
                    onClick={() => handleCartAmountMinus(product.id)}
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
