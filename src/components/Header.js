import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.css";

function Header() {
  const { header, header_container, logo, main_nav, main_nav_list, main_nav_link, active } = styles;

  return (
    <header className={header}>
      <div className={header_container}>
        <NavLink to="/" className={logo}>
          Home
        </NavLink>

        <nav className={main_nav}>
          <ul className={main_nav_list}>
            <li>
              <NavLink
                to="/"
                className={(isActive) => {
                  console.log({ isActive });
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
                  console.log({ isActive });
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
                  console.log({ isActive });
                  return isActive.isActive ? `${main_nav_link} ${active}` : main_nav_link;
                }}
              >
                Pay
              </NavLink>
            </li>
            <li>
              {/* <NavLink to="/cart" className={main_nav_link}>
                Cart
              </NavLink> */}

              <NavLink
                to="/cart"
                className={(isActive) => {
                  console.log({ isActive });
                  return isActive.isActive ? `${main_nav_link} ${active}` : main_nav_link;
                }}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
