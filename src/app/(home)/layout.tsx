import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
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

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
