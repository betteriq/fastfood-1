import React from "react";
import { useNavigate } from "react-router";
import logo from ".//logo.png";
import "./style.css";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="emptycart">
      <img src={logo} alt="emptycart" />
      <button onClick={() => navigate("/")}>
        <i className="fas fa-long-arrow-alt-left"> Shop Now</i>
      </button>
    </div>
  );
};

export default EmptyCart;
