import MainLayout from "@layouts/mainLayout";
import StyledComponentsRegistry from "@lib/registry";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Главная | OZON",
  description:
    "OZON - крупнейший онлайн-магазин, предлагающий товары для всех категорий покупателей. Отличные предложения и скидки!",
  openGraph: {
    title: "Главная | OZON",
    description:
      "OZON - крупнейший онлайн-магазин, предлагающий товары для всех категорий покупателей. Отличные предложения и скидки!",
    url: "https://ozon.ru",
    siteName: "OZON",
    images: [
      {
        url: "https://djoreh64.ru/logo.jpg",
        width: 1200,
        height: 630,
        alt: "OZON - Онлайн магазин",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Главная | OZON",
    description:
      "OZON - крупнейший онлайн-магазин, предлагающий товары для всех категорий покупателей. Отличные предложения и скидки!",
    images: ["https://ozon.ru/default-image.jpg"],
    creator: "@Ozon",
  },
  robots: "index, follow",
  keywords: "OZON, интернет-магазин, товары, скидки, покупки онлайн",
  authors: [{ name: "OZON" }],
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
        <MainLayout>
          {auth}
          {children}
        </MainLayout>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
