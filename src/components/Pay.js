import React from "react";

import styles from "./Pay.module.css";

function Pay() {
  const { pay, pay_container, pay_txt } = styles;

  return (
    <div className={pay}>
      <div className={pay_container}>
        <p className={pay_txt}>pay page</p>
      </div>
    </div>
  );
}

export default Pay;
