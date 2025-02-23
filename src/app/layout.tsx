import { Metadata } from "next";
import MainLayout from "@layouts/mainLayout";
import StyledComponentsRegistry from "@lib/registry";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Главная | OZON",
    description:
      "OZON - крупнейший онлайн-магазин, предлагающий товары для всех категорий покупателей. Отличные предложения и скидки!",
    openGraph: {
      title: "Главная | OZON",
      description:
        "OZON - крупнейший онлайн-магазин, предлагающий товары для всех категорий покупателей. Отличные предложения и скидки!",
      url: "https://djoreh64.ru/",
      siteName: "OZON",
      images: [
        {
          url: "https://djoreh64.ru/images/logo.jpg",
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
      images: ["https://djoreh64.ru/images/logo.jpg"],
      creator: "@Ozon",
    },
    robots: "index, follow",
    keywords: "OZON, интернет-магазин, товары, скидки, покупки онлайн",
    authors: [{ name: "OZON" }],
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const RootLayout = ({
  children,
  auth,
}: Readonly<PropsWithChildren & { auth: React.ReactNode }>) => (
  <html lang="ru">
    <body>
      <StyledComponentsRegistry>
        <Toaster
          containerStyle={{ bottom: 80 }}
          toastOptions={{
            duration: 2000,
            style: {
              fontFamily: "TTFirsNeue, sans-serif",
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
