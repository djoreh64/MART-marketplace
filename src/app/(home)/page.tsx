export const revalidate = 10;

import { FC } from "react";
import * as S from "./styled";
import { Banner, Card, Recommendations } from "./components";
import Goods from "@api/products";
import { ICartItem } from "@api/cart";
import { serverFetch } from "@utils/serverFetch";

const Home: FC = async () => {
  const goods = await Goods.get();
  let cart: ICartItem[] = [];

  try {
    cart = await serverFetch("/users/cart");
  } catch {
    cart = [];
  }

  return (
    <S.Content>
      <Banner />
      <S.Container>
        <Recommendations />
        {goods.map((good) => (
          <Card
            good={good}
            key={good.id}
            isInCart={[...cart].some((item) => item.product.id === good.id)}
          />
        ))}
      </S.Container>
    </S.Content>
  );
};

export default Home;
