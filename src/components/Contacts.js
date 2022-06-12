import React from "react";

import styles from "./Contacts.module.css";

function Contacts() {
  const { contacts, contacts_container, contacts_mob, contacts_email } = styles;

  return (
    <footer className={contacts}>
      <div className={contacts_container}>
        <a className={contacts_mob} href="tel:+37068605132">
          +370 686 05132
        </a>
        <a className={contacts_email} href="mailto:albertas.rinkevicius@gmail.com">
        albertas.rinkevicius@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Contacts;
