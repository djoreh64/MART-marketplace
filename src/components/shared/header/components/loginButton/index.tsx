import $api from "@api";
import Button from "@components/button";
import { useAuthStore } from "@stores/auth.store";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

const LoginButton: FC = () => {
  const router = useRouter();
  const isAuth = useAuthStore((state) => state.isAuth);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);

  const logout = async () => {
    const res = await $api.get("/users/logout");
    if (res.status === 200) {
      setIsAuth(false);
      router.push("/");
    }
  };

  if (isAuth) return <Button onClick={logout}>Выйти</Button>;
  return <Button onClick={() => router.push("/login")}>Войти</Button>;
};

export default LoginButton;
