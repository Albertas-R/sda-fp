import React from "react";

import styles from "./NotFound.module.css";

function NotFound() {
  console.log("******************** Rendering NotFound Component ********************");

  const { not_found, not_found_container, not_found_txt } = styles;

  return (
    <div className={not_found}>
      <div className={not_found_container}>
        <p className={not_found_txt}>Page not found</p>
      </div>
    </div>
  );
}

export default React.memo(NotFound);
