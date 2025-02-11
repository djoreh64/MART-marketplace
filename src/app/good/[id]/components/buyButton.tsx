import React, { FC } from "react";
import * as S from "../styled";

interface Props {
  inCart?: boolean;
}

const BuyButton: FC<Props> = ({ inCart = false }) => (
  <S.BuyButton $inCart={inCart} primary={inCart}>
    {inCart ? "В корзине" : "Добавить в корзину"}
  </S.BuyButton>
);

export default BuyButton;
