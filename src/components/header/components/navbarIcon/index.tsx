import { NavbarIcon as StyledNavbarIcon } from "@components/header/styled";
import React, { FC } from "react";

interface Props {
  src: string;
}

const NavbarIcon: FC<Props> = ({ src }) => (
  <StyledNavbarIcon
    src={`${process.env.CDN_PATH}/icons/${src}.svg`}
    width={24}
    height={24}
    alt=""
  />
);

export default NavbarIcon;
