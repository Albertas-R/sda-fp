import React from "react";

import styles from "./Footer.module.css";

function Footer() {
  const { contacts, contacts_container, contacts_mob, contacts_email } = styles;

  return (
    <footer className={contacts} id="contacts">
      <div className={contacts_container}>
        <a className={contacts_mob} href="tel:+37068605132">
          Mob. phone
        </a>
        <a className={contacts_email} href="mailto:albertas.rinkevicius@gmail.com">
          E-mail
        </a>
      </div>
    </footer>
  );
}

export default Footer;
