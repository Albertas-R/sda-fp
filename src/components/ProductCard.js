import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "./CartItemsContext";

import styles from "./ProductList.module.css";

function ProductCard({ product }) {
  const {
    product_img_box,
    product_info_box,
    product_card,
    product_card_img,
    product_title,
    product_price,
    product_btn,
  } = styles;

  const context = useContext(CartItemsContext);

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
          <button
            className={product_btn}
            type="button"
            onClick={() => context.updateCartItems(product.id)}
          >
            Add to Cart
          </button>
        </div>
      </li>
    </>
  );
}

export default React.memo(ProductCard);
