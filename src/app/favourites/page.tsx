import { FC } from "react";
import * as S from "./styled";
import Card from "./components/card";

const Favourites: FC = () => (
  <S.Content>
    <S.Headline>Избранное</S.Headline>
    <S.Container>
      {Array.from({ length: 8 }).map((_, i) => (
        <Card href={`/good/${i}`} key={i} />
      ))}
    </S.Container>
  </S.Content>
);

export default Favourites;
