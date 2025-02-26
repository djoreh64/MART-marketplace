"use client";

import React, { FC } from "react";
import * as S from "../styled";
import { IGood } from "@api/products";

interface Props {
  good: IGood;
  quantity: number;
}

const Good: FC<Props> = ({ good, quantity }) => {
  const { imageUrl: image, name, price, id } = good;
  return (
    <S.Good>
      <S.GoodMain>
        <S.GoodImageHolder href={`/good/${id}`}>
          <S.GoodImage src={image} alt="" width={77} height={70} />
        </S.GoodImageHolder>
        <S.GoodInfo>
          <S.GoodName>
            {name} {quantity > 1 && <S.GoodQuantityHolder>x {quantity}</S.GoodQuantityHolder>}
          </S.GoodName>
          <S.GoodPriceHolder>
            <S.GoodPrice>{price * quantity}₽</S.GoodPrice>
          </S.GoodPriceHolder>
        </S.GoodInfo>
      </S.GoodMain>
    </S.Good>
  );
};

export default Good;
