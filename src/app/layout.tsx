import AuthModal from "@components/shared/authModal";
import MainLayout from "@layouts/mainLayout";
import StyledComponentsRegistry from "@lib/registry";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Главная | OZON",
  description: "OZON",
};

interface Props {
  auth: React.ReactNode;
}

const RootLayout = ({
  children,
  auth,
}: Readonly<PropsWithChildren & Props>) => (
  <html lang="ru">
    <body>
      <StyledComponentsRegistry>
        {auth}
        <Toaster
          containerStyle={{ bottom: 80 }}
          toastOptions={{
            duration: 2000,
            style: {
              fontFamily: "TT Firs Neue, sans-serif",
            },
            position: "bottom-center",
          }}
        />
        <MainLayout>{children}</MainLayout>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
