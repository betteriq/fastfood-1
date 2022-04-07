import React from "react";
import "./style.css";
import banner from "./banner.png";
import Logo from "../../common/logo";
const Banner = () => {
  return (
    <header>
      <div className="header_content">
        <Logo />
        <div className="content_main">
          <h1>Delicious Food for your Carving</h1>
          <p>we made fresh and healthy meals with different recipes</p>
          <button>View Menu <i className="fas fa-long-arrow-alt-right"></i></button>
        </div>
      </div>
      <img src={banner} alt="banner" className="header_img" />
    </header>
  );
};

export default Banner;
