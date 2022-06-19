import { React, useState } from "react";

import styles from "./Pay.module.css";

function Pay() {
  const { pay, pay_container, pay_form_group, pay_label, pay_input, pay_btn } = styles;

  const [nameInput, setNameInput] = useState("");
  // console.log(nameInput);

  const handleClick = () => {
    console.log("pay_btn clicked");
  };

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
            // value={nameInput}
            // onChange={setNameInput(nameInput.target.value))}
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
            required
          />
        </div>
        <button className={pay_btn} type="submit" onClick={handleClick}>
          Pay now
        </button>
      </form>
    </div>
    // </div>
  );
}

export default Pay;
