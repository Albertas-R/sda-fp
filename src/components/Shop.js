import React from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "./Hero";
import ProductList from "./ProductList";
import Product from "./Product";
import Cart from "./Cart";
import Pay from "./Pay";
import NotFound from "./NotFound";

import styles from "./Shop.module.css";

function Shop() {
  const { shop, shop_container, shop_txt } = styles;

  return (
    <section className={shop} id="shop">
      <div className={shop_container}>
        <Routes>
          <Route path="/" element={<ProductList />}>
            <Route index element={<Hero />} />
          </Route>
          {/* <Route path="hero" element={<Hero />} /> */}
          <Route path="product" element={<Product />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pay" element={<Pay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}

export default Shop;
