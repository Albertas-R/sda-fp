import React from "react";

import styles from "./Hero.module.css";

function Hero() {
  const { hero, hero_container, hero_txt } = styles;

  return (
    <div className={hero}>
      {/* <div className={hero_container}> */}
        <p className={hero_txt}>hero page</p>
      {/* </div> */}
    </div>
  );
}

export default Hero;
