import React from "react";
import ButtonAddRemove from "../../buttunaddremove";
import "./style.css";

const MenuItem = ({ item }) => {
  const { id, name, info, price, img } = item;
  return (
    <div className="item">
      <img src={img} alt="img" />
      <div className="item_head_desk">
        <p className="head_desk_name">{name}</p>
        <p className="head_desk_info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item_foot_desk">
        <span className="foot_desk_price">${price}</span>
        <ButtonAddRemove quantity={10}/>
      </div>
    </div>
  );
};

export default MenuItem;
