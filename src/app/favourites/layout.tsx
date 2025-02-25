import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Избранное | OZON",
  description:
    "Ваши избранные товары на OZON. Сохраняйте понравившиеся товары и возвращайтесь к ним в любое время.",
  openGraph: {
    title: "Избранное | OZON",
    description: "Ваши избранные товары на OZON.",
    url: "https://djoreh64.ru/favourites",
    siteName: "OZON",
    images: [
      {
        url: "https://djoreh64.ru/images/favourites-preview.jpg",
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
    description: "Ваши избранные товары на OZON.",
    images: ["https://djoreh64.ru/images/favourites-preview.jpg"],
  },
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
