"use client";

import Button from "@components/button";
import useScreenSize from "@hooks/useScreenSize";
import { ChevronLeft, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import LoginButton from "./components/loginButton";
import NavbarIcon from "./components/navbarIcon";
import { NavbarListLink } from "./components/navbarListLink";
import SearchIcon from "./components/searchIcon";
import { navbarListItems, navbarListItemsMobile } from "./data";
import * as S from "./styled";

const Header: FC = () => {
  const { isMobile } = useScreenSize();
  const pathname = usePathname();
  const router = useRouter();
  
  if (isMobile) {
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
            <NavbarListLink href={href} key={src}>
              <NavbarIcon size={30} src={src} />
            </NavbarListLink>
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
            <NavbarListLink href={href} key={src}>
              <NavbarIcon src={src} />
              <S.NavbarListText>{text}</S.NavbarListText>
            </NavbarListLink>
          ))}
        </S.NavbarList>
        <LoginButton>Войти</LoginButton>
      </S.Navbar>
    </S.Container>
  );
};

export default Header;
