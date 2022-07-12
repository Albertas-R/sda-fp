import React from "react";

// https://react-icons.github.io/react-icons
// fa - Font Awesome
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";

// md - Material Design icons
import { MdShoppingCart } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFingerprint } from "react-icons/md";

// hi - Heroicons
import { HiPlusCircle } from "react-icons/hi";
import { HiMinusCircle } from "react-icons/hi";

// gi - Game Icons
import { GiNinjaHeroicStance } from "react-icons/gi";

// tb -Tabler Icons
import { TbSortAscendingLetters } from "react-icons/tb";
import { TbSortDescendingLetters } from "react-icons/tb";

// bs - Bootstrap Icons
import { BsSortAlphaDown } from "react-icons/bs";
import { BsSortAlphaDownAlt } from "react-icons/bs";
import { BsSortNumericDown } from "react-icons/bs";
import { BsSortNumericDownAlt } from "react-icons/bs";

export function AscendingIconBs() {
  const style = {
    fontSize: "2.4rem",
    color: "#277d36",
  };

  return <BsSortAlphaDown style={style} />;
}
export function DescendingIconBs() {
  const style = {
    fontSize: "2.4rem",
    color: "#a82b2b",
  };

  return <BsSortAlphaDownAlt style={style} />;
}
export function NumberAscendingIconBs() {
  const style = {
    fontSize: "2.4rem",
    color: "#277d36",
  };

  return <BsSortNumericDown style={style} />;
}
export function NumberDescendingIconBs() {
  const style = {
    fontSize: "2.4rem",
    color: "#a82b2b",
  };

  return <BsSortNumericDownAlt style={style} />;
}

export function AscendingIconTb() {
  const style = {
    fontSize: "2.4rem",
    color: "#277d36",
  };

  return <TbSortAscendingLetters style={style} />;
}
export function DescendingIconTb() {
  const style = {
    fontSize: "2.4rem",
    color: "#a82b2b",
  };

  return <TbSortDescendingLetters style={style} />;
}

export function PlusIconHi() {
  const style = {
    fontSize: "3rem",
    color: "#37b24d",
  };

  return <HiPlusCircle style={style} />;
}
export function MinusIconHi() {
  const style = {
    fontSize: "3rem",
    color: "#f03e3e",
  };

  return <HiMinusCircle style={style} />;
}

export function PhoneIconFa() {
  const style = {
    // fontSize: "2rem",
    marginRight: "0.8rem",
  };

  return <FaPhoneAlt style={style} />;
}

// .fa_form_icon {
//   font-size: 1.8rem;
//   color: var(--text2);
//   position: absolute;
//   left: 1rem;
//   top: calc(1.8rem + 0.8rem + 1rem);
// }
// .fa_form_icon_error {
//   font-size: 1.8rem;
//   color: red;
//   position: absolute;
//   left: 1rem;
//   top: calc(1.8rem + 0.8rem + 1rem);
// }
export function PhoneIconFaPay() {
  const style = {
    fontSize: "1.8rem",
    color: "var(--text2)",
    position: "absolute",
    left: "1rem",
    top: "calc(1.8rem + 0.8rem + 1rem)",
  };

  return <FaPhoneAlt style={style} />;
}
export function PhoneIconFaPayError() {
  const style = {
    fontSize: "1.8rem",
    color: "red",
    position: "absolute",
    left: "1rem",
    top: "calc(1.8rem + 0.8rem + 1rem)",
  };

  return <FaPhoneAlt style={style} />;
}

export function EmailIconFa() {
  const style = {
    // fontSize: "2rem",
    marginRight: "0.8rem",
  };

  return <FaEnvelope style={style} />;
}

// export function CartIconRi() {
//   const style = {
//     fontSize: "2rem",
//     marginRight: "0.8rem",
//   };

//   return <FaShoppingCart style={style} />;
// }
export function CartIconMd() {
  const style = {
    fontSize: "2.4rem",
    marginRight: "0.4rem",
  };

  return <MdShoppingCart style={style} />;
}
export function CartOutlineIconMd() {
  const style = {
    fontSize: "2.4rem",
    marginRight: "0.4rem",
  };

  return <MdOutlineShoppingCart style={style} />;
}
export function FingerprintIconMd() {
  const style = {
    fontSize: "3rem",
    marginRight: "0.4rem",
  };

  return <MdFingerprint style={style} />;
}

export function HeroIconGi() {
  const style = {
    fontSize: "3.6rem",
    color: "var(--text2)",
  };

  return <GiNinjaHeroicStance style={style} />;
}

/*
- Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Spacing system (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
*/
