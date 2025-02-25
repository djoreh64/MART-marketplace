"use client";

import { FC, useEffect, useState } from "react";
import * as S from "./styled";
import Good from "./components/Good";
import Image from "next/image";
import Link from "next/link";
import OrdersController, { IOrder } from "@api/order";
import { formatDate } from "@utils/formatDate";
import { Loader, LoaderWrapper } from "@components/button/styled";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useAuthStore } from "@stores/auth.store";

const Orders: FC = () => {
  const [orders, setOrders] = useState([] as IOrder[]);
  const [loading, setLoading] = useState(true);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const getOrders = async () => {
      try {
        setLoading(true);
        const orders = await OrdersController.get();
        setOrders(orders);
      } catch (error) {
        if (error instanceof AxiosError)
          toast.error(error.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  if (loading) {
    return (
      <S.EmptyContent>
        <S.EmptyHeadline>
          <LoaderWrapper>
            <Loader $dark />
          </LoaderWrapper>
        </S.EmptyHeadline>
      </S.EmptyContent>
    );
  }

  if (orders.length === 0) {
    return (
      <S.Content>
        <S.Container>
          <S.Block>
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN_PATH}/profile.svg`}
              alt="Фото профиля"
              width={163}
              height={163}
            />
            <S.UserInfo>
              <S.UserName>
                {user?.firstName} {user?.lastName}
              </S.UserName>
              <S.UserBalance>Баланс: {user?.balance}₽</S.UserBalance>
            </S.UserInfo>
          </S.Block>
          <S.Block $empty>
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN_PATH}/cart/box.png`}
              alt="empty"
              width={214}
              height={128}
            />
            <S.EmptyHeadline>Список заказов пуст</S.EmptyHeadline>
            <S.EmptyDescription>
              Закажите понравившийся товар, добавленный в корзину
            </S.EmptyDescription>
            <S.EmptyButton primary>
              <Link href="/">К покупкам</Link>
            </S.EmptyButton>
          </S.Block>
        </S.Container>
      </S.Content>
    );
  }

  return (
    <S.Content>
      <S.Headline>Заказы</S.Headline>
      <S.Container>
        <S.Block>
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_PATH}/profile.svg`}
            alt="Фото профиля"
            width={163}
            height={163}
          />
          <S.UserInfo>
            <S.UserName>
              {user.firstName} {user.lastName}
            </S.UserName>
            <S.UserBalance>Баланс: {user.balance}₽</S.UserBalance>
          </S.UserInfo>
        </S.Block>
        <S.Orders>
          {orders.map(({ id, orderItems, createdAt, totalAmount }) => (
            <S.Block key={id}>
              <S.Delivery>
                Заказ от {formatDate(createdAt)} на {totalAmount}₽
              </S.Delivery>
              {orderItems.map(({ product, quantity }) => (
                <Good key={product.id} good={product} quantity={quantity} />
              ))}
            </S.Block>
          ))}
        </S.Orders>
      </S.Container>
    </S.Content>
  );
};

export default Orders;
