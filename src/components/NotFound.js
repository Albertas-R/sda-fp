import React from "react";

import styles from "./NotFound.module.css";

function NotFound() {
  const { not_found, not_found_container, not_found_txt } = styles;

  return (
    <div className={not_found}>
      <div className={not_found_container}>
        <p className={not_found_txt}>not found page</p>
      </div>
    </div>
  );
}

export default NotFound;
