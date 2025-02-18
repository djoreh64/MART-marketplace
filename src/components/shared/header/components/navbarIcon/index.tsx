import { NavbarIcon as StyledNavbarIcon } from "@components/shared/header/styled";
import React, { FC } from "react";

interface Props {
  src: string;
  size?: number;
}

const NavbarIcon: FC<Props> = ({ src, size = 24 }) => (
  <StyledNavbarIcon
    src={`${process.env.NEXT_PUBLIC_CDN_PATH}/icons/${src}.svg`}
    width={size}
    height={size}
    alt=""
  />
);

export default NavbarIcon;
