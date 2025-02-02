import MainLayout from "@layouts/mainLayout";
import StyledComponentsRegistry from "@lib/registry";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "OZON",
  description: "OZON",
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="ru">
    <body>
      <StyledComponentsRegistry>
        <MainLayout>{children}</MainLayout>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
