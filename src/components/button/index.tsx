import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { StyledButton, Loader, LoaderWrapper } from "./styled";

interface Props
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  primary?: boolean;
  icon?: boolean;
  loading?: boolean;
}

const Button: FC<Props> = ({
  children,
  primary,
  icon,
  loading = false,
  ...props
}) => (
  <StyledButton disabled={loading} $primary={primary} $icon={icon} {...props}>
    {!loading ? (
      children
    ) : (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    )}
  </StyledButton>
);

export default Button;
