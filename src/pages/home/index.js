import React from "react";
import "./style.css";
import Banner from "../../components/home/banner";
import Menu from "../../components/common/menu";
import Footer from "../../components/common/footer";
import CartCounter from "../../components/common/cartcounter";

const index = () => {
  return (
    <div>
      <Banner />
      <Menu />
      <Footer />
      <CartCounter />
    </div>
  );
};

export default index;
