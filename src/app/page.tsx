import { FC } from "react";
import * as S from "./styled";
import { Banner, Card, Recommendations } from "./components";

const Home: FC = () => (
  <S.Content>
    <Banner />
    <S.Container>
      <Recommendations />
      {Array.from({ length: 8 }).map((_, i) => (
        <Card href={`/good/${i}`} key={i} />
      ))}
    </S.Container>
  </S.Content>
);

export default Home;
