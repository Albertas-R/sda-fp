import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import './App.css';
import Header from "./components/Header";
import Shop from "./components/Shop";
import Contacts from "./components/Contacts";
// import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Shop />
      <Contacts />
      {/* <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
