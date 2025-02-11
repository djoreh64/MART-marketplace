"use client";

import React, { FC, PropsWithChildren } from "react";
import { useModalStore } from "@stores/modal.store";
import Modal from "@components/modal";
import { AuthProvider } from "../provider/authProvider";

const Content: FC<PropsWithChildren> = ({ children }) => {
  const { authModalVisible, setAuthModalVisible } = useModalStore();
  return (
    <Modal isVisible={authModalVisible} setVisible={setAuthModalVisible}>
      <AuthProvider>{children}</AuthProvider>
    </Modal>
  );
};

export default Content;
