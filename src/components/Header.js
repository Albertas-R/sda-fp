import React from "react";

import styles from "./Header.module.css";

function Header() {
  const { header, header_container, logo, main_nav, main_nav_list, main_nav_link } = styles;

  return (
    <header className={header}>
      <div className={header_container}>
        <a className={logo} href="#">
          Logo
        </a>

        <nav className={main_nav}>
          <ul className={main_nav_list}>
            <li>
              <a className={main_nav_link} href="#">
                Shop
              </a>
            </li>
            <li>
              <a className={main_nav_link} href="#">
                Kontaktai
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
