"use client";

import React from "react";
import * as S from "./[id]/styled";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { useParams } from "next/navigation";
import BuyButton from "./[id]/components/buyButton";

const Good = () => {
  const { id } = useParams();

  return (
    <S.Container>
      <S.ImageHolder>
        <Image src="/lopata.png" alt="lopata" width={513} height={587} />
      </S.ImageHolder>
      <S.Info>
        <S.Name>Товар номер {Number(id) + 1}</S.Name>
        <S.RatingHolder>
          <Star fill="#FFA800" size={16} stroke="#FFA800" />
          <S.Rating>4.5</S.Rating>
          <S.Reviews>4 отзыва</S.Reviews>
        </S.RatingHolder>
        <S.About>О товаре</S.About>
        <S.Details>
          <S.DetailItem>
            <S.DetailTitle>Цвет</S.DetailTitle>
            <S.DetailValue>Черный</S.DetailValue>
          </S.DetailItem>
          <S.DetailItem>
            <S.DetailTitle>Материал</S.DetailTitle>
            <S.DetailValue>Пластик</S.DetailValue>
          </S.DetailItem>
          <S.DetailItem>
            <S.DetailTitle>Страна-изготовитель</S.DetailTitle>
            <S.DetailValue>Китай</S.DetailValue>
          </S.DetailItem>
        </S.Details>
        <S.Description>
          Садовый совок — это удобный инструмент для работы в саду,
          предназначенный для копания, перемещения почвы, удобрений и растений.
          Он имеет прочное металлическое лезвие с острием для лёгкости
          вкапывания и деревянную или пластиковую ручку, которая обеспечивает
          комфорт в использовании. Идеален для посадки, пересадки растений и
          ухода за растениями в ограниченных пространствах, таких как клумбы или
          грядки.
        </S.Description>
      </S.Info>
      <S.PurchaseBlock>
        <S.PriceHolder>
          <S.CurrentPrice>499₽</S.CurrentPrice>
          <S.OldPriceHolder>
            <S.OldPrice>999₽</S.OldPrice>
            <S.Savings>Вы сэкономите 500₽!</S.Savings>
          </S.OldPriceHolder>
        </S.PriceHolder>
        <S.Buttons>
          <BuyButton />
          <S.FavoriteButton>
            <Heart stroke="#005BFF" size={20} />
          </S.FavoriteButton>
        </S.Buttons>
      </S.PurchaseBlock>
    </S.Container>
  );
};

export default Good;
