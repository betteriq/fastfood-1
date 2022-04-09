import React from "react";

const ButtonAddRemove = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <div className="btn_add_remove">
      {quantity !== 0 ? (
        <div className="btn_add_remove_positive">
          <i className="fa fa-minus" onClick={handleRemoveItem}></i>
          <span>{quantity}</span>
          <i className="fa fa-plus" onClick={handleAddItem}></i>
        </div>
      ) : (
        <div className="btn_add_remove_negative" onClick={handleAddItem}>
          <span>Add</span>
          <i className="fa fa-plus"></i>
        </div>
      )}
    </div>
  );
};

export default ButtonAddRemove;
