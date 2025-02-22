import Cart, { ICartItem } from "@api/cart";
import { useCartStore } from "@stores/cart.store";
import { useState } from "react";

export const useCart = (cartItem: ICartItem) => {
  const initialCart = useCartStore((state) => state.cartItems);
  const setCart = useCartStore((state) => state.setCart);
  const recalculateTotals = useCartStore((state) => state.recalculateTotals);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateCart = (updatedCart: ICartItem[]) => {
    setCart(updatedCart);
    recalculateTotals(updatedCart);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
  };

  const handleBlur = async () => {
    if (quantity < 1) {
      setQuantity(1);
      return;
    }

    try {
      await Cart.changeQuantity(cartItem.id, quantity);
      const updatedCart = initialCart.map((item) =>
        item.id === cartItem.id ? { ...item, quantity } : item
      );
      updateCart(updatedCart);
    } catch (error) {
      setQuantity(cartItem.quantity);
    }
  };

  const handleIncrease = async () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    try {
      await Cart.changeQuantity(cartItem.id, newQuantity);
      const updatedCart = initialCart.map((item) =>
        item.id === cartItem.id ? { ...item, quantity: newQuantity } : item
      );
      updateCart(updatedCart);
    } catch (error) {
      setQuantity(cartItem.quantity);
    }
  };

  const handleDecrease = async () => {
    if (quantity <= 1) return;

    const newQuantity = quantity - 1;
    setQuantity(newQuantity);

    try {
      await Cart.changeQuantity(cartItem.id, newQuantity);
      const updatedCart = initialCart.map((item) =>
        item.id === cartItem.id ? { ...item, quantity: newQuantity } : item
      );
      updateCart(updatedCart);
    } catch (error) {
      setQuantity(cartItem.quantity);
    }
  };

  const deleteCartItem = async () => {
    const cart = initialCart.filter((item) => item.id !== cartItem.id);
    updateCart(cart);

    try {
      await Cart.deleteItem(cartItem.id);
    } catch (error) {
      setCart(initialCart);
      recalculateTotals(initialCart);
    }
  };

  return {
    quantity,
    handleChange,
    handleBlur,
    handleIncrease,
    handleDecrease,
    deleteCartItem,
  };
};
