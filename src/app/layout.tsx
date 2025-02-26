import MainLayout from "@layouts/mainLayout";
import StyledComponentsRegistry from "@lib/registry";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  icons: [
    {
      url: "/icon192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/icon256x256.png",
      sizes: "256x256",
      type: "image/png",
    },
    {
      url: "/icon512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  appleWebApp: {
    statusBarStyle: "black-translucent",
  },
};

const RootLayout = ({
  children,
  auth,
}: Readonly<PropsWithChildren & { auth: React.ReactNode }>) => {
  return (
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
};

export default RootLayout;
