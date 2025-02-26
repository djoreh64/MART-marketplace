"use client";

import { Loader, LoaderWrapper } from "@components/button/styled";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Card from "./components/card";
import useFavourites from "./hooks/useFavourites";
import * as S from "./styled";

const Favourites: FC = () => {
  const { favourites, loading } = useFavourites();

  if (loading) {
    return (
      <S.EmptyContent>
        <S.EmptyHeadline>
          <LoaderWrapper>
            <Loader $dark />
          </LoaderWrapper>
        </S.EmptyHeadline>
      </S.EmptyContent>
    );
  }

  if (favourites.length === 0) {
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
        {favourites.map((good, i) => (
          <Card good={good.product} key={i} />
        ))}
      </S.Container>
    </S.Content>
  );
};

export default Favourites;
