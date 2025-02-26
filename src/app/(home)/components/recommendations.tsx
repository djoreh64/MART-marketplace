import { FC } from "react";
import * as S from "../styled";

const Recommendations: FC = () => (
  <S.Recommendations>
    <S.RecommendationsSubtitle>Рекомендуем</S.RecommendationsSubtitle>
    <S.RecommendationsTitle>Для дома и сада</S.RecommendationsTitle>
    <S.RecommendationsImages>
      {Array.from({ length: 4 }).map((_, i) => (
        <S.RecommendationsImage key={i} src="/flower.jpg" width={180} />
      ))}
    </S.RecommendationsImages>
    {/* <S.RecommendationsButtonHolder>
      <S.RecommendationsButton>Смотреть все</S.RecommendationsButton>
    </S.RecommendationsButtonHolder> */}
  </S.Recommendations>
);

export default Recommendations;
