"use client";

import { ComponentPropsWithoutRef, FC } from "react";
import Icon, { IconComponentProps } from "./icon";
import * as S from "../styled";
import { AuthType } from "../provider/context";
import { useAuthContextValue } from "../hooks/useAuthContextValue";

interface Props extends ComponentPropsWithoutRef<"input"> {
  icon: React.ComponentType<IconComponentProps>;
  authType: AuthType[];
}

const InputField: FC<Props> = ({ icon, authType, ...props }) => {
  const { authType: type } = useAuthContextValue();
  if (!authType.includes(type)) return;

  return (
    <S.InputHolder>
      <S.ModalInput {...props} />
      <Icon component={icon} />
    </S.InputHolder>
  );
};

export default InputField;
