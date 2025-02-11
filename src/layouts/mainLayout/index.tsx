import React, { FC, PropsWithChildren } from "react";
import { StyledContainer, StyledMainLayout } from "./styled";
import Header from "@components/shared/header";

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <StyledMainLayout>
    <Header />
    <StyledContainer>{children}</StyledContainer>
  </StyledMainLayout>
);

export default MainLayout;
