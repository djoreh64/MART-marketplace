import Image from "next/image";
import React from "react";

const SearchIcon = () => (
  <Image
    src={`${process.env.CDN_PATH}/icons/search.svg`}
    width={24}
    height={24}
    alt="Поиск"
  />
);

export default SearchIcon;
