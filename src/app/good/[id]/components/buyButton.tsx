"use client";

import { FC, useState } from "react";
import { StyledBuyButton } from "../styled";
import $api from "@api";

interface Props {
  productId: number;
  isInCart: boolean;
}

const BuyButton: FC<Props> = ({ productId, isInCart }) => {
  const [added, setAdded] = useState(isInCart);

  const handleClick = async () => {
    try {
      setAdded(true);
      await $api.post(
        "/users/cart",
        { productId },
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      setAdded(false);
    }
  };

  return (
    <StyledBuyButton $inCart={added} onClick={handleClick} disabled={added}>
      {added ? "Добавлено" : "Добавить в корзину"}
    </StyledBuyButton>
  );
};

export default BuyButton;
