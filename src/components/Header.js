import React, { useContext } from "react";
import { CartItemsContext } from "./CartItemsContext";
import { Link, NavLink } from "react-router-dom";

import { CartIconMd, CartOutlineIconMd, FingerprintIconMd } from "./Icons";

import styles from "./Header.module.css";

function Header() {
  console.log("******************** Rendering Header Component ********************");

  const { header, header_container, logo, main_nav, main_nav_list, main_nav_link, active } = styles;

  const context = useContext(CartItemsContext);
  // console.log("----- context from Header", { context });

  const totalItems = context.cartItems.reduce((acc, currentItem) => {
    return acc + currentItem.amount;
  }, 0);
  // console.log("----- totalItems from Header", { totalItems });

  return (
    <header className={header}>
      <div className={header_container}>
        <NavLink to="/" className={logo}>
          <FingerprintIconMd />
          Home
        </NavLink>

        <nav className={main_nav}>
          <ul className={main_nav_list}>
            <li>
              <NavLink
                to="/"
                className={(isActive) => {
                  // console.log({ isActive });
                  return isActive.isActive ? `${main_nav_link} ${active}` : main_nav_link;
                }}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={(isActive) => {
                  return isActive.isActive ? `${main_nav_link} ${active}` : main_nav_link;
                }}
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pay"
                className={(isActive) => {
                  return isActive.isActive ? `${main_nav_link} ${active}` : main_nav_link;
                }}
              >
                Pay
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={(isActive) => {
                  return isActive.isActive ? `${main_nav_link} ${active}` : main_nav_link;
                }}
              >
                {/* <CartIconMd /> */}
                <CartOutlineIconMd />
                Cart
                {totalItems > 0 ? (
                  <span>
                    {" "}
                    ({totalItems} {totalItems > 1 ? "items" : "item"})
                  </span>
                ) : null}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default React.memo(Header);
