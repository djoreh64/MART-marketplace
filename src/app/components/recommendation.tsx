import * as S from "../styled";

const Recommendations = () => (
  <S.Recommendations>
    <S.RecommendationsSubtitle>Рекомендуем</S.RecommendationsSubtitle>
    <S.RecommendationsTitle>Для дома и сада</S.RecommendationsTitle>
    <S.RecommendationsImages>
      {Array.from({ length: 4 }).map((_, index) => (
        <S.RecommendationsImage key={index} src="/flower.jpg" width={180} />
      ))}
    </S.RecommendationsImages>
    <S.RecommendationsButtonHolder>
      <S.RecommendationsButton>Смотреть все</S.RecommendationsButton>
    </S.RecommendationsButtonHolder>
  </S.Recommendations>
);

export default Recommendations;
