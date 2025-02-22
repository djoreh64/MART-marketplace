"use client";

import React, { FC, PropsWithChildren } from "react";
import Modal from "@components/modal";
import { AuthProvider } from "../provider/authProvider";

const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Modal isVisible setVisible={() => {}}>
      <AuthProvider>{children}</AuthProvider>
    </Modal>
  );
};

export default Content;
