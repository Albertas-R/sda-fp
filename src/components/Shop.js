import React from "react";

import styles from "./Shop.module.css";

function Shop() {
  const { shop, shop_container, shop_txt } = styles;

  return (
    <section className={shop}>
      <div className={shop_container}>
        <p className={shop_txt}>Shop page</p>
      </div>
    </section>
  );
}

export default Shop;
