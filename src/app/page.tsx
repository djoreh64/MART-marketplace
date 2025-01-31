import ProductCard from "./components/card";
import Recommendations from "./components/recommendation";
import * as S from "./styled";

const Home = () => (
  <S.Content>
    <S.Banner
      src="/banner.jpg"
      width={1350}
      height={229}
      alt="Баннер распродажа"
      priority
    />
    <S.Container>
      <Recommendations />
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductCard key={index} />
      ))}
    </S.Container>
  </S.Content>
);

export default Home;
