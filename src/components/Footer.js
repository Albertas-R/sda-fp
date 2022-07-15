import React from "react";

import { PhoneIconSvg, EmailIconSvg } from "./MuiIcons";
import { PhoneIconFa, EmailIconFa } from "./Icons";

import styles from "./Footer.module.css";

function Footer() {
  const { contacts, contacts_container, contacts_mob, contacts_email } = styles;

  return (
    <footer className={contacts} id="contacts">
      <div className={contacts_container}>
        <a className={contacts_mob} href="tel:+37068605132">
          {/* <PhoneIconSvg /> */}
          <PhoneIconFa />
          Mob. phone
        </a>
        <a className={contacts_email} href="mailto:albertas.rinkevicius@gmail.com">
          {/* <EmailIconSvg /> */}
          <EmailIconFa />
          Email
        </a>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
