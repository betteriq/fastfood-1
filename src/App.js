import React from "react";
import Home from "./pages/home";
import Cart from "./pages/cart";
import "./App.css";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route render={() => <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
