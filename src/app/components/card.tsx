"use client";
import { FC } from "react";
import * as S from "../styled";
import Image from "next/image";

interface Props {
  href: string;
}

const Card: FC<Props> = ({ href }) => {
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <S.Card href={href}>
      <S.CardImageHolder>
        <S.CardImage
          src={`/flower.jpg`}
          alt="Комнатный цветок"
          width={300}
          height={160}
        />
      </S.CardImageHolder>
      <S.CardText>
        <S.CardTitle>Комнатный цветок</S.CardTitle>
        <S.CardInfo>
          <S.Prices>
            <S.OldPriceHolder>
              <S.OldPrice>999 ₽</S.OldPrice>
              <S.Sale>-10%</S.Sale>
            </S.OldPriceHolder>
            <S.Price>499 ₽</S.Price>
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
