import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const generateMetadata = (): Metadata => ({
  title: "Корзина | OZON",
  description:
    "Ознакомьтесь с товарами, которые вы добавили в корзину на OZON. Выберите способ оплаты и оформления доставки.",
  openGraph: {
    title: "Корзина | OZON",
    description:
      "Ознакомьтесь с товарами, которые вы добавили в корзину на OZON. Выберите способ оплаты и оформления доставки.",
    url: "https://djoreh64.ru/cart",
    siteName: "OZON",
    images: [
      {
        url: "https://djoreh64.ru/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Корзина на OZON",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Корзина | OZON",
    description:
      "Ознакомьтесь с товарами, которые вы добавили в корзину на OZON. Выберите способ оплаты и оформления доставки.",
    images: ["https://djoreh64.ru/images/logo.jpg"],
    creator: "@Ozon",
  },
  robots: "index, follow",
  keywords: "OZON, корзина, покупки онлайн, товары, доставка, оплата",
  authors: [{ name: "OZON" }],
});

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
