"use client";

import Button from "@components/button";
import useScreenSize from "@hooks/useScreenSize";
import { ChevronLeft, Menu, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { navbarListItems, navbarListItemsMobile } from "./data";
import * as S from "./styled";
import { LoginButton, NavbarIcon, SearchModal } from "./components";
import { useAuthStore } from "@stores/auth.store";
import $api from "@api";
import toast from "react-hot-toast";
import Goods, { IGood } from "@api/products";

const Header: FC = () => {
  const { isMobile } = useScreenSize();
  const [isMobileScreen, setIsMobileScreen] = useState(isMobile);
  const [goods, setGoods] = useState<IGood[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const isAuth = useAuthStore((state) => state.isAuth);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const setUser = useAuthStore((state) => state.setUser);

  const searchGoods = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const goods = await Goods.search(e.target.value);
      if (goods.length !== 0) setModalVisible(true);
      else setModalVisible(false);
      setGoods(goods);
    } catch {
      toast.error("Произошла ошибка при поиске товаров");
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setModalVisible(false);
    }, 200);
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await $api.get("/users/me");
        const user = res.data;
        if (!user) return;
        setIsAuth(true);
        setUser(user);
      } catch {
        setIsAuth(false);
      }
    };

    if (!isAuth) checkAuth();
  }, [isAuth]);

  useEffect(() => {
    setIsMobileScreen(isMobile);
  }, [isMobile]);

  if (isMobileScreen) {
    return (
      <>
        <S.MobileHeader>
          <S.SearchModalHolder>
            {modalVisible && <SearchModal items={goods} />}
            <S.SearchInputHolder $icon={pathname !== "/"}>
              {pathname !== "/" && (
                <Link href={pathname} onClick={() => router.back()}>
                  <ChevronLeft size={16} />
                </Link>
              )}
              <S.SearchInput
                maxLength={150}
                onFocus={searchGoods}
                onBlur={handleBlur}
                onChange={searchGoods}
              />
            </S.SearchInputHolder>
          </S.SearchModalHolder>
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
        <S.Title href="/">MART</S.Title>
        {/* <Button icon primary>
          <Menu />
          Каталог
        </Button> */}
        <S.SearchModalHolder>
          {modalVisible && <SearchModal items={goods} />}
          <S.SearchInputHolder>
            <S.SearchInput
              maxLength={150}
              onFocus={searchGoods}
              onBlur={handleBlur}
              onChange={searchGoods}
            />
            <S.SearchButton primary>
              <SearchIcon />
            </S.SearchButton>
          </S.SearchInputHolder>
        </S.SearchModalHolder>

        <S.NavbarList>
          {navbarListItems.map(({ src, href, text }) => (
            <S.NavbarListLink
              $cart={src !== "cart"}
              data-count={"3"}
              $active={pathname === href}
              href={href}
              key={src}
            >
              <NavbarIcon src={src} />
              <S.NavbarListText>{text}</S.NavbarListText>
            </S.NavbarListLink>
          ))}
        </S.NavbarList>
        <LoginButton />
      </S.Navbar>
    </S.Container>
  );
};

export default Header;
