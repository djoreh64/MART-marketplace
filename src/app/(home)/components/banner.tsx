import React, { FC } from "react";
import * as S from "../styled";

const Banner: FC = () => (
  <S.Banner
    src="/banner.png"
    width={1350}
    height={183}
    alt="Баннер распродажа"
    placeholder="blur"
    blurDataURL={"/banner.png"}
  />
);

export default Banner;
