import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MART",
  description: "MART - лучший маркетплейс",
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
