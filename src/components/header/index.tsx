import Button from "@components/button";
import * as S from "./styled";
import SearchIcon from "./components/searchIcon";
import NavbarIcon from "./components/navbarIcon";
import { navbarListItems } from "./data";

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
          <S.NavbarListLink href={href} key={src}>
            <NavbarIcon src={src} />
            <S.NavbarListText>{text}</S.NavbarListText>
          </S.NavbarListLink>
        ))}
      </S.NavbarList>
      <Button>Войти</Button>
    </S.Navbar>

    <S.MobileNavbar>
      <S.SearchInputHolder>
        <S.SearchInput />
      </S.SearchInputHolder>
    </S.MobileNavbar>
  </S.Container>
);

export default Header;
