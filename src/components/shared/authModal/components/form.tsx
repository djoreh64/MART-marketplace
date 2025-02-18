"use client";

import React, { FormEvent, useState } from "react";
import * as S from "../styled";
import { Inputs, ModalButton } from ".";
import $api from "@api";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const Form = () => {
  const [isPending, setIsPending] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsPending(true);
      const data = new FormData(e.currentTarget);
      await $api.post("/users/login", Object.fromEntries(data));
      setIsPending(false);
    } catch (err) {
      if (err instanceof AxiosError) toast.error(err.response?.data?.error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <Inputs />
      <ModalButton loading={isPending} />
    </S.Form>
  );
};
