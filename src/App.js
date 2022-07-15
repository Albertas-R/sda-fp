import React, { useState } from "react";
import { CartItemsContext } from "./components/CartItemsContext";
import { BrowserRouter } from "react-router-dom";

// import './App.css';
import Header from "./components/Header";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItemsLocalStorage")) || []
  );

  const addCartItems = (id) => {
    setCartItems((prevState) => {
      // Copy of previous state
      // const newState = JSON.parse(JSON.stringify(prevState));
      const newState = prevState.map((item) => ({ ...item }));

      const checkItem = newState.find((item) => item.id === id);

      if (checkItem) {
        checkItem.amount++;
      } else {
        newState.push({ id: id, amount: 1 });
      }

      localStorage.setItem("cartItemsLocalStorage", JSON.stringify(newState));

      return newState;
    });
  };

  const removeCartItems = (id) => {
    setCartItems((prevState) => {
      // Copy of previous state
      // const newState = JSON.parse(JSON.stringify(prevState));
      const newState = prevState.map((item) => ({ ...item }));

      const checkItemIndex = newState.findIndex((item) => item.id === id);

      const checkItem = newState[checkItemIndex];

      if (checkItem.amount === 1) {
        newState.splice(checkItemIndex, 1);
      } else {
        checkItem.amount--;
      }

      localStorage.setItem("cartItemsLocalStorage", JSON.stringify(newState));

      return newState;
    });
  };

  const updateCartItems = (id, shoudDelete = false) => {
    setCartItems((prevState) => {
      // Copy of previous state
      // const newState = JSON.parse(JSON.stringify(prevState));
      const newState = prevState.map((item) => ({ ...item }));

      const checkItemIndex = newState.findIndex((item) => item.id === id);

      const checkItem = newState[checkItemIndex];

      if (shoudDelete) {
        if (checkItem.amount === 1) {
          newState.splice(checkItemIndex, 1);
        } else {
          checkItem.amount--;
        }
      } else {
        if (checkItem) {
          checkItem.amount++;
        } else {
          newState.push({ id: id, amount: 1 });
        }
      }

      localStorage.setItem("cartItemsLocalStorage", JSON.stringify(newState));

      return newState;
    });
  };

  return (
    <BrowserRouter>
      <CartItemsContext.Provider
        value={{ cartItems, addCartItems, removeCartItems, updateCartItems }}
      >
        <Header />
        <Shop />
        <Footer />
      </CartItemsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
