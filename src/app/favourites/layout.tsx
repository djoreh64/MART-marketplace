import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Избранное | MART",
  description:
    "Ваши избранные товары на MART. Сохраняйте понравившиеся товары и возвращайтесь к ним в любое время.",
  openGraph: {
    title: "Избранное | MART",
    description: "Ваши избранные товары на MART.",
    url: "https://djoreh64.ru/favourites",
    siteName: "MART",
    images: [
      {
        url: "https://djoreh64.ru/images/favourites-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Избранное на MART",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Избранное | MART",
    description: "Ваши избранные товары на MART.",
    images: ["https://djoreh64.ru/images/favourites-preview.jpg"],
  },
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
