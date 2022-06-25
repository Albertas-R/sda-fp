import { React } from "react";

import Hero from "./Hero";
import ProductCard from "./ProductCard";

import styles from "./ProductList.module.css";

function ProductList({ products }) {
  const { product_list } = styles;

  return (
    <>
      <Hero />

      <ul className={product_list} id="product_list">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ul>
    </>
  );
}

export default ProductList;
