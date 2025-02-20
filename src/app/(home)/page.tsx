export const dynamic = "force-dynamic";
export const revalidate = 0;

import { FC } from "react";
import * as S from "./styled";
import { Banner, Card, Recommendations } from "./components";
import { IGood } from "@app/good/[id]/page";

const Home: FC = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    const goods: IGood[] = await response.json();

    return (
      <S.Content>
        <Banner />
        <S.Container>
          <Recommendations />
          {goods.map((good, i) => (
            <Card good={good} key={i} />
          ))}
        </S.Container>
      </S.Content>
    );
  } catch (error) {
    throw new Error("Не удалось загрузить товары. Попробуйте позже.");
  }
};

export default Home;
