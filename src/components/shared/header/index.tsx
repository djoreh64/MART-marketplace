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
import { useAuthStore } from "@stores/auth.store";
import $api from "@api";

const Header: FC = () => {
  const { isMobile } = useScreenSize();
  const [isMobileScreen, setIsMobileScreen] = useState(isMobile);
  const pathname = usePathname();
  const router = useRouter();

  const isAuth = useAuthStore((state) => state.isAuth);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);

  useEffect(() => {
    if (isAuth) return;
    const checkAuth = async () => {
      try {
        await $api.get("/users/me");
        setIsAuth(true);
      } catch {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, [isAuth, router]);

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
        {<LoginButton />}
      </S.Navbar>
    </S.Container>
  );
};

export default Header;
