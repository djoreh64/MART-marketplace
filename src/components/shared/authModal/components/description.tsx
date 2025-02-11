"use client";

import React, { FC } from "react";
import { Description as StyledDescription } from "../styled";
import { authTexts as texts } from "../data";
import { useAuthContextValue } from "../hooks/useAuthContextValue";

const Description: FC = () => {
  const { authType: type } = useAuthContextValue();
  return <StyledDescription>{texts[type].description}</StyledDescription>;
};

export default Description;
