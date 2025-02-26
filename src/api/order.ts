import $api from "@api";
import { ICartItem } from "./cart";
import { IGood } from "./products";

interface IOrderItem {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
  product: IGood;
}

export interface IOrder {
  id: number;
  userId: number;
  totalAmount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  orderItems: IOrderItem[];
}

const Orders = {
  async get(): Promise<IOrder[]> {
    const res = await $api.get(`/users/orders`);
    if (res.status !== 200) throw new Error("Ошибка получения заказов");
    return res.data;
  },

  async create(item: ICartItem[]): Promise<unknown> {
    const res = await $api.post("/users/orders", { item });
    if (res.status !== 201) throw new Error("Ошибка создания заказа");
    return res.data;
  },
};

export default Orders;
