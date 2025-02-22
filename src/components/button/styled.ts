"use client";

import styled from "styled-components";

export const StyledButton = styled.button<{
  $primary?: boolean;
  $icon?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $icon }) => $icon && "0.5em"};
  padding: 8px 16px;
  border: ${({ $primary }) => ($primary ? "none" : "1px solid #DDE2E4")};
  border-radius: 6px;
  text-align: center;
  font-size: 14px;
  font-weight: ${({ $primary }) => ($primary ? "500" : "400")};
  font-family: inherit;
  line-height: 24px;
  color: ${({ $primary, theme }) => ($primary ? "#fff" : theme.colors.text)};
  background-color: ${({ $primary, theme }) =>
    $primary ? theme.colors.primary : theme.colors.grayDark};
  cursor: pointer;
  transition: 0.2s ease-out;
  &:hover {
    scale: 1.05;
  }
  &:active {
    scale: 0.95;
  }
  &:disabled {
    pointer-events: none;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Loader = styled.span<{ $dark?: boolean }>`
  width: 48px;
  height: 48px;
  background: ${({ $dark, theme }) => (!$dark ? "#fff" : theme.colors.primary)};
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  animation: animloader 1s ease-in infinite;

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
