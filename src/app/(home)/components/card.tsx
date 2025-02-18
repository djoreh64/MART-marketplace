"use client";
import { FC } from "react";
import * as S from "../styled";
import Image from "next/image";
import { IGood } from "@app/good/[id]/page";

interface Props {
  good: IGood;
}

const Card: FC<Props> = ({ good }) => {
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const { imageUrl: image, name, originalPrice, price } = good;
  const percents = originalPrice / price;

  return (
    <S.Card href={`/good/${good.id}`}>
      <S.CardImageHolder>
        <S.CardImage src={image} alt="Товар" width={210} height={195} />
      </S.CardImageHolder>
      <S.CardText>
        <S.CardTitle>{name}</S.CardTitle>
        <S.CardInfo>
          <S.Prices>
            <S.OldPriceHolder>
              <S.OldPrice>{originalPrice} ₽</S.OldPrice>
              <S.Sale>-{(percents * 100 - 100).toFixed(0)}%</S.Sale>
            </S.OldPriceHolder>
            <S.Price>{price} ₽</S.Price>
          </S.Prices>
          <S.CardButton onClick={handleAddToCart} primary>
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN_PATH}/icons/cardCart.svg`}
              width={24}
              height={24}
              alt="Добавить в корзину"
            />
          </S.CardButton>
        </S.CardInfo>
      </S.CardText>
    </S.Card>
  );
};

export default Card;
