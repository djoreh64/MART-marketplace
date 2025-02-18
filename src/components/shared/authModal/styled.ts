"use client";

import Button from "@components/button";
import Input from "@components/input";
import styled from "styled-components";

export const Title = styled.h2`
  margin: 0;
  line-height: 1.5;
  font-size: 28px;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ModalInput = styled(Input)`
  margin: 0;
  font-size: 16px;
  padding: 16px 20px;
  padding-left: 50px;
  border-radius: 12px;
  width: 100%;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.textLighter};
  color: "808080";

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
    scale: 1.01;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputHolder = styled.div`
  position: relative;
  display: flex;
  gap: 12px;

  &:has(input:focus) div {
    scale: 1.1;
    translate: -2px -50%;
  }
`;

export const ModalButton = styled(Button)`
  border-radius: 18px;
  padding: 18px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 16px;
  height: 60px;

  &:focus-visible,
  &:hover {
    scale: 1.01;
    outline: 0;
  }

  &:active {
    scale: 0.99;
  }
`;

export const Icon = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 12px;
  top: 50%;
  left: 22px;
  translate: 0 -50%;
  color: ${({ theme }) => theme.colors.icon};
  transition: 0.2s ease-out;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HasAccount = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 14px;
  & button {
    padding: 0;
    border: none;
    font-family: inherit;
    font-size: 14px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
  }
`;

export const StyledCompanyAuthLink = styled.button`
  padding: 0;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
`;
