import { React, useState } from "react";

import styles from "./Pay.module.css";

function Pay() {
  const { pay, pay_container, pay_form_group, pay_label, pay_input, pay_btn, pay_form_error } =
    styles;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isNameError, setNameError] = useState(false);
  const [isAddressError, setAddressError] = useState(false);

  const [isNameTouched, setIsNameTouched] = useState(false);
  const [isAddressTouched, setIsAddressTouched] = useState(false);

  // console.log({ name, adress, phone, email });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, address, phone, email });
  };

  //////////////////////////////// Name Validation
  const nameValidation = (e) => {
    e.preventDefault();
    // console.log(e);

    setName(e.target.value);

    const nameCheck = /^[a-zA-Z0-9\-–]{2,25}\s[a-zA-Z0-9\-–]{2,25}$/;
    const isNameValid = nameCheck.test(e.target.value);

    if (isNameValid === false) {
      setNameError(true);
    } else setNameError(false);

    console.log({ isNameValid, temp: e.target.value });
  };
  const nameValidationOnBlur = (e) => {
    e.preventDefault();
    // console.log(e);

    setIsNameTouched(true);
  };

  //////////////////////////////// Address Validation
  const addressValidation = (e) => {
    e.preventDefault();
    // console.log(e);

    setAddress(e.target.value);

    const addressCheck = /^[a-zA-Z0-9\-–]{2,100}$/;
    const isAddressValid = addressCheck.test(e.target.value);

    if (isAddressValid === false) {
      setAddressError(true);
    } else setAddressError(false);

    console.log({ isAddressValid, temp: e.target.value });
  };
  const addressValidationOnBlur = (e) => {
    e.preventDefault();
    // console.log(e);

    setIsAddressTouched(true);
  };

  return (
    <div className={pay}>
      {/* <div className={pay_container}> */}
      <form id="pay-form" onSubmit={handleSubmit}>
        <div className={pay_form_group}>
          <label className={pay_label} htmlFor="name" id="name-label">
            Name
          </label>
          <input
            className={pay_input}
            id="name"
            type="text"
            value={name}
            onChange={nameValidation}
            onBlur={nameValidationOnBlur}
            name="name"
            placeholder="Enter your name"
          />

          {isNameError && isNameTouched ? <span className={pay_form_error}>Wrong name</span> : null}
        </div>

        <div className={pay_form_group}>
          <label className={pay_label} htmlFor="address" id="adress-label">
            Address
          </label>
          <input
            className={pay_input}
            id="address"
            type="text"
            value={address}
            onChange={addressValidation}
            onBlur={addressValidationOnBlur}
            name="address"
            placeholder="Enter your address"
          />

          {isAddressError && isAddressTouched ? (
            <span className={pay_form_error}>Wrong name</span>
          ) : null}
        </div>

        <div className={pay_form_group}>
          <label className={pay_label} htmlFor="phone" id="phone-label">
            Phone
          </label>
          <input
            className={pay_input}
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            placeholder="Enter your phone"
          />
          <span className={pay_form_error}>Wrong phone number</span>
        </div>

        <div className={pay_form_group}>
          <label className={pay_label} htmlFor="email" id="email-label">
            Email
          </label>
          <input
            className={pay_input}
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter your email"
          />
          <span className={pay_form_error}>Wrong email</span>
        </div>
        <button className={pay_btn} type="submit">
          Pay now
        </button>
        {/* <button className={pay_btn} type="submit" disabled>
          Pay now
        </button> */}
      </form>
    </div>
    // </div>
  );
}

export default Pay;
