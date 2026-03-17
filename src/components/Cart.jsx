import React from "react";
import CartItem from "./CartItem.jsx";

const Cart = ({ items, onHandleRemoveFromCart }) => {
  return (
    <div className="mt-5 p-5 h-full flex flex-col">
      {items.length === 0 ? (
        <div className="flex flex-col justify-center text-center">
          <p className="text-lg">Your cart is empty</p>
        </div>
      ) : (
        <div className="flex-1 ">
          {items.map((item) => (
            <CartItem
              key={item.id}
              cartItem={item}
              onHandleRemoveFromCart={onHandleRemoveFromCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
