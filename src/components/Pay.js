import React from "react";

import styles from "./Pay.module.css";

function Pay() {
  const { pay, pay_container, pay_form_group, pay_label, pay_input } = styles;

  return (
    <div className={pay}>
      {/* <div className={pay_container}> */}
      <form id="pay-form">
        <div className={pay_form_group}>
          <label className={pay_label} htmlFor="name" id="name-label">
            Name
          </label>
          <input
            className={pay_input}
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className={pay_form_group}>
          <label className={pay_label} htmlFor="adress" id="adress-label">
            Adress
          </label>
          <input
            className={pay_input}
            id="adress"
            type="text"
            name="adress"
            placeholder="Enter your adress"
            required
          />
        </div>

        <div className={pay_form_group}>
          <label className={pay_label} htmlFor="phone" id="phone-label">
            Phone
          </label>
          <input
            className={pay_input}
            id="phone"
            type="number"
            name="phone"
            placeholder="Enter your phone"
          />
        </div>

        <div className={pay_form_group}>
          <label className={pay_label} htmlFor="email" id="email-label">
            Email
          </label>
          <input
            className={pay_input}
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
      </form>
    </div>
    // </div>
  );
}

export default Pay;
