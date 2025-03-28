import * as S from "../../styled";
import { FC } from "react";
import Image from "next/image";
import { IGood } from "@api/products";

interface Props {
  items: Pick<IGood, "id" | "name" | "imageUrl" | "price">[];
}

const SearchModal: FC<Props> = ({ items }) => (
  <S.SearchModal>
    {items.map(({ id, imageUrl, name, price }) => (
      <S.SearchModalItem href={`/good/${id}`} key={id}>
        <Image src={`${imageUrl}`} width={77} height={71} alt="" />
        <S.SearchModalItemInfo>
          <S.SearchModalItemName>{name}</S.SearchModalItemName>
          <S.SearchModalItemPrice>{price} ₽</S.SearchModalItemPrice>
        </S.SearchModalItemInfo>
      </S.SearchModalItem>
    ))}
  </S.SearchModal>
);

export default SearchModal;
