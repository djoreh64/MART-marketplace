"use client";

import React, { FormEvent } from "react";
import * as S from "../styled";
import { Inputs, ModalButton } from ".";

export const Form = () => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(data)),
        credentials: "include",
      }
    );
    const result = await response.json();
    console.log(result);
  };
  return (
    <S.Form onSubmit={onSubmit}>
      <Inputs />
      <ModalButton />
    </S.Form>
  );
};  
