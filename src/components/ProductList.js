import { React, useState } from "react";

import Hero from "./Hero";
import ProductCard from "./ProductCard";

import { AscendingIconTb, DescendingIconTb } from "./Icons";

import styles from "./ProductList.module.css";

function ProductList({ products }) {
  // console.log(products);

  const {
    product_list,
    product_search_filter_container,
    product_filter_container,
    product_search,
    product_filter_btn,
  } = styles;

  const [searchField, setSearchField] = useState("");
  // console.log(searchField);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchField.toLowerCase())
  );

  const sortAscending = () => {
    const sortedAscending = products.sort((a, b) =>
      a.title.toUpperCase().localeCompare(b.title.toUpperCase())
    );
    console.log({ sortedAscending });
  };

  const sortDescending = () => {
    const sortedDescending = products.sort((a, b) =>
      b.title.toUpperCase().localeCompare(a.title.toUpperCase())
    );
    console.log({ sortedDescending });
  };

  return (
    <>
      <Hero />

      <div className={product_search_filter_container}>
        <input
          type="search"
          placeholder="Search products"
          onChange={(e) => setSearchField(e.target.value)}
          className={product_search}
        />
        <div className={product_filter_container}>
          <button className={product_filter_btn} onClick={sortAscending}>
            <AscendingIconTb />
          </button>
          <button className={product_filter_btn} onClick={sortDescending}>
            <DescendingIconTb />
          </button>
        </div>
      </div>

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
