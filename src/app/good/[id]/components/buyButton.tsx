"use client";

import { FC, useState } from "react";
import { StyledBuyButton } from "../styled";
import Cart from "@api/cart";
import { useAuthStore } from "@stores/auth.store";
import { useRouter } from "next/navigation";

interface Props {
  productId: number;
  initialCartItemId: number;
  isInCart: boolean;
}

const BuyButton: FC<Props> = ({ productId, isInCart, initialCartItemId }) => {
  const router = useRouter();
  const isAuth = useAuthStore((state) => state.isAuth);
  const [added, setAdded] = useState(isInCart);
  const [cartItemId, setCartItemId] = useState(initialCartItemId);

  const handleClick = async () => {
    try {
      if (!isAuth) {
        router.push("/login");
        return;
      }
      if (added) {
        await Cart.deleteItem(cartItemId);
        setAdded(false);
        setCartItemId(0);
        return;
      }
      const newItem = await Cart.addItem(productId);
      setAdded(true);
      setCartItemId(newItem.id);
    } catch (error) {
      setAdded(false);
    }
  };

  return (
    <StyledBuyButton $inCart={added} onClick={handleClick}>
      {added ? "Добавлено" : "Добавить в корзину"}
    </StyledBuyButton>
  );
};

export default BuyButton;
