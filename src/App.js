import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import './App.css';
import Header from "./components/Header";
// import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Hero /> */}
      <Shop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
