import { React, useState, useEffect } from "react";

import { PhoneIconFaPay, PhoneIconFaPayError } from "./Icons";

import styles from "./Pay.module.css";

function Pay() {
  const {
    pay,
    pay_form_item,
    pay_label,
    pay_input,
    pay_input_error,
    pay_btn,
    pay_form_error,
    fa_form_icon,
    fa_form_icon_error,
  } = styles;

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [isAddressTouched, setIsAddressTouched] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isPhoneTouched, setIsPhoneTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
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

    const twoWordCheck = /^[a-zA-Z\-–.]{2,25}\s+[a-zA-Z\-–.]{2,25}$/;
    const allowedCharacters = /[a-zA-Z\-–.\s]+/g;
    const invalidCharactersInName = e.target.value.replace(allowedCharacters, "");
    const hasSpacesInBeginAndEnd = /^\s+|\s+$/;

    if (invalidCharactersInName) {
      setNameError("Please enter full name (it can only contain letters, hyphens and period).");
      return;
    }
    if (hasSpacesInBeginAndEnd.test(e.target.value)) {
      setNameError("There can't be spaces at the begining and end.");
      return;
    }
    if (!twoWordCheck.test(e.target.value)) {
      setNameError("Please enter first and second name.");
      return;
    }
    setNameError("");
  };

  const nameHandleOnBlur = (e) => {
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
      setAddressError("Please enter address.");
      return;
    }
    setAddressError("");
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

    const phoneCheck = /^\+?[0-9\-\s]{7,24}$/;
    const isPhoneValid = phoneCheck.test(e.target.value);
    const validCharacters = /[0-9+\-\s]/g;
    const multipleSpaces = /\s\s/;
    const invalidCharactersInPhone = e.target.value.replace(validCharacters, "");

    if (invalidCharactersInPhone) {
      setPhoneError("Phone number must contain numbers and spaces.");
      return;
    }
    if (!isPhoneValid) {
      setPhoneError("Please enter phone number.");
      return;
    }
    if (multipleSpaces.test(e.target.value)) {
      setPhoneError("There can't be multiple spaces.");
      return;
    }
    setPhoneError("");
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
    const hasSpaces = /\s+/g;

    if (hasSpaces.test(e.target.value)) {
      setEmailError("There can't be any space.");
      return;
    }

    if (!isEmailValid) {
      setEmailError("Please enter email (example: mail@mail.com).");
      return;
    }
    setEmailError("");
  };

  const emailValidationOnBlur = (e) => {
    e.preventDefault();
    setIsEmailTouched(true);
  };

  return (
    <div className={pay}>
      <form id="pay-form" onSubmit={handleSubmit}>
        <div className={pay_form_item}>
          <label className={pay_label} htmlFor="name" id="name-label">
            Full Name
          </label>
          <input
            className={nameError && isNameTouched ? pay_input_error : pay_input}
            id="name"
            type="text"
            value={name}
            onChange={nameValidation}
            onBlur={nameHandleOnBlur}
            onClick={nameValidation}
            name="name"
            placeholder="Enter your full name"
          />
          {/* https://fontawesome.com/v4/icons/ */}
          <i
            className={`fa fa-user ${
              nameError && isNameTouched ? fa_form_icon_error : fa_form_icon
            }`}
            aria-hidden="true"
          ></i>
          {nameError && isNameTouched && <span className={pay_form_error}>{nameError}</span>}
        </div>

        <div className={pay_form_item}>
          <label className={pay_label} htmlFor="address" id="adress-label">
            Address
          </label>
          <input
            className={addressError && isAddressTouched ? pay_input_error : pay_input}
            id="address"
            type="text"
            value={address}
            onChange={addressValidation}
            onBlur={addressValidationOnBlur}
            onClick={addressValidation}
            name="address"
            placeholder="Enter your address"
          />
          <i
            className={`fa fa-map-marker ${
              addressError && isAddressTouched ? fa_form_icon_error : fa_form_icon
            }`}
            aria-hidden="true"
          ></i>
          {addressError && isAddressTouched ? (
            <span className={pay_form_error}>{addressError}</span>
          ) : null}
        </div>

        <div className={pay_form_item}>
          <label className={pay_label} htmlFor="phone" id="phone-label">
            Phone
          </label>
          <input
            className={phoneError && isPhoneTouched ? pay_input_error : pay_input}
            id="phone"
            type="text"
            value={phone}
            onChange={phoneValidation}
            onBlur={phoneValidationOnBlur}
            onClick={phoneValidation}
            name="phone"
            placeholder="Enter your phone"
          />

          {/* <i
            className={`fa fa-phone ${
              phoneError && isPhoneTouched ? fa_form_icon_error : fa_form_icon
            }`}
            aria-hidden="true"
          ></i> */}
          {phoneError && isPhoneTouched ? <PhoneIconFaPayError /> : <PhoneIconFaPay />}

          {phoneError && isPhoneTouched ? (
            <span className={pay_form_error}>{phoneError}</span>
          ) : null}
        </div>

        <div className={pay_form_item}>
          <label className={pay_label} htmlFor="email" id="email-label">
            Email
          </label>
          <input
            className={emailError && isEmailTouched ? pay_input_error : pay_input}
            id="email"
            type="text"
            value={email}
            onChange={emailValidation}
            onBlur={emailValidationOnBlur}
            onClick={emailValidation}
            name="email"
            placeholder="Enter your email"
          />
          <i
            className={`fa fa-envelope ${
              emailError && isEmailTouched ? fa_form_icon_error : fa_form_icon
            }`}
            aria-hidden="true"
          ></i>
          {emailError && isEmailTouched ? (
            <span className={pay_form_error}>{emailError}</span>
          ) : null}
        </div>

        <button
          className={pay_btn}
          type="submit"
          disabled={
            (nameError && isNameTouched) ||
            (addressError && isAddressTouched) ||
            (phoneError && isPhoneTouched) ||
            (emailError && isEmailTouched) ||
            !isNameTouched ||
            !isAddressTouched ||
            !isPhoneTouched ||
            !isEmailTouched
              ? true
              : false
          }
        >
          Pay now
        </button>
      </form>
    </div>
  );
}

export default Pay;
