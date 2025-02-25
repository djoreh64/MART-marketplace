import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My App",
  description: "This is my awesome app",
  icons: [
    {
      url: "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/icon-256x256.png",
      sizes: "256x256",
      type: "image/png",
    },
    {
      url: "/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  appleWebApp: {
    statusBarStyle: "black-translucent",
  },
};

