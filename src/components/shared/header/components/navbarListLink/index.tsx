"use client";

import React, { FC, PropsWithChildren } from "react";
import * as S from "../../styled";
import useActivePath from "@hooks/useActivePath";

interface Props extends PropsWithChildren {
  href: string;
}

export const NavbarListLink: FC<Props> = ({ href, children }) => {
  const isActive = useActivePath(href);
  return (
    <S.NavbarListLink $active={isActive} href={href}>
      {children}
    </S.NavbarListLink>
  );
};
