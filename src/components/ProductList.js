import React, { useState, useMemo } from "react";

import Hero from "./Hero";
import ProductCard from "./ProductCard";

import {
  AscendingIconBs,
  DescendingIconBs,
  NumberAscendingIconBs,
  NumberDescendingIconBs,
  AscendingIconTb,
  DescendingIconTb,
} from "./Icons";

import styles from "./ProductList.module.css";

const sortOptions = {
  OFF: "off",
  ASCENDING: "ascending",
  DESCENDING: "descending",
  PRICE_ASCENDING: "priceAscending",
  PRICE_DESCENDING: "priceDescending",
};

function ProductList({ products }) {
  console.log("******************** Rendering ProductList Component ********************");

  // console.log({ products });

  const {
    product_list,
    product_search_filter_container,
    product_filter_container,
    sort_by_title_container,
    sort_by_price_container,
    product_search,
    fa_search_icon,
    product_filter_btn,
  } = styles;

  const [searchField, setSearchField] = useState("");
  // console.log(searchField);

  const [sort, setSort] = useState(sortOptions.OFF);
  // console.log({ sort });

  // const filteredProducts = products.filter((product) =>
  //   product.title.toLowerCase().includes(searchField.toLowerCase())
  // );
  const filteredProducts = useMemo(
    () =>
      products.filter((product) => product.title.toLowerCase().includes(searchField.toLowerCase())),
    [products, searchField]
  );

  if (sort === sortOptions.ASCENDING) {
    filteredProducts.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  }
  if (sort === sortOptions.DESCENDING) {
    filteredProducts.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
  }
  if (sort === sortOptions.PRICE_ASCENDING) {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (sort === sortOptions.PRICE_DESCENDING) {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  // console.log({ filteredProducts });

  const sortAscending = () => {
    setSort(sortOptions.ASCENDING);
  };

  const sortDescending = () => {
    setSort(sortOptions.DESCENDING);
  };

  const sortPriceAscending = () => {
    setSort(sortOptions.PRICE_ASCENDING);
  };

  const sortPriceDescending = () => {
    setSort(sortOptions.PRICE_DESCENDING);
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
        <i className={`fa fa-search ${fa_search_icon}`} aria-hidden="true"></i>
        <div className={product_filter_container}>
          <div className={sort_by_title_container}>
            <button className={product_filter_btn} onClick={sortAscending}>
              <AscendingIconBs />
              {/* <AscendingIconTb /> */}
            </button>
            <button className={product_filter_btn} onClick={sortDescending}>
              <DescendingIconBs />
              {/* <DescendingIconTb /> */}
            </button>
          </div>

          <div className={sort_by_price_container}>
            <button className={product_filter_btn} onClick={sortPriceAscending}>
              <NumberAscendingIconBs />
            </button>
            <button className={product_filter_btn} onClick={sortPriceDescending}>
              <NumberDescendingIconBs />
            </button>
          </div>
        </div>
      </div>

      <ul className={product_list} id="product_list">
        {filteredProducts.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ul>
    </>
  );
}

export default React.memo(ProductList);
