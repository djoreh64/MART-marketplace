"use client";

import React, { FC } from "react";
import { authTexts as texts } from "../data";
import * as S from "../styled";
import { useAuthContextValue } from "../hooks/useAuthContextValue";

const Title: FC = () => {
  const { authType: type } = useAuthContextValue();
  return <S.Title>{texts[type].title}</S.Title>;
};

export default Title;
