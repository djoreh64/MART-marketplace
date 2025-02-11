import React, { FC } from "react";
import { ModalButton as StyledModalButton } from "../styled";
import { authTexts as texts } from "../data";
import { useAuthContextValue } from "../hooks/useAuthContextValue";

const ModalButton: FC = () => {
  const { authType: type } = useAuthContextValue();
  return <StyledModalButton primary>{texts[type].button}</StyledModalButton>;
};

export default ModalButton;
