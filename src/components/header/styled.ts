"use client";

import Button from "@components/button";
import Input from "@components/input";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 75px;
  top: 0;
  left: 0;
  color: #000;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    padding: 6px;
    border-radius: 24px;
    height: unset;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 25px;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled(Link)`
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
`;

export const SearchInput = styled(Input).attrs({
  type: "search",
  placeholder: "Искать на сайте",
})`
  width: 30vw;
  padding: 11px 16px;
  border: none;
  border-radius: 12px;
  outline: none;
  font-size: 14px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchButton = styled(Button)`
  border-radius: 0 6px 6px 0;
  display: flex;
  padding: 12px 12px;
  align-items: center;
  justify-content: center;
  &:active,
  &:hover {
    transform: scale(1);
  }
`;

export const SearchInputHolder = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.textLighter};
    border-radius: 24px;
    &::before {
      display: none;
    }
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding-left: 0;
`;

export const NavbarIcon = styled.img`
  transition: 0.1s ease-out;
  filter: saturate(0) brightness(2.5);
`;

export const NavbarListLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease-out;
  &:hover {
    img {
      filter: saturate(1);
    }
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavbarListText = styled.span`
  color: inherit;
  text-decoration: none;
`;

export const MobileNavbar = styled.nav`
  display: none;
  padding-bottom: 6px;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
