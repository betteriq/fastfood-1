import React from "react";
import Logo from "../../components/common/logo";
import Menu from "../../components/common/menu";
import { menuItemsData } from "../../components/common/menu/data";
import "./style.css";
import Footer from "../../components/common/footer"
import EmptyCart from "../../components/cart/emptycart";

const Cart = () => {
  return (
    <>
      <div className="cart_header">
        <Logo />
      </div>
      <EmptyCart/>
      <div className="orders">
        <h1 className="orders_heading">Your Orders</h1>
        <div className="orders_menu">
          <Menu list={menuItemsData} />
        </div>
        <h3 className="orders_total">Your Total $23</h3>
      </div>
      <Footer/>
    </>
  );
};

export default Cart;
