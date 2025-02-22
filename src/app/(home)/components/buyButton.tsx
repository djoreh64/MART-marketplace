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
}

const BuyButton: FC<Props> = ({ productId, isInCart }) => {
  const [inCart, setInCart] = useState(isInCart);
  const isAuth = useAuthStore((state) => state.isAuth);
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInCart(true);

    if (!isAuth) {
      router.push("/login");
      setInCart(false);
      return;
    }

    await Cart.addItem(productId);
  };

  return (
    <S.CardButton onClick={handleClick} disabled={inCart} primary={!inCart}>
      <ShoppingCart
        size={20}
        strokeWidth={1.5}
        stroke={inCart ? "#00000050" : "#fff"}
      />
    </S.CardButton>
  );
};

export default BuyButton;
