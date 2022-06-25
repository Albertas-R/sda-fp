import { React, useState } from "react";

import Hero from "./Hero";
import ProductCard from "./ProductCard";

import styles from "./ProductList.module.css";

function ProductList({ products }) {
  // console.log(products);

  const { product_list, product_search } = styles;

  const [searchField, setSearchField] = useState("");
  // console.log(searchField);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <Hero />

      <input
        type="search"
        placeholder="Search products"
        onChange={(e) => setSearchField(e.target.value)}
        className={product_search}
      />

      <ul className={product_list} id="product_list">
        {/* {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })} */}
        {filteredProducts.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ul>
    </>
  );
}

export default ProductList;
