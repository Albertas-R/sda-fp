import React from "react";

// import './App.css';
import Header from "./components/Header";
import Shop from "./components/Shop";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="container">
      <Header />
      <Shop />
      <Contacts />
    </div>
  );
}

export default App;
