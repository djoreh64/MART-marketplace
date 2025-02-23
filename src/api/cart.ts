import $api from "@api";
import { IGood } from "./products";

export type TCartGood = IGood & { quantity: number };

export interface ICartItem {
  id: number;
  product: TCartGood;
  quantity: number;
}

export interface ICart {
  cart: ICartItem[];
}

const Cart = {
  async get(): Promise<ICartItem[]> {
    const res = await $api.get(`/users/cart`);

    if (res.status !== 200) throw new Error("Ошибка получения корзины");
    const cart = res.data;

    return cart;
  },

  async addItem(id: number): Promise<ICartItem> {
    try {
      const res = await $api.post(`/users/cart`, { productId: id });

      if (res.status !== 200)
        throw new Error("Ошибка добавления товара в корзину");

      return res.data;
    } catch (error) {
      throw new Error("Ошибка добавления товара в корзину");
    }
  },

  async deleteItem(id: number): Promise<boolean> {
    try {
      const res = await $api.delete(`/users/cart/${id}`);

      if (res.status !== 200)
        throw new Error("Ошибка удаления товара из корзины");

      return true;
    } catch (error) {
      throw new Error("Ошибка удаления товара из корзины");
    }
  },

  async changeQuantity(id: number, quantity: number): Promise<boolean> {
    try {
      const res = await $api.put(`/users/cart/${id}`, { quantity });

      if (res.status !== 200)
        throw new Error("Ошибка изменения количества товара в корзине");

      return true;
    } catch (error) {
      throw new Error("Ошибка изменения количества товара в корзине");
    }
  },
};

export default Cart;
