"use client";

import Button from "@components/button";
import { useModalStore } from "@stores/modal.store";
import React, { FC, PropsWithChildren } from "react";

const LoginButton: FC<PropsWithChildren> = ({ children }) => {
  const { setAuthModalVisible } = useModalStore();
  return <Button onClick={() => setAuthModalVisible(true)}>{children}</Button>;
};

export default LoginButton;
