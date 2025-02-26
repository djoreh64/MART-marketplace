"use client";

import React, { FC, PropsWithChildren } from "react";
import { StyledContainer, StyledMainLayout } from "./styled";
import Header from "@components/shared/header";
import { useServiceWorker } from "@hooks/useServiceWorker";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  useServiceWorker();
  return (
    <StyledMainLayout>
      <Header />
      <StyledContainer>{children}</StyledContainer>
    </StyledMainLayout>
  );
};

export default MainLayout;
