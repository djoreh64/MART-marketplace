import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { StyledButton } from "./styled";

interface Props
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  primary?: boolean;
  icon?: boolean;
}

const Button: FC<Props> = ({ children, primary, icon, ...props }) => (
  <StyledButton $primary={primary} $icon={icon} {...props}>
    {children}
  </StyledButton>
);

export default Button;
