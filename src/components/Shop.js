import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import ProductList from "./ProductList";
import Product from "./Product";
import Cart from "./Cart";
import Pay from "./Pay";
import NotFound from "./NotFound";

import styles from "./Shop.module.css";

function Shop() {
  const { shop, shop_container } = styles;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((products) => setProducts(products.products))
      .catch((error) => console.log(error));
  }, []);

  const [products, setProducts] = useState([]);

  return (
    <section className={shop} id="shop">
      <div className={shop_container}>
        <Routes>
          <Route path="/" element={<ProductList products={products} />}></Route>
          <Route path="product/:productId" element={<Product products={products} />} />
          <Route path="cart" element={<Cart products={products} />} />
          <Route path="pay" element={<Pay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}

export default React.memo(Shop);
