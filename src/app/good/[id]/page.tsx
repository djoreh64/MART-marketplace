import React from "react";
import * as S from "./styled";
import Image from "next/image";
import { Star } from "lucide-react";
import BuyButton from "./components/buyButton";
import Goods from "@api/products";
import { Metadata } from "next";
import FavouriteButton from "./components/favouriteButton";
import { serverFetch } from "@utils/serverFetch";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  try {
    const id = (await params).id;
    const product = await Goods.getOne(id);
    const productImage = product.imageUrl || "";

    return {
      title: `${product.name} | MART`,
      description: product.description || "Описание товара от MART",
      openGraph: {
        title: `${product.name} | MART`,
        description: product.description || "Описание товара от MART",
        url: `https://MART.ru/product/${id}`,
        siteName: "MART",
        images: [
          {
            url: productImage,
            width: 1230,
            height: 630,
            alt: product.name,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${product.name} | MART`,
        description: product.description || "Описание товара от MART",
        images: [productImage],
        creator: "@MART",
      },
    };
  } catch (error) {
    return {
      title: "Ошибка загрузки товара",
      description: "Не удалось загрузить данные товара",
    };
  }
}

const Good = async ({ params }: { params: Promise<{ id: string }> }) => {
  try {
    const id = (await params).id;
    const good = await serverFetch(`/products/${id}`);

    return (
      <S.Container>
        <S.ImageHolder>
          <Image src={good.imageUrl} alt="Товар" width={513} height={587} />
        </S.ImageHolder>
        <S.Info>
          <S.Name>{good.name}</S.Name>
          <S.RatingHolder>
            <Star fill="#FFA800" size={16} stroke="#FFA800" />
            {/* <S.Rating></S.Rating> */}
            <S.Reviews>Нет отзывов</S.Reviews>
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
            <BuyButton
              initialCartItemId={good.cartItemId}
              productId={good.id}
              isInCart={good.isInCart}
            />
            <FavouriteButton
              initialFavoriteItemId={good.favouriteItemId}
              productId={good.id}
              isInFavourites={good.isInFavourites}
            />
          </S.Buttons>
        </S.PurchaseBlock>
      </S.Container>
    );
  } catch (error) {
    throw new Error("Ошибка загрузки товара.");
  }
};

export default Good;
