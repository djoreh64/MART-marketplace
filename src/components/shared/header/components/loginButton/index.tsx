"use client";

import Button from "@components/button";
import { useRouter } from "next/navigation";
import React, { FC, PropsWithChildren } from "react";

const LoginButton: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  return <Button onClick={() => router.push("/login")}>{children}</Button>;
};

export default LoginButton;
