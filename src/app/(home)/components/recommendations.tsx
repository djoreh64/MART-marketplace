import { FC } from "react";
import * as S from "../styled";
import { IGood } from "@api/products";

interface Props {
  goods: IGood[];
}

const Recommendations: FC<Props> = ({ goods }) => (
  <S.Recommendations>
    <S.RecommendationsSubtitle>Рекомендуем</S.RecommendationsSubtitle>
    <S.RecommendationsTitle>Одежда и обувь</S.RecommendationsTitle>
    <S.RecommendationsImages>
      {goods
        .filter(({ category }) => category.name.includes("Одежда и обувь"))
        .slice(0, 4)
        .map(({ imageUrl, id }, i) => (
          <S.RecommendationsItem href={`/good/${id}`} key={i}>
            <S.RecommendationsImage src={imageUrl} width={180} height={180} />
          </S.RecommendationsItem>
        ))}
    </S.RecommendationsImages>
    {/* <S.RecommendationsButtonHolder>
      <S.RecommendationsButton>Смотреть все</S.RecommendationsButton>
    </S.RecommendationsButtonHolder> */}
  </S.Recommendations>
);

export default Recommendations;
