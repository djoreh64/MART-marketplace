"use client";

import React, { FC, useState } from "react";
import * as S from "../styled";

const BuyButton: FC = () => {
  const [inCart, setInCart] = useState(false);
  return (
    <S.BuyButton
      onClick={() => setInCart(true)}
      $inCart={inCart}
      primary={inCart}
    >
      {inCart ? "В корзине" : "Добавить в корзину"}
    </S.BuyButton>
  );
};

export default BuyButton;
