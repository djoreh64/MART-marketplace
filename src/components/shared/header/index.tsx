"use client";

import Button from "@components/button";
import useScreenSize from "@hooks/useScreenSize";
import { ChevronLeft, Menu, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { navbarListItems, navbarListItemsMobile } from "./data";
import * as S from "./styled";
import { LoginButton, NavbarIcon } from "./components";

const Header: FC = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const { isMobile } = useScreenSize();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMobileScreen(isMobile);
  }, [isMobile]);

  if (isMobileScreen) {
    return (
      <>
        <S.MobileHeader>
          <S.SearchInputHolder $icon={pathname !== "/"}>
            {pathname !== "/" && (
              <Link href={pathname} onClick={() => router.back()}>
                <ChevronLeft size={16} />
              </Link>
            )}
            <S.SearchInput />
          </S.SearchInputHolder>
        </S.MobileHeader>
        <S.MobileNavbar>
          {navbarListItemsMobile.map(({ src, href }) => (
            <S.NavbarListLink $active={pathname === href} href={href} key={src}>
              <NavbarIcon size={30} src={src} />
            </S.NavbarListLink>
          ))}
        </S.MobileNavbar>
      </>
    );
  }

  return (
    <S.Container>
      <S.Navbar>
        <S.Title href="/">OZON</S.Title>
        <Button icon primary>
          <Menu />
          Каталог
        </Button>
        <S.SearchInputHolder>
          <S.SearchInput />
          <S.SearchButton primary>
            <SearchIcon />
          </S.SearchButton>
        </S.SearchInputHolder>
        <S.NavbarList>
          {navbarListItems.map(({ src, href, text }) => (
            <S.NavbarListLink $active={pathname === href} href={href} key={src}>
              <NavbarIcon src={src} />
              <S.NavbarListText>{text}</S.NavbarListText>
            </S.NavbarListLink>
          ))}
        </S.NavbarList>
        <LoginButton>Войти</LoginButton>
      </S.Navbar>
    </S.Container>
  );
};

export default Header;
