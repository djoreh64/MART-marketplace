"use client";

import Button from "@components/button";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-bottom: 72px;

  @media screen and (max-width: 768px) {
    gap: 12px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 21px;

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

export const Recommendations = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: span 2;
  grid-column: span 2;
  padding: 32px 34px;
  border-radius: 18px;
  background-color: #ebdabb;

  @media screen and (max-width: 768px) {
    grid-row: 3;
    grid-column: 1 / -1;
    padding: 20px;
  }
`;

export const RecommendationsTitle = styled.h2`
  font-size: 28px;
  margin: 0;
  font-weight: 600;
  margin-top: 4px;
`;

export const RecommendationsSubtitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

export const RecommendationsImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 28px;
`;

export const RecommendationsImage = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 12px;
`;

export const RecommendationsButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  margin-top: 28px;
  border-radius: 12px;
`;

export const RecommendationsButton = styled(Button)`
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.colors.textLight};
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.colors.textLighter};
  border-radius: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.grayDark};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  transition: 0.2s ease-out;
  &:hover {
    translate: 0 2px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  }
  &:active {
    scale: 0.98;
  }
`;

export const CardImageHolder = styled.div`
  height: 70%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  padding: 11px 18px;
  gap: 6px;
  padding-top: 0;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  text-decoration: none;
  color: inherit;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const OldPrice = styled.h5`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const OldPriceHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
`;

export const Sale = styled.span`
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryLighter};
`;

export const Price = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

export const CardButton = styled(Button)`
  aspect-ratio: 1;
  padding: 10px;
  border-radius: 14px;
`;

export const Banner = styled(Image)`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    height: 100px;
    border-radius: 12px;
    object-fit: cover;
  }
`;
