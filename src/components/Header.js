import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

function Header() {
  const { header, header_container, logo, main_nav, main_nav_list, main_nav_link } = styles;

  return (
    <header className={header}>
      <div className={header_container}>
        <Link to="/" className={logo}>
          Logo
        </Link>

        <nav className={main_nav}>
          <ul className={main_nav_list}>
            <li>
              <Link to="/" className={main_nav_link}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contacts" className={main_nav_link}>
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/cart" className={main_nav_link}>
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
