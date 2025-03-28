import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MART",
    short_name: "MART",
    description:
      "MART - крупнейший онлайн-магазин, предлагающий товары для всех категорий покупателей. Отличные предложения и скидки!",
    start_url: "/",
    display: "standalone",
    background_color: "#1A6CFF",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon256x256.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
