import React, { FC } from "react";
import { ModalButton as StyledModalButton } from "../styled";
import { authTexts as texts } from "../data";
import { useAuthContextValue } from "../hooks/useAuthContextValue";

interface Props {
  loading?: boolean;
}

const ModalButton: FC<Props> = ({ loading }) => {
  const { authType: type } = useAuthContextValue();
  return <StyledModalButton loading={loading} primary>{texts[type].button}</StyledModalButton>;
};

export default ModalButton;
