import { FC } from "react";
import * as S from "./styled";
import Card from "./components/card";
import Image from "next/image";
import Link from "next/link";

const Favourites: FC = () => {
  if (true) {
    return (
      <S.EmptyContent>
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_PATH}/favourites.svg`}
          alt="empty"
          width={128}
          height={128}
        />
        <S.EmptyHeadline>Список избранного пуст</S.EmptyHeadline>
        <S.EmptyDescription>
          Добавьте понравившиеся товары в избранное на странице товара
        </S.EmptyDescription>
        <S.EmptyButton primary>
          <Link href="/">К покупкам</Link>
        </S.EmptyButton>
      </S.EmptyContent>
    );
  }

  return (
    <S.Content>
      <S.Headline>Избранное</S.Headline>
      <S.Container>
        {Array.from({ length: 8 }).map((_, i) => (
          <Card href={`/good/${i}`} key={i} />
        ))}
      </S.Container>
    </S.Content>
  );
};

export default Favourites;
