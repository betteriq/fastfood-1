import React from "react";
import "./style.css";

const CartCounter = ({ cartcount }) => {
  return (
    <div className="cart_count">
      <div className="count">{cartcount >= 100 ? "99+" : 12}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

export default CartCounter;
