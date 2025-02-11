"use client";

import styled from "styled-components";

export const StyledInput = styled.input`
  font-family: inherit;
  padding: 1em;
  line-height: 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  transition: 0.2s ease-out;

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
