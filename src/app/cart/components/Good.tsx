"use client";

import React, { FC } from "react";
import { Minus, Plus } from "lucide-react";
import * as S from "../styled";
import ActionsItemIcon from "./actionsItemIcon";
import { ICartItem } from "@api/cart";
import { useCart } from "../hooks/useCart";

interface Props {
  cartItem: ICartItem;
}

const Good: FC<Props> = ({ cartItem }) => {
  const { imageUrl, name, originalPrice, price, id } = cartItem.product;
  const {
    deleteCartItem,
    handleDecrease,
    handleIncrease,
    handleChange,
    handleBlur,
    quantity,
  } = useCart(cartItem);

  return (
    <S.Good>
      <S.GoodMain>
        <S.GoodImageHolder href={`/good/${id}`}>
          <S.GoodImage src={imageUrl} alt={name} width={77} height={70} />
        </S.GoodImageHolder>
        <S.GoodInfo>
          <S.GoodName>{name}</S.GoodName>
          <S.GoodActions>
            <S.GoodActionsItem>
              <ActionsItemIcon type="favourite" />
            </S.GoodActionsItem>
            <S.GoodActionsItem onClick={deleteCartItem}>
              <ActionsItemIcon type="delete" />
            </S.GoodActionsItem>
          </S.GoodActions>
        </S.GoodInfo>
      </S.GoodMain>
      <S.GoodPriceHolder>
        <S.GoodPrice>{price * quantity}₽</S.GoodPrice>
        <S.GoodOldPrice>{originalPrice * quantity}₽ без скидки</S.GoodOldPrice>
      </S.GoodPriceHolder>
      <S.GoodQuantity>
        <S.GoodQuantityButtons>
          <S.GoodQuantityButton
            onClick={handleDecrease}
            disabled={quantity === 1}
          >
            <Minus width={20} height={20} />
          </S.GoodQuantityButton>
          <S.GoodQuantityInputHolder>
            <S.GoodQuantityInput
              onChange={handleChange}
              onBlur={handleBlur}
              value={quantity || ""}
              type="number"
            />
          </S.GoodQuantityInputHolder>
          <S.GoodQuantityButton onClick={handleIncrease}>
            <Plus />
          </S.GoodQuantityButton>
        </S.GoodQuantityButtons>
        <S.GoodQuantityTotal>{price}₽ / шт</S.GoodQuantityTotal>
      </S.GoodQuantity>
    </S.Good>
  );
};

export default Good;
