import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const generateMetadata = (): Metadata => ({
  title: "Корзина | MART",
  description:
    "Ознакомьтесь с товарами, которые вы добавили в корзину на MART. Выберите способ оплаты и оформления доставки.",
  openGraph: {
    title: "Корзина | MART",
    description:
      "Ознакомьтесь с товарами, которые вы добавили в корзину на MART. Выберите способ оплаты и оформления доставки.",
    url: "https://djoreh64.ru/cart",
    siteName: "MART",
    images: [
      {
        url: "https://djoreh64.ru/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Корзина на MART",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Корзина | MART",
    description:
      "Ознакомьтесь с товарами, которые вы добавили в корзину на MART. Выберите способ оплаты и оформления доставки.",
    images: ["https://djoreh64.ru/images/logo.jpg"],
    creator: "@MART",
  },
  robots: "index, follow",
  keywords: "MART, корзина, покупки онлайн, товары, доставка, оплата",
  authors: [{ name: "MART" }],
});

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
