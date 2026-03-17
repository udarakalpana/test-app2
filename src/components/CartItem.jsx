import React from "react";

const CartItem = ({ cartItem, onHandleRemoveFromCart }) => {
  return (
    <div className="flex gap-2 p-3 border m-2">
      <h2>{cartItem.name}</h2>
      <p>{cartItem.price}</p>
      <button type="button" onClick={() => onHandleRemoveFromCart(cartItem.id)}>
        Remove item
      </button>
    </div>
  );
};

export default CartItem;
