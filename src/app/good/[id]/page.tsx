import React from "react";
import * as S from "./styled";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import BuyButton from "./components/buyButton";

export interface IGood {
  id: number;
  name: string;
  originalPrice: number;
  imageUrl: string;
  price: number;
  description: string;
  material: string;
  size: string;
  color: string;
  country: string;
}

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
    );
    const { name }: IGood = await response.json();

    return {
      title: `${name} | OZON`,
    };
  } catch (error) {
    return {
      title: "Ошибка загрузки товара",
    };
  }
}

const Good = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
    );

    const {
      color,
      country,
      description,
      imageUrl,
      name,
      originalPrice,
      price,
      material,
    }: IGood = await response.json();

    return (
      <S.Container>
        <S.ImageHolder>
          <Image src={imageUrl} alt="Товар" width={513} height={587} />
        </S.ImageHolder>
        <S.Info>
          <S.Name>{name}</S.Name>
          <S.RatingHolder>
            <Star fill="#FFA800" size={16} stroke="#FFA800" />
            <S.Rating>4.5</S.Rating>
            <S.Reviews>4 отзыва</S.Reviews>
          </S.RatingHolder>
          <S.About>О товаре</S.About>
          <S.Details>
            <S.DetailItem>
              <S.DetailTitle>Цвет</S.DetailTitle>
              <S.DetailValue>{color}</S.DetailValue>
            </S.DetailItem>
            <S.DetailItem>
              <S.DetailTitle>Материал</S.DetailTitle>
              <S.DetailValue>{material}</S.DetailValue>
            </S.DetailItem>
            <S.DetailItem>
              <S.DetailTitle>Страна-изготовитель</S.DetailTitle>
              <S.DetailValue>{country}</S.DetailValue>
            </S.DetailItem>
          </S.Details>
          <S.Description>{description}</S.Description>
        </S.Info>
        <S.PurchaseBlock>
          <S.PriceHolder>
            <S.CurrentPrice>{price}₽</S.CurrentPrice>
            <S.OldPriceHolder>
              <S.OldPrice>{originalPrice}₽</S.OldPrice>
              <S.Savings>Вы сэкономите {originalPrice - price}₽!</S.Savings>
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
  } catch (error) {
    throw new Error("Ошибка загрузки товара.");
  }
};

export default Good;
