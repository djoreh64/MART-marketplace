import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Заказы | OZON",
  description: "OZON",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
