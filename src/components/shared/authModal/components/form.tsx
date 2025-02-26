"use client";

import React, { FormEvent, useState } from "react";
import * as S from "../styled";
import { Inputs, ModalButton } from ".";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@stores/auth.store";
import User from "@api/user";
import { useAuthContextValue } from "../hooks/useAuthContextValue";

export const Form = () => {
  const [isPending, setIsPending] = useState(false);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const setUser = useAuthStore((state) => state.setUser);
  const { authType } = useAuthContextValue();
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsPending(true);
      if (authType === "register") await User.register(e.currentTarget);
      else await User.login(e.currentTarget);
      const user = await User.me();
      setUser(user);
      setIsAuth(true);
      toast.success("Вы успешно вошли в аккаунт");
      router.push("/");
      router.refresh();
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
