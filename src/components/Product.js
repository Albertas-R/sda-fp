import React, { useContext } from "react";
import { CartItemsContext } from "./CartItemsContext";
import { useParams } from "react-router-dom";

import { Circles } from "react-loader-spinner";

import styles from "./Product.module.css";

function Product({ products }) {
  console.log("******************** Rendering Product Component ********************");

  console.log({ products });

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
  console.log("productId ---->>>>", { productId });

  const context = useContext(CartItemsContext);
  // console.log("----- context from Product", { context });

  const currentProduct = products.find((product) => {
    if (Number(productId) === product.id) return true;
    return false;
  });
  console.log("currentProduct ---------- from Product", { currentProduct });

  // const handleAddToCart = (id) => {
  //   context.addCartItems(id);
  // };

  if (!currentProduct) {
    // return null;
    return <Circles height="100" width="100" color="grey" ariaLabel="loading" />;
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
