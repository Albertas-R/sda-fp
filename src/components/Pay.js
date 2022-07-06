import { React, useState, useEffect } from "react";

import styles from "./Pay.module.css";

function Pay() {
  const {
    pay,
    pay_container,
    pay_form_group,
    pay_label,
    pay_input,
    pay_input_error,
    pay_btn,
    pay_form_error,
    fa_form_icon,
    fa_form_icon_error,
  } = styles;

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

  // console.log({ name, address, phone, email });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, address, phone, email });

    localStorage.clear();
    setName("");
    setAddress("");
    setPhone("");
    setEmail("");
  };

  //////////////////////////////// Name Validation
  // console.log({ isNameError, isNameTouched });

  const nameValidation = (e) => {
    e.preventDefault();

    setName(e.target.value);

    const nameCheck = /^[a-zA-Z0-9\-–.]{2,25}\s[a-zA-Z0-9\-–.]{2,25}$/;
    const isNameValid = nameCheck.test(e.target.value);

    if (!isNameValid) {
      setIsNameError(true);
    } else {
      setIsNameError(false);
    }
    // console.log("----------", { isNameValid, console_NameInputValue: e.target.value });
  };

  const nameValidationOnClick = (e) => {
    if (name === "") {
      setIsNameError(true);
    }
  };

  const nameValidationOnBlur = (e) => {
    e.preventDefault();
    setIsNameTouched(true);
  };

  //////////////////////////////// Address Validation
  // console.log({ isAddressError, isAddressTouched });

  const addressValidation = (e) => {
    e.preventDefault();

    setAddress(e.target.value);

    const addressCheck = /^[a-zA-Z0-9\-–_.\s]{2,150}$/;
    const isAddressValid = addressCheck.test(e.target.value);

    if (!isAddressValid) {
      setIsAddressError(true);
    } else setIsAddressError(false);
    // console.log("----------", { isAddressValid, console_AddressInputValue: e.target.value });
  };

  const addressValidationOnClick = (e) => {
    if (address === "") {
      setIsAddressError(true);
    }
  };

  const addressValidationOnBlur = (e) => {
    e.preventDefault();
    setIsAddressTouched(true);
  };

  //////////////////////////////// Phone Validation
  // console.log({ isPhoneError, isPhoneTouched });

  const phoneValidation = (e) => {
    e.preventDefault();

    setPhone(e.target.value);

    const phoneCheck = /^[+0-9\-\s]{5,12}$/;
    const isPhoneValid = phoneCheck.test(e.target.value);

    if (!isPhoneValid) {
      setIsPhoneError(true);
    } else setIsPhoneError(false);
    // console.log("----------", { isPhoneValid, console_PhoneInputValue: e.target.value });
  };

  const phoneValidationOnClick = (e) => {
    if (phone === "") {
      setIsPhoneError(true);
    }
  };

  const phoneValidationOnBlur = (e) => {
    e.preventDefault();
    setIsPhoneTouched(true);
  };

  //////////////////////////////// Email Validation
  // console.log({ isEmailError, isEmailTouched });

  const emailValidation = (e) => {
    e.preventDefault();

    setEmail(e.target.value);

    const emailCheck = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    const isEmailValid = emailCheck.test(e.target.value);

    if (!isEmailValid) {
      setIsEmailError(true);
    } else setIsEmailError(false);
    // console.log("----------", { isEmailValid, console_EmailInputValue: e.target.value });
  };

  const emailValidationOnClick = (e) => {
    if (email === "") {
      setIsEmailError(true);
    }
  };

  const emailValidationOnBlur = (e) => {
    e.preventDefault();
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
            className={isNameError && isNameTouched ? pay_input_error : pay_input}
            id="name"
            type="text"
            value={name}
            onChange={nameValidation}
            onBlur={nameValidationOnBlur}
            onClick={nameValidationOnClick}
            name="name"
            placeholder="Enter your full name"
          />
          {/* https://fontawesome.com/v4/icons/ */}
          <i
            className={`fa fa-user ${isNameError && isNameTouched ? fa_form_icon_error : fa_form_icon}`}
            aria-hidden="true"
          ></i>
          {isNameError && isNameTouched ? <span className={pay_form_error}>Wrong name</span> : null}
        </div>

        <div className={pay_form_group}>
          <label className={pay_label} htmlFor="address" id="adress-label">
            Address
          </label>
          <input
            className={isAddressError && isAddressTouched ? pay_input_error : pay_input}
            id="address"
            type="text"
            value={address}
            onChange={addressValidation}
            onBlur={addressValidationOnBlur}
            onClick={addressValidationOnClick}
            name="address"
            placeholder="Enter your address"
          />
          <i
            className={`fa fa-map-marker ${
              isAddressError && isAddressTouched ? fa_form_icon_error : fa_form_icon
            }`}
            aria-hidden="true"
          ></i>
          {isAddressError && isAddressTouched ? (
            <span className={pay_form_error}>Wrong address</span>
          ) : null}
        </div>

        <div className={pay_form_group}>
          <label className={pay_label} htmlFor="phone" id="phone-label">
            Phone
          </label>
          <input
            className={isPhoneError && isPhoneTouched ? pay_input_error : pay_input}
            id="phone"
            type="text"
            value={phone}
            onChange={phoneValidation}
            onBlur={phoneValidationOnBlur}
            onClick={phoneValidationOnClick}
            name="phone"
            placeholder="Enter your phone"
          />
          <i
            className={`fa fa-phone ${isPhoneError && isPhoneTouched ? fa_form_icon_error : fa_form_icon}`}
            aria-hidden="true"
          ></i>
          {isPhoneError && isPhoneTouched ? (
            <span className={pay_form_error}>Wrong phone number</span>
          ) : null}
        </div>

        <div className={pay_form_group}>
          <label className={pay_label} htmlFor="email" id="email-label">
            Email
          </label>
          <input
            className={isEmailError && isEmailTouched ? pay_input_error : pay_input}
            id="email"
            type="text"
            value={email}
            onChange={emailValidation}
            onBlur={emailValidationOnBlur}
            onClick={emailValidationOnClick}
            name="email"
            placeholder="Enter your email"
          />
          <i
            className={`fa fa-envelope ${isEmailError && isEmailTouched ? fa_form_icon_error : fa_form_icon}`}
            aria-hidden="true"
          ></i>
          {isEmailError && isEmailTouched ? (
            <span className={pay_form_error}>Wrong email</span>
          ) : null}
        </div>

        <button
          className={pay_btn}
          type="submit"
          disabled={
            (isNameError && isNameTouched) ||
            (isAddressError && isAddressTouched) ||
            (isPhoneError && isPhoneTouched) ||
            (isEmailError && isEmailTouched) ||
            (!isNameTouched && !isAddressTouched && !isPhoneTouched && !isEmailTouched)
              ? true
              : false
          }
        >
          Pay now
        </button>
      </form>
    </div>
    // </div>
  );
}

export default Pay;
