import React from "react";
import MenuItem from "./menuItem";
import "./style.css";

const Menu = ({list}) => {
  return (
    <main>
      {list.map((item) => (
        <MenuItem key={item.id} item={item}/>
      ))}
    </main>
  );
};

export default Menu;
