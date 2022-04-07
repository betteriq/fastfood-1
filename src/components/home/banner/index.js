import React from "react";
import "./style.css";
import banner from "./banner.png"
import Logo from "../../common/logo"
const Banner = () => {
  return (
    <header>
      <div className="header_count">Banner</div>
      <Logo/>
      <div className="content_main">
        <h1>Delicious Food for your Carving</h1>
      </div>
      <img src={banner} alt="banner" className="header_img" />
    </header>
  );
};

export default Banner;
