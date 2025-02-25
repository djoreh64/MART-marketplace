import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OZON",
    short_name: "OZON",
    description:
      "OZON - крупнейший онлайн-магазин, предлагающий товары для всех категорий покупателей. Отличные предложения и скидки!",
    start_url: "/",
    display: "standalone",
    background_color: "#1A6CFF",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
<<<<<<< HEAD
<<<<<<< HEAD
=======
        purpose: "maskable",
>>>>>>> 5682a3241b38baab74d9077cbfc3c6ba51cb5b93
=======
        purpose: "maskable",
>>>>>>> b8a8d18e57ccd3623150479fa5c6bb07fe2f3179
      },
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
<<<<<<< HEAD
<<<<<<< HEAD
=======
        purpose: "maskable",
>>>>>>> 5682a3241b38baab74d9077cbfc3c6ba51cb5b93
=======
        purpose: "maskable",
>>>>>>> b8a8d18e57ccd3623150479fa5c6bb07fe2f3179
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
<<<<<<< HEAD
<<<<<<< HEAD
=======
        purpose: "maskable",
>>>>>>> 5682a3241b38baab74d9077cbfc3c6ba51cb5b93
=======
        purpose: "maskable",
>>>>>>> b8a8d18e57ccd3623150479fa5c6bb07fe2f3179
      },
    ],
  };
}
