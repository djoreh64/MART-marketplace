import React from "react";
import * as S from "../styled";

export const Banner = () => {
  return (
    <S.Banner
      src="/banner.jpg"
      width={1350}
      height={229}
      alt="Баннер распродажа"
      priority
    />
  );
};
