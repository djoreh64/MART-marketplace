"use client";

import React, { FC, useState } from "react";
import * as S from "../styled";
import ActionsItemIcon from "./actionsItemIcon";
import { Minus, Plus } from "lucide-react";
import useScreenSize from "@hooks/useScreenSize";

interface Props {
  name: string;
  price: number;
  oldPrice: number;
  image: string;
}

const Good: FC<Props> = ({ name, price, oldPrice, image }) => {
  const [goodQuantity, setGoodQuantity] = useState(1);
  const { isMobile } = useScreenSize();

  if (isMobile) {
    return (
      <S.Good>
        <S.GoodMain>
          <S.GoodImage src={image} alt="" width={77} height={70} />
          <S.GoodInfo>
            <S.GoodName>{name}</S.GoodName>
            <S.GoodPriceHolder>
              <S.GoodPrice>{price}₽</S.GoodPrice>
              <S.GoodOldPrice>{oldPrice}₽ без скидки</S.GoodOldPrice>
            </S.GoodPriceHolder>
          </S.GoodInfo>
        </S.GoodMain>

        <S.GoodQuantity>
          <S.GoodQuantityButtons>
            <S.GoodActions>
              <S.GoodActionsItem>
                <ActionsItemIcon type="favourite" />
              </S.GoodActionsItem>
              <S.GoodActionsItem>
                <ActionsItemIcon type="delete" />
              </S.GoodActionsItem>
            </S.GoodActions>
            <S.GoodQuantityButtonsHolder>
              <S.GoodQuantityButton
                onClick={() => setGoodQuantity(goodQuantity - 1)}
                disabled={goodQuantity === 1}
              >
                <Minus width={20} height={20} />
              </S.GoodQuantityButton>
              <S.GoodQuantityInputHolder>
                <S.GoodQuantityInput
                  min={1}
                  value={goodQuantity || ""}
                  type="number"
                  onChange={(e) => setGoodQuantity(Number(e.target.value))}
                />
              </S.GoodQuantityInputHolder>
              <S.GoodQuantityButton
                onClick={() => setGoodQuantity(goodQuantity + 1)}
              >
                <Plus />
              </S.GoodQuantityButton>
            </S.GoodQuantityButtonsHolder>
          </S.GoodQuantityButtons>
        </S.GoodQuantity>
      </S.Good>
    );
  }

  return (
    <S.Good>
      <S.GoodMain>
        <S.GoodImage src={image} alt="" width={77} height={70} />
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
            onClick={() => setGoodQuantity(goodQuantity - 1)}
            disabled={goodQuantity === 1}
          >
            <Minus width={20} height={20} />
          </S.GoodQuantityButton>
          <S.GoodQuantityInputHolder>
            <S.GoodQuantityInput
              min={1}
              value={goodQuantity || ""}
              type="number"
              onChange={(e) => setGoodQuantity(Number(e.target.value))}
            />
          </S.GoodQuantityInputHolder>
          <S.GoodQuantityButton
            onClick={() => setGoodQuantity(goodQuantity + 1)}
          >
            <Plus />
          </S.GoodQuantityButton>
        </S.GoodQuantityButtons>
        <S.GoodQuantityTotal>{price}₽ / шт</S.GoodQuantityTotal>
      </S.GoodQuantity>
    </S.Good>
  );
};

export default Good;
