import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Главная | MART",
  description:
    "MART - крупнейший онлайн-магазин, предлагающий товары для всех категорий покупателей. Отличные предложения и скидки!",
  openGraph: {
    title: "Главная | MART",
    description:
      "MART - крупнейший онлайн-магазин, предлагающий товары для всех категорий покупателей. Отличные предложения и скидки!",
    url: "https://djoreh64.ru/",
    siteName: "MART",
    images: [
      {
        url: "https://djoreh64.ru/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "MART - Онлайн магазин",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Главная | MART",
    description:
      "MART - крупнейший онлайн-магазин, предлагающий товары для всех категорий покупателей. Отличные предложения и скидки!",
    images: ["https://djoreh64.ru/images/logo.jpg"],
    creator: "@MART",
  },
  robots: "index, follow",
  keywords: "MART, интернет-магазин, товары, скидки, покупки онлайн",
  authors: [{ name: "MART" }],
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
