import * as S from "../styled";
import Image from "next/image";

const ProductCard = () => (
  <S.Card href="/">
    <S.CardImageHolder>
      <S.CardImage
        src="/flower.jpg"
        alt="Комнатный цветок"
        width={300}
        height={300}
      />
    </S.CardImageHolder>
    <S.CardText>
      <S.CardTitle>Комнатный цветок</S.CardTitle>
      <S.CardInfo>
        <S.Prices>
          <S.OldPriceHolder>
            <S.OldPrice>999 ₽</S.OldPrice>
            <S.Sale>-10%</S.Sale>
          </S.OldPriceHolder>
          <S.Price>499.00 ₽</S.Price>
        </S.Prices>
        <S.CardButton primary>
          <Image
            src={`${process.env.CDN_PATH}/icons/cardCart.svg`}
            width={24}
            height={24}
            alt="Добавить в корзину"
          />
        </S.CardButton>
      </S.CardInfo>
    </S.CardText>
  </S.Card>
);

export default ProductCard;