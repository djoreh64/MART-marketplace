"use client";

import React, { FormEvent } from "react";
import * as S from "../styled";
import { Inputs, ModalButton } from ".";

export const Form = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.target as HTMLFormElement);
  };
  return (
    <S.Form onSubmit={onSubmit}>
      <Inputs />
      <ModalButton />
    </S.Form>
  );
};
