"use client";

import Button from "@components/button";
import Input from "@components/input";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  z-index: 100;
  padding: 16px 0;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.grayDark};

  @media screen and (max-width: 768px) {
    position: relative;
    margin-bottom: 12px;
    padding: 6px;
    border-radius: 0 0 24px 24px;
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

export const MobileNavbar = styled.nav`
  display: none;
  z-index: 100;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px 25px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.textLighter};
  background-color: ${({ theme }) => theme.colors.base};

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const MobileHeader = styled.div`
  display: none;
  z-index: 100;
  padding-bottom: 6px;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled(Link)`
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
`;

export const SearchModalHolder = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchModal = styled.div`
  position: absolute;
  top: 120%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.textLighter};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    border-radius: 12px;
  }
`;

export const SearchModalTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

export const SearchModalText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
`;

export const SearchModalItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  gap: 12px;
  text-decoration: none;
  border-radius: 16px;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(1.01);
  }
`;

export const SearchModalItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SearchModalItemName = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const SearchModalItemPrice = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const SearchModalLink = styled.a`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
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
    &:focus {
      border: 0;
      outline: none;
    }
  }
`;

export const SearchButton = styled(Button)`
  border-radius: 0 6px 6px 0;
  display: flex;
  padding: 14px 12px;
  align-items: center;
  justify-content: center;
  &:active,
  &:hover {
    scale: 1;
  }
`;

export const SearchInputHolder = styled.div<{ $icon?: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-left-width: 4px;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 40px;
    translate: 0 -50%;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: ${({ $icon }) => ($icon ? "0px 16px" : "0")};
    padding-top: 12px;
    background-color: ${({ theme }) => theme.colors.base};
    border: 1px solid ${({ theme }) => theme.colors.textLighter};
    border-radius: 0 0 24px 24px;
    &::before {
      display: none;
    }

    input {
      padding-left: ${({ $icon }) => ($icon ? "6px" : "16px")};
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

export const NavbarIcon = styled(Image)`
  transition: 0.1s ease-out;
`;

export const NavbarListLink = styled(Link)<{
  $active?: boolean;
  $cart?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  transition: 0.2s ease-out;
  &:hover {
    img {
      filter: saturate(1);
    }
    color: ${({ theme }) => theme.colors.primary};
  }

  img {
    filter: ${({ $active }) =>
      $active ? "saturate(1)" : "saturate(0) brightness(2.5)}"};
  }

  /* &::before {
    content: attr(data-count);
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ $cart }) => $cart && "16px"};
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.error};
    color: white;
    font-size: 12px;
    position: absolute;
    top: -8px;
    left: -4px;
  } */
`;

export const NavbarListText = styled.span`
  color: inherit;
  text-decoration: none;
`;
