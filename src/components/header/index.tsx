import Button from "@components/button";
import * as S from "./styled";
import SearchIcon from "./components/searchIcon";
import NavbarIcon from "./components/navbarIcon";
import { navbarListItems, navbarListItemsMobile } from "./data";
import { NavbarListLink } from "./components/navbarListLink";

const Header = () => (
  <S.Container>
    <S.Navbar>
      <S.Title href="/">OZON</S.Title>
      <Button icon primary>
        <NavbarIcon src="menu" />
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
      <Button>Войти</Button>
    </S.Navbar>

    <S.MobileHeader>
      <S.SearchInputHolder>
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
  </S.Container>
);

export default Header;
