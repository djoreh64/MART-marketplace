import React from "react";
import * as S from "./styled";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import BuyButton from "./components/buyButton";
import Goods from "@api/products";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  try {
    const id = (await params).id;
    const product = await Goods.getOne(id);
    return {
      title: `${product.name} | OZON`,
    };
  } catch (error) {
    return {
      title: "Ошибка загрузки товара",
    };
  }
}

const Good = async ({ params }: { params: Promise<{ id: string }> }) => {
  try {
    const id = (await params).id;
    const good = await Goods.getOne(id);

    return (
      <S.Container>
        <S.ImageHolder>
          <Image src={good.imageUrl} alt="Товар" width={513} height={587} />
        </S.ImageHolder>
        <S.Info>
          <S.Name>{good.name}</S.Name>
          <S.RatingHolder>
            <Star fill="#FFA800" size={16} stroke="#FFA800" />
            <S.Rating>4.5</S.Rating>
            <S.Reviews>4 отзыва</S.Reviews>
          </S.RatingHolder>
          <S.About>О товаре</S.About>
          <S.Details>
            <S.DetailItem>
              <S.DetailTitle>Цвет</S.DetailTitle>
              <S.DetailValue>{good.color}</S.DetailValue>
            </S.DetailItem>
            <S.DetailItem>
              <S.DetailTitle>Материал</S.DetailTitle>
              <S.DetailValue>{good.material}</S.DetailValue>
            </S.DetailItem>
            <S.DetailItem>
              <S.DetailTitle>Страна-изготовитель</S.DetailTitle>
              <S.DetailValue>{good.country}</S.DetailValue>
            </S.DetailItem>
          </S.Details>
          <S.Description>{good.description}</S.Description>
        </S.Info>
        <S.PurchaseBlock>
          <S.PriceHolder>
            <S.CurrentPrice>{good.price}₽</S.CurrentPrice>
            <S.OldPriceHolder>
              <S.OldPrice>{good.originalPrice}₽</S.OldPrice>
              <S.Savings>
                Вы сэкономите {good.originalPrice - good.price}₽!
              </S.Savings>
            </S.OldPriceHolder>
          </S.PriceHolder>
          <S.Buttons>
            <BuyButton productId={good.id} isInCart={false} />
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
