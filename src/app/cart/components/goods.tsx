import React, { FC } from "react";
import Good from "./good";
import Cart from "@api/cart";

const Goods: FC = async () => {
  const { cart } = await Cart.get();

  return (
    <>
      {cart.map((item) => (
        <Good key={item.id} cartItem={item} />
      ))}
    </>
  );
};
export default Goods;
