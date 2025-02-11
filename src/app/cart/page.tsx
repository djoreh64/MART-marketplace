import { FC } from "react";
import * as S from "./styled";
import Good from "./components/Good";
import Image from "next/image";
import Link from "next/link";

const Cart: FC = () => {
  // const isCartEmpty = true;
  const isCartEmpty = false;

  if (isCartEmpty) {
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
          <Good
            image="/flower.jpg"
            name="Комнатный цветок"
            price={499}
            oldPrice={1200}
          />
        </S.Block>
        <S.Block>
          <S.BuyButton>Оформить заказ</S.BuyButton>
          <S.BuyBlock>
            <S.BuyHeader>
              <S.BuyHeaderTitle>Ваша корзина</S.BuyHeaderTitle>
              <S.BuyHeaderText>9 товаров</S.BuyHeaderText>
            </S.BuyHeader>
            <S.BuyBlockItem>
              <S.BuyBlockItemTitle>Товары (9)</S.BuyBlockItemTitle>
              <S.BuyBlockItemText>4491₽</S.BuyBlockItemText>
            </S.BuyBlockItem>
            <S.BuyBlockItem>
              <S.BuyBlockItemTitle>Скидка</S.BuyBlockItemTitle>
              <S.BuyBlockItemText $sale>- 4500₽</S.BuyBlockItemText>
            </S.BuyBlockItem>
          </S.BuyBlock>
        </S.Block>
      </S.Container>
    </S.Content>
  );
};

export default Cart;
