import Image from "next/image";
import React, { FC } from "react";

const SearchIcon: FC = () => (
  <Image
    src={`${process.env.NEXT_PUBLIC_CDN_PATH}/icons/search.svg`}
    width={20}
    height={20}
    alt="Поиск"
  />
);

export default SearchIcon;
