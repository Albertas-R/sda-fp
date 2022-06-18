import React from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };

  let { productId } = useParams();
  console.log(productId);

  const item = products.find((el) => {
    if (Number(productId) === el.id) return true;
    return false;
  });
  console.log(item);

  return (
    <div className={product}>
      <div className={image_container}>
        <img className={product_image} src={item.images[0]} alt="" />
      </div>
      <div className={description_container}>
        <p className={product_title}>{item.title}</p>
        <p className={product_description}>{item.description}</p>
        <div className={price_container}>
          <p className={product_price}>{item.price} €</p>
          <button className={product_btn} type="button" onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
