"use client";

import React, { FC, useState } from "react";
import ActionsItemIcon from "./actionsItemIcon";
import { Minus, Plus } from "lucide-react";
import * as S from "../styled";

interface Props {
  name: string;
  price: number;
  oldPrice: number;
  image: string;
}

const Good: FC<Props> = ({ name, price, oldPrice, image }) => {
  const [goodQuantity, setGoodQuantity] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setGoodQuantity(Number(e.target.value));
  const handleBlur = () => goodQuantity < 1 && setGoodQuantity(1);
  const increaseQuantity = () => setGoodQuantity(goodQuantity + 1);
  const decreaseQuantity = () => setGoodQuantity(goodQuantity - 1);

  return (
    <S.Good>
      <S.GoodMain>
        <S.GoodImage src={image} alt={name} width={77} height={70} />
        <S.GoodInfo>
          <S.GoodName>{name}</S.GoodName>
          <S.GoodActions>
            <S.GoodActionsItem>
              <ActionsItemIcon type="favourite" />
            </S.GoodActionsItem>
            <S.GoodActionsItem>
              <ActionsItemIcon type="delete" />
            </S.GoodActionsItem>
          </S.GoodActions>
        </S.GoodInfo>
      </S.GoodMain>
      <S.GoodPriceHolder>
        <S.GoodPrice>{price}₽</S.GoodPrice>
        <S.GoodOldPrice>{oldPrice}₽ без скидки</S.GoodOldPrice>
      </S.GoodPriceHolder>
      <S.GoodQuantity>
        <S.GoodQuantityButtons>
          <S.GoodQuantityButton
            onClick={decreaseQuantity}
            disabled={goodQuantity === 1}
          >
            <Minus width={20} height={20} />
          </S.GoodQuantityButton>
          <S.GoodQuantityInputHolder>
            <S.GoodQuantityInput
              min={1}
              value={goodQuantity || ""}
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </S.GoodQuantityInputHolder>
          <S.GoodQuantityButton onClick={increaseQuantity}>
            <Plus />
          </S.GoodQuantityButton>
        </S.GoodQuantityButtons>
        <S.GoodQuantityTotal>{price}₽ / шт</S.GoodQuantityTotal>
      </S.GoodQuantity>
    </S.Good>
  );
};

export default Good;
