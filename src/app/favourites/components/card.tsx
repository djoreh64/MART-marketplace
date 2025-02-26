"use client";

import { FC } from "react";
import * as S from "../styled";
import { IGood } from "@api/products";

interface Props {
  good: IGood;
}

const Card: FC<Props> = ({ good }) => {
  const { name, id, imageUrl, originalPrice, price } = good;
  const percents = originalPrice / price;
  const sale = (percents * 100 - 100).toFixed(0);

  return (
    <S.Card href={`/good/${id}`}>
      <S.CardImageHolder>
        <S.CardImage
          src={imageUrl}
          alt="Комнатный цветок"
          width={300}
          height={160}
        />
      </S.CardImageHolder>
      <S.CardText>
        <S.CardTitle>{name}</S.CardTitle>
        <S.CardInfo>
          <S.Prices>
            <S.OldPriceHolder>
              <S.OldPrice>{originalPrice} ₽</S.OldPrice>
              <S.Sale>-{sale}%</S.Sale>
            </S.OldPriceHolder>
            <S.Price>{price} ₽</S.Price>
          </S.Prices>
        </S.CardInfo>
      </S.CardText>
    </S.Card>
  );
};

export default Card;
