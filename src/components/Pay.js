import { React, useState, useEffect } from "react";

import styles from "./Pay.module.css";

function Pay() {
  const { pay, pay_container, pay_form_group, pay_label, pay_input, pay_btn, pay_form_error } =
    styles;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isNameError, setIsNameError] = useState(false);
  const [isNameTouched, setIsNameTouched] = useState(false);

  const [isAddressError, setIsAddressError] = useState(false);
  const [isAddressTouched, setIsAddressTouched] = useState(false);

  const [isPhoneError, setIsPhoneError] = useState(false);
  const [isPhoneTouched, setIsPhoneTouched] = useState(false);

  const [isEmailError, setIsEmailError] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  // console.log({ name, adress, phone, email });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, address, phone, email });
  };

  //////////////////////////////// Name Validation
  console.log({ isNameError, isNameTouched });

  const nameValidation = (e) => {
    e.preventDefault();
    console.log(e);

    setName(e.target.value);

    const nameCheck = /^[a-zA-Z0-9\-–.]{2,25}\s[a-zA-Z0-9\-–.]{2,25}$/;
    const isNameValid = nameCheck.test(e.target.value);

    if (!isNameValid && isNameTouched) {
      setIsNameError(true);
    } else setIsNameError(false);

    console.log("----------", { isNameValid, console_NameInputValue: e.target.value });
  };

  const nameValidationOnBlur = (e) => {
    e.preventDefault();
    console.log("Name input onBlur", e);
    setIsNameTouched(true);
  };

  //////////////////////////////// Address Validation
  // console.log({ isAddressError, isAddressTouched });

  const addressValidation = (e) => {
    e.preventDefault();
    console.log(e);

    setAddress(e.target.value);

    const addressCheck = /^[a-zA-Z0-9\-–_.\s]{2,150}$/;
    const isAddressValid = addressCheck.test(e.target.value);

    if (!isAddressValid && isAddressTouched) {
      setIsAddressError(true);
    } else setIsAddressError(false);

    console.log("----------", { isAddressValid, console_AddressInputValue: e.target.value });
  };

  const addressValidationOnBlur = (e) => {
    e.preventDefault();
    console.log("Address input onBlur", e);
    setIsAddressTouched(true);
  };

  //////////////////////////////// Phone Validation
  // console.log({ isPhoneError, isPhoneTouched });

  const phoneValidation = (e) => {
    e.preventDefault();
    console.log(e);

    setPhone(e.target.value);

    const phoneCheck = /^[+0-9\-\s]{5,12}$/;
    const isPhoneValid = phoneCheck.test(e.target.value);

    if (!isPhoneValid && isPhoneTouched) {
      setIsPhoneError(true);
    } else setIsPhoneError(false);

    console.log("----------", { isPhoneValid, console_PhoneInputValue: e.target.value });
  };

  const phoneValidationOnBlur = (e) => {
    e.preventDefault();
    console.log("Phone input onBlur", e);
    setIsPhoneTouched(true);
  };

  //////////////////////////////// Email Validation
  // console.log({ isEmailError, isEmailTouched });

  const emailValidation = (e) => {
    e.preventDefault();
    console.log(e);

    setEmail(e.target.value);

    const emailCheck = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    const isEmailValid = emailCheck.test(e.target.value);

    if (!isEmailValid && isEmailTouched) {
      setIsEmailError(true);
    } else setIsEmailError(false);

    console.log("----------", { isEmailValid, console_EmailInputValue: e.target.value });
  };

  const emailValidationOnBlur = (e) => {
    e.preventDefault();
    console.log("Email input onBlur", e);
    setIsEmailTouched(true);
  };

  return (
    <div className={pay}>
      {/* <div className={pay_container}> */}
      <form id="pay-form" onSubmit={handleSubmit}>
        <div className={pay_form_group}>
          <label className={pay_label} htmlFor="name" id="name-label">
            Full Name
          </label>
          <input
            className={pay_input}
            id="name"
            type="text"
            value={name}
            onChange={nameValidation}
            onBlur={nameValidationOnBlur}
            name="name"
            placeholder="Enter your full name"
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
            <span className={pay_form_error}>Wrong address</span>
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
            onChange={phoneValidation}
            onBlur={phoneValidationOnBlur}
            name="phone"
            placeholder="Enter your phone"
          />
          {isPhoneError && isPhoneTouched ? (
            <span className={pay_form_error}>Wrong phone number</span>
          ) : null}
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
            onChange={emailValidation}
            onBlur={emailValidationOnBlur}
            name="email"
            placeholder="Enter your email"
          />
          {isEmailError && isEmailTouched ? (
            <span className={pay_form_error}>Wrong email</span>
          ) : null}
        </div>

        {/* <button className={pay_btn} type="submit">
          Pay now
        </button> */}
        <button className={pay_btn} type="submit" disabled>
          Pay now
        </button>
      </form>
    </div>
    // </div>
  );
}

export default Pay;
