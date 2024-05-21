import React from "react";
import Button from "./button";

function Cart({ cartItems,onCheckout }) {
  const totalPrice = cartItems?.reduce((a, c) => a + c.price * c.quantity, 0);
  console.log(totalPrice);
  return (
    <div className="flex gap-10 items-center">
      {cartItems?.length === 0 ? "No item in the cart" : ""}
      <br />
      <span>Total Price: ${totalPrice?.toFixed(2)} </span>
      <Button
        type={"checkout"}
        title={cartItems?.length === 0 ? "Order" : "Checkout"}
        disable={cartItems?.length === 0 ? true : false}
        onClick={onCheckout}
      />
    </div>
  );
}

export default Cart;
