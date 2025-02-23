import $api from "@api";
import { IGood } from "./products";

export interface IFavourite {
  id: number;
  product: IGood;
}

const Favourites = {
  async get(): Promise<IFavourite[]> {
    const res = await $api.get(`/users/favourites`);

    if (res.status !== 200)
      throw new Error("Ошибка получения избранных товаров");
    const cart = res.data;

    return cart;
  },

  async addItem(id: number): Promise<IGood> {
    try {
      const res = await $api.post(`/users/favourites`, { productId: id });

      if (res.status !== 200)
        throw new Error("Ошибка добавления товара в избранноe");

      return res.data;
    } catch (error) {
      throw new Error("Ошибка добавления товара в избранноe");
    }
  },

  async deleteItem(id: number): Promise<boolean> {
    try {
      const res = await $api.delete(`/users/favourites/${id}`);

      if (res.status !== 200)
        throw new Error("Ошибка удаления товара из избранного");

      return true;
    } catch (error) {
      throw new Error("Ошибка удаления товара из избранного");
    }
  },
};

export default Favourites;
