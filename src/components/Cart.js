import React, { useContext } from "react";
import { CartItemsContext } from "./CartItemsContext";
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

  const context = useContext(CartItemsContext);

  // potencialiai galima cia panaudoti useMemo
  const productsInCart = context.cartItems.reduce((acc, currentCartItem) => {
    const checkItem = products.find((product) => product.id === currentCartItem.id);

    if (checkItem) {
      const productWithAmount = { ...currentCartItem, ...checkItem };
      acc.push(productWithAmount);
    }
    return acc;
  }, []);

  const totalPrice = productsInCart.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.amount;
  }, 0);

  const totalItems = productsInCart.reduce((acc, currentItem) => {
    return acc + currentItem.amount;
  }, 0);

  const handleCartAmountAdd = (id) => {
    context.addCartItems(id);
  };

  const handleCartAmountMinus = (id) => {
    context.removeCartItems(id);
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
        Proceed to Checkout{" "}
        <span>
          ({totalItems} {totalItems > 1 ? "items" : "item"})
        </span>
      </button>
    ) : null;

  return (
    <div className={cart}>
      <ul className={cart_list}>
        {productsInCart.map((product) => {
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
                  <button
                    className={cart_amount_add}
                    // onClick={() => handleCartAmountAdd(product.id)}
                    onClick={() => context.updateCartItems(product.id)}
                  >
                    <PlusIconHi />
                  </button>
                  <button
                    className={cart_amount_min}
                    // onClick={() => handleCartAmountMinus(product.id)}
                    onClick={() => context.updateCartItems(product.id, true)}
                  >
                    <MinusIconHi />
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <>{totalPriceEl}</>
      <>{cartBtnPayEl}</>
    </div>
  );
}

export default React.memo(Cart);
