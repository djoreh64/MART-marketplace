import Image from "next/image";
import React from "react";

const SearchIcon = () => (
  <Image
    src={`${process.env.NEXT_PUBLIC_CDN_PATH}/icons/search.svg`}
    width={20}
    height={20}
    alt="Поиск"
  />
);

export default SearchIcon;
