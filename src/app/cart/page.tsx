"use client";

import { FC, useEffect, useState } from "react";
import * as S from "./styled";
import Good from "./components/good";
import Image from "next/image";
import Link from "next/link";
import CartController from "@api/cart";
import { useCartStore } from "@stores/cart.store";
import { Loader, LoaderWrapper } from "@components/button/styled";

const Cart: FC = () => {
  const [loading, setLoading] = useState(true);
  
  const setCart = useCartStore((state) => state.setCart);
  const cart = useCartStore((state) => state.cartItems);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalSales = useCartStore((state) => state.totalSales);
  const recalculateTotals = useCartStore((state) => state.recalculateTotals);


  const getCart = async () => {
    try {
      const { cart } = await CartController.get();
      recalculateTotals(cart);
      setCart(cart);
    } catch (error) {
      console.error("Ошибка при получении корзины:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  if (loading) {
    return (
      <S.EmptyContent>
        <S.EmptyHeadline>
          <LoaderWrapper>
            <Loader $dark />
          </LoaderWrapper>
        </S.EmptyHeadline>
      </S.EmptyContent>
    );
  }

  const length = cart.length;

  if (length === 0) {
    return (
      <S.EmptyContent>
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_PATH}/cart/box.png`}
          alt="empty"
          width={214}
          height={128}
        />
        <S.EmptyHeadline>Корзина пуста</S.EmptyHeadline>
        <S.EmptyDescription>
          Добавьте понравившиеся товары в корзину на главной странице
        </S.EmptyDescription>
        <S.EmptyButton primary>
          <Link href="/">К покупкам</Link>
        </S.EmptyButton>
      </S.EmptyContent>
    );
  }

  return (
    <S.Content>
      <S.Headline>Корзина</S.Headline>
      <S.Container>
        <S.Block>
          <S.Delivery>Доставка Ozon</S.Delivery>
          {cart.map((item) => (
            <Good key={item.id} cartItem={item} />
          ))}
        </S.Block>
        <S.Block>
          <S.BuyButton>Оформить заказ</S.BuyButton>
          <S.BuyBlock>
            <S.BuyHeader>
              <S.BuyHeaderTitle>Ваша корзина</S.BuyHeaderTitle>
              <S.BuyHeaderText>{length} товаров</S.BuyHeaderText>
            </S.BuyHeader>
            <S.BuyBlockItem>
              <S.BuyBlockItemTitle>Товары ({length})</S.BuyBlockItemTitle>
              <S.BuyBlockItemText>{totalPrice}₽</S.BuyBlockItemText>
            </S.BuyBlockItem>
            <S.BuyBlockItem>
              <S.BuyBlockItemTitle>Скидка</S.BuyBlockItemTitle>
              <S.BuyBlockItemText $sale>
                -{Math.abs(totalSales)}₽
              </S.BuyBlockItemText>
            </S.BuyBlockItem>
          </S.BuyBlock>
        </S.Block>
      </S.Container>
    </S.Content>
  );
};

export default Cart;
