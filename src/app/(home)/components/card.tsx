import { FC } from "react";
import * as S from "../styled";
import { IGood } from "@api/products";
import BuyButton from "./buyButton";

interface Props {
  good: IGood;
  isInCart: boolean;
}

const Card: FC<Props> = ({ good, isInCart }) => {
  const { imageUrl: image, name, originalPrice, price } = good;
  const percents = originalPrice / price;
  const sale = (percents * 100 - 100).toFixed(0);

  return (
    <S.Card href={`/good/${good.id}`}>
      <S.CardImageHolder>
        <S.CardImage src={image} alt="Товар" width={210} height={195} />
      </S.CardImageHolder>
      <S.CardText>
        <S.CardTitle>{name}</S.CardTitle>
        <S.CardInfo>
          <S.Prices>
            <S.OldPriceHolder>
              <S.OldPrice>{originalPrice} ₽</S.OldPrice>
              <S.Sale>-{sale}%</S.Sale>
            </S.OldPriceHolder>
            <S.Price>{price} ₽</S.Price>
          </S.Prices>
          <BuyButton isInCart={isInCart} productId={good.id} />
        </S.CardInfo>
      </S.CardText>
    </S.Card>
  );
};

export default Card;
