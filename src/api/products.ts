import $api from "@api";

export interface IGood {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  originalPrice: number;
  color: string;
  material: string;
  country: string;
  description: string;
  isInCart: boolean;
  isInFavourites: boolean;
  cartItemId: number;
  favoriteItemId: number;
  category: {
    id: number;
    name: string;
  };
}

const Goods = {
  async search(query: string): Promise<IGood[]> {
    const res = await $api.get(`/search?query=${query}`);
    if (res.status !== 200) throw new Error("Ошибка получения товара");
    return res.data.results;
  },

  async getOne(id: string): Promise<IGood> {
    const res = await $api.get(`/products/${id}`);
    if (res.status !== 200) throw new Error("Ошибка получения товара");
    return res.data;
  },

  async get(): Promise<IGood[]> {
    const res = await $api.get("/products");
    if (res.status !== 200) throw new Error("Ошибка получения товара");
    return res.data;
  },
};

export default Goods;
