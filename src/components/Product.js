import React, { useContext } from "react";
import { CartItemsContext } from "./CartItemsContext";
import { useParams } from "react-router-dom";

import FadeLoader from "react-spinners/FadeLoader";

import styles from "./Product.module.css";

function Product({ products }) {
  const {
    product,
    image_container,
    product_image,
    description_container,
    product_title,
    product_description,
    price_container,
    product_price,
    product_btn,
  } = styles;

  let { productId } = useParams();

  const context = useContext(CartItemsContext);

  const currentProduct = products.find((product) => {
    if (Number(productId) === product.id) return true;
    return false;
  });

  const overrideFadeLoader = {
    display: "block",
    margin: "4.8rem auto 0 auto",
  };

  if (!currentProduct) {
    return <FadeLoader color={"#555"} cssOverride={overrideFadeLoader} />;
  }

  return (
    <div className={product}>
      <div className={image_container}>
        <img className={product_image} src={currentProduct.images[0]} alt="" />
      </div>
      <div className={description_container}>
        <p className={product_title}>{currentProduct.title}</p>
        <p className={product_description}>{currentProduct.description}</p>
        <div className={price_container}>
          <p className={product_price}>{currentProduct.price} €</p>
          <button
            className={product_btn}
            type="button"
            onClick={() => context.updateCartItems(currentProduct.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Product);
