import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.css";

function Header() {
  const { header, header_container, logo, main_nav, main_nav_list, main_nav_link } = styles;

  return (
    <header className={header}>
      <div className={header_container}>
        <NavLink to="/" className={logo}>
          Home
        </NavLink>

        <nav className={main_nav}>
          <ul className={main_nav_list}>
            <li>
              <NavLink to="/" className={main_nav_link}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className={main_nav_link}>
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink to="/pay" className={main_nav_link}>
                Pay
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={main_nav_link}>
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
