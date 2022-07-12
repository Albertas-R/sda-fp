import React from "react";

import { HeroIconGi } from "./Icons";

import styles from "./Hero.module.css";

function Hero() {
  console.log("******************** Rendering Hero Component ********************");

  const { hero, hero_container, hero_txt } = styles;

  return (
    <div className={hero}>
      <div className={hero_container}>
        <p className={hero_txt}>
          <HeroIconGi />
          Hero page
        </p>
      </div>
    </div>
  );
}

export default React.memo(Hero);
