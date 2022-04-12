import { createBrowserHistory } from "history";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const CartCounter = ({ cartcount }) => {
  const navigate = useNavigate();

  return (
    <div className="cart_count" onClick={() => navigate("/cart")}>
      <div className="count">{cartcount >= 100 ? "99+" : cartcount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

export default CartCounter;
