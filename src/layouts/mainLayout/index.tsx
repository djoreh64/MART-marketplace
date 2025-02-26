"use client";

import React, { FC, PropsWithChildren } from "react";
import { StyledContainer, StyledMainLayout } from "./styled";
import Header from "@components/shared/header";
import { useServiceWorker } from "@hooks/useServiceWorker";
import { usePushNotifications } from "@hooks/usePushNotifications";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  useServiceWorker();
  usePushNotifications();
  return (
    <StyledMainLayout>
      <Header />
      <StyledContainer>{children}</StyledContainer>
    </StyledMainLayout>
  );
};

export default MainLayout;
