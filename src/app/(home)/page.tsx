export const revalidate = 10;

import { FC } from "react";
import * as S from "./styled";
import { Banner, Card, Recommendations } from "./components";
import { IGood } from "@api/products";
import { serverFetch } from "@utils/serverFetch";

const Home: FC = async () => {
  const goods: IGood[] = await serverFetch("/products");
  
  return (
    <S.Content>
      <Banner />
      <S.Container>
        <Recommendations />
        {goods.map(({ isInCart, id, ...props }) => (
          <Card
            good={{ id, isInCart, ...props }}
            key={id}
            isInCart={isInCart}
          />
        ))}
      </S.Container>
    </S.Content>
  );
};

export default Home;
