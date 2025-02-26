"use client";

import Button from "@components/button";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr 3.5fr;
  margin-top: 20px;
  gap: 36px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 18px;
    padding-bottom: 220px;
  }
`;

export const ImageHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  overflow: hidden;
  height: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 400px;
    padding: 12px;
    background-color: ${(props) => props.theme.colors.base};
    img {
      height: 100%;
      border-radius: 18px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    padding: 16px;
    background-color: ${(props) => props.theme.colors.base};
    border: 1px solid ${(props) => props.theme.colors.textLighter};
    border-radius: 24px;
  }
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 16px;
    background-color: ${(props) => props.theme.colors.base};
    border: 1px solid ${(props) => props.theme.colors.textLighter};
    border-radius: 24px;
  }
`;

export const Name = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Rating = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const RatingHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Reviews = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const About = styled.h3`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  margin-top: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 12px;
  }
`;

export const Details = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
`;

export const DetailItem = styled.dl`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.textLighter};
  padding-bottom: 12px;
`;

export const DetailTitle = styled.dt`
  font-size: 16px;
  font-weight: 400;
`;

export const DetailValue = styled.dd`
  font-size: 16px;
  font-weight: 500;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 24px;
`;

export const PurchaseBlock = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.base};
  border-radius: 24px;
  padding: 24px;
  border: 1px solid ${(props) => props.theme.colors.textLighter};
  height: fit-content;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 120px;
    left: 12px;
    right: 12px;
    padding: 12px;
  }
`;

export const CurrentPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primaryLighter};
  padding: 12px 16px;
  border-radius: 14px;
`;

export const PriceHolder = styled.div`
  display: flex;
  gap: 12px;
`;

export const OldPrice = styled.div`
  font-size: 14px;
  text-decoration: line-through;
`;

export const OldPriceHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Savings = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.success};
  background-color: ${(props) => props.theme.colors.successLighter};
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 500;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 48px;
    left: 0;
    right: 0;
    padding: 12px;
    background-color: ${(props) => props.theme.colors.bg};
  }
`;

export const StyledBuyButton = styled(Button)<{ $inCart: boolean }>`
  justify-content: center;
  font-size: 14px;
  flex: 1;
  border-radius: 12px;
  background-color: ${(props) =>
    !props.$inCart ? props.theme.colors.primary : props.theme.colors.success};
  color: ${(props) => props.theme.colors.base};
  &:hover {
    scale: 1.02;
  }

  &:active {
    scale: 0.98;
  }
`;

export const FavoriteButton = styled(Button)<{ $inFavorites: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 50px;
  height: 50px;
  border: none;
  background-color: ${({ theme, $inFavorites }) =>
    $inFavorites ? theme.colors.errorLighter : theme.colors.primaryLighter};
  border-radius: 12px;
  transition: 0.2s ease-out;

  svg,
  path {
    transition: 0.1s ease-out;
  }
`;
