import React, { useState } from "react";
import { CartItemsContext } from "./components/CartItemsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import './App.css';
import Header from "./components/Header";
// import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItemsLocalStorage")) || []
  );
  console.log("cartItems state from App --------------------", { cartItems });

  const addCartItems = (id, shoudDelete = false) => {
    // console.log("---------- addCartItems", { id });

    setCartItems((prevState) => {
      // Copy of previous state
      // const newState = JSON.parse(JSON.stringify(prevState));
      const newState = prevState.map((item) => ({ ...item }));
      // console.log("addCartItems > newState from App ----------", { newState });

      const checkItem = newState.find((item) => item.id === id);
      // console.log("addCartItems > checkItem from App ----------", { checkItem });

      if (checkItem) {
        checkItem.amount++;
      } else {
        newState.push({ id: id, amount: 1 });
      }

      localStorage.setItem("cartItemsLocalStorage", JSON.stringify(newState));
      // console.log("LOCALSTORAGE: ", JSON.parse(localStorage.getItem("cartItemsLocalStorage")));

      return newState;
    });
  };

  const removeCartItems = (id) => {
    // console.log("---------- removeCartItems", { id });

    setCartItems((prevState) => {
      // Copy of previous state
      // const newState = JSON.parse(JSON.stringify(prevState));
      const newState = prevState.map((item) => ({ ...item }));
      // console.log("removeCartItems > newState from App ----------", { newState });

      const checkItemIndex = newState.findIndex((item) => item.id === id);
      // console.log("removeCartItems > checkItemIndex from App ----------", { checkItemIndex });

      const checkItem = newState[checkItemIndex];
      // console.log("removeCartItems > checkItem from App ----------", { checkItem });

      if (checkItem.amount === 1) {
        newState.splice(checkItemIndex, 1);
      } else {
        checkItem.amount--;
      }

      localStorage.setItem("cartItemsLocalStorage", JSON.stringify(newState));
      // console.log("LOCALSTORAGE: ", JSON.parse(localStorage.getItem("cartItemsLocalStorage")));

      return newState;
    });
  };

  return (
    <BrowserRouter>
      <CartItemsContext.Provider value={{ cartItems, addCartItems, removeCartItems }}>
        <Header />
        {/* <Hero /> */}
        <Shop />
        <Footer />
      </CartItemsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
