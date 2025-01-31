"use client";

import styled from "styled-components";

export const StyledButton = styled.button<{
  $primary?: boolean;
  $icon?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ $icon }) => $icon && "0.5em"};
  padding: 8px 16px;
  border: ${({ $primary }) => ($primary ? "none" : "1px solid #DDE2E4")};
  border-radius: 6px;
  font-size: 14px;
  font-weight: ${({ $primary }) => ($primary ? "500" : "400")};
  font-family: inherit;
  line-height: 24px;
  color: ${({ $primary, theme }) =>
    $primary ? theme.colors.base : theme.colors.text};
  background-color: ${({ $primary, theme }) =>
    $primary ? theme.colors.primary : theme.colors.base};
  cursor: pointer;
  transition: 0.2s ease-out;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;
