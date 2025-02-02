import { Banner } from "./components/banner";
import ProductCard from "./components/card";
import Recommendations from "./components/recommendation";
import * as S from "./styled";

const Home = () => (
    <S.Content>
      <Banner />
      <S.Container>
        <Recommendations />
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </S.Container>
    </S.Content>
);

export default Home;
