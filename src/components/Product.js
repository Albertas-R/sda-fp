import { React, useContext } from "react";
import { CartItemsContext } from "./CartItemsContext";
import { useParams } from "react-router-dom";

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
  console.log(productId);

  const context = useContext(CartItemsContext);
  // console.log("----- context from Product", { context });

  const currentProduct = products.find((product) => {
    console.log({ product });

    if (Number(productId) === product.id) return true;
    return false;
  });
  console.log({ currentProduct });

  const handleClick = (id) => {
    context.addCartItems(id);

    // const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // const checkItem = cartItems.find((item) => item.id === currentProduct.id);

    // if (checkItem) {
    //   checkItem.amount++;
    // } else {
    //   cartItems.push({ id: currentProduct.id, amount: 1 });
    // }

    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // console.log(cartItems);
  };

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
            onClick={() => handleClick(currentProduct.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
