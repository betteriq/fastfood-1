import React from "react";
import "./style.css";
import Banner from "../../components/home/banner";
import Menu from "../../components/common/menu";
import Footer from "../../components/common/footer";
import CartCounter from "../../components/common/cartcounter";
import { menuItemsData } from "../../components/common/menu/data";

const index = () => {
  return (
    <div>
      <Banner />
      <Menu list={menuItemsData}/>
      <Footer />
      <CartCounter />
    </div>
  );
};

export default index;
