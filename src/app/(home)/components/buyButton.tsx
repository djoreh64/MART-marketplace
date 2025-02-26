"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import * as S from "../styled";
import { ShoppingCart } from "lucide-react";
import { useAuthStore } from "@stores/auth.store";
import Cart from "@api/cart";

interface Props {
  productId: number;
  isInCart: boolean;
  cartItemId: number;
}

const BuyButton: FC<Props> = ({ productId, isInCart, cartItemId }) => {
  const [inCart, setInCart] = useState(isInCart);
  const [itemId, setItemId] = useState(cartItemId);
  const isAuth = useAuthStore((state) => state.isAuth);
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inCart) {
      setInCart(false);
      await Cart.deleteItem(itemId);
      setItemId(0);
      return;
    }

    setInCart(true);

    if (!isAuth) {
      router.push("/login");
      setInCart(false);
      return;
    }

    const { id } = await Cart.addItem(productId);
    setItemId(id);
  };

  return (
    <S.CardButton onClick={handleClick} primary={!inCart}>
      <ShoppingCart
        size={20}
        strokeWidth={1.5}
        stroke={inCart ? "#00000050" : "#fff"}
      />
    </S.CardButton>
  );
};

export default BuyButton;
