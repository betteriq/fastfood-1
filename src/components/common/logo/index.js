import React from "react";
import logo from "./logo.png";
import "./style.css";

const index = () => {
  return (
    <div className="header_content_logo">
      <div>
        <img src={logo} alt="logo" />
        <span>
          <b>Taste</b>
        </span>
      </div>
      <p>
        <b>Restaurant and BBQ</b>
      </p>
    </div>
  );
};

export default index;
