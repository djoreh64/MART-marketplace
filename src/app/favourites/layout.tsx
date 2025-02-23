import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Избранное | OZON",
  description:
    "Ознакомьтесь со списком товаров, которые вы добавили в избранное на OZON.",
  openGraph: {
    title: "Избранное | OZON",
    description:
      "Ознакомьтесь со списком товаров, которые вы добавили в избранное на OZON.",
    url: "https://djoreh64.ru/cart",
    siteName: "OZON",
    images: [
      {
        url: "https://djoreh64.ru/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Избранное на OZON",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Избранное | OZON",
    description:
      "Ознакомьтесь с товарами, которые вы добавили в корзину на OZON. Выберите способ оплаты и оформления доставки.",
    images: ["https://djoreh64.ru/images/logo.jpg"],
    creator: "@Ozon",
  },
  robots: "index, follow",
  keywords: "OZON, избранное, покупки онлайн, товары, доставка, оплата",
  authors: [{ name: "OZON" }],
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
