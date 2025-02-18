import { FC } from "react";
import * as S from "./styled";
import Good from "./components/Good";
import Image from "next/image";
import Link from "next/link";

const Orders: FC = () => {
  const isOrdersEmpty = true;
  // const isOrdersEmpty = false;

  if (isOrdersEmpty) {
    return (
      <S.EmptyContent>
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_PATH}/cart/box.png`}
          alt="empty"
          width={214}
          height={128}
        />
        <S.EmptyHeadline>Список заказов пуст</S.EmptyHeadline>
        <S.EmptyDescription>
          Закажите понравившийся товар, добавленный в корзину{" "}
        </S.EmptyDescription>
        <S.EmptyButton primary>
          <Link href="/">К покупкам</Link>
        </S.EmptyButton>
      </S.EmptyContent>
    );
  }

  return (
    <S.Content>
      <S.Headline>Заказы</S.Headline>
      <S.Container>
        {Array.from({ length: 6 }).map((_, i) => (
          <S.Block key={i}>
            <S.Delivery>Заказ от 20 января</S.Delivery>
            <Good image="/flower.jpg" name="Комнатный цветок" price={499} />
          </S.Block>
        ))}
      </S.Container>
    </S.Content>
  );
};

export default Orders;
