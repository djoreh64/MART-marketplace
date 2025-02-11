"use client";

import React, { FC } from "react";
import * as S from "../styled";

interface Props {
  name: string;
  price: number;
  image: string;
}

const Good: FC<Props> = ({ name, price, image }) => {
  return (
    <S.Good>
      <S.GoodMain>
        <S.GoodImage src={image} alt="" width={77} height={70} />
        <S.GoodInfo>
          <S.GoodName>{name}</S.GoodName>
          <S.GoodPriceHolder>
            <S.GoodPrice>{price}₽</S.GoodPrice>
          </S.GoodPriceHolder>
        </S.GoodInfo>
      </S.GoodMain>
    </S.Good>
  );
};

export default Good;
