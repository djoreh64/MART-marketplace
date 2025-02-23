"use client";

import { Heart } from "lucide-react";
import React, { FC, useState } from "react";
import * as S from "../styled";
import Favourites from "@api/favourites";
import { useAuthStore } from "@stores/auth.store";
import { useRouter } from "next/navigation";

interface Props {
  productId: number;
  initialFavoriteItemId: number;
  isInFavourites: boolean;
}

const FavouriteButton: FC<Props> = ({
  initialFavoriteItemId,
  productId,
  isInFavourites,
}) => {
  const router = useRouter();
  const isAuth = useAuthStore((state) => state.isAuth);
  const [added, setAdded] = useState(isInFavourites);
  const [cartItemId, setCartItemId] = useState(initialFavoriteItemId);

  const handleClick = async () => {
    try {
      if (!isAuth) {
        router.push("/login");
        return;
      }
      if (added) {
        await Favourites.deleteItem(cartItemId);
        setAdded(false);
        setCartItemId(0);
        return;
      }
      const newItem = await Favourites.addItem(productId);
      setAdded(true);
      setCartItemId(newItem.id);
    } catch (error) {
      setAdded(false);
    }
  };

  return (
    <S.FavoriteButton $inFavorites={added} onClick={handleClick}>
      <Heart
        stroke={added ? "#F91155" : "#005BFF"}
        fill={added ? "#F91155" : "transparent"}
        size={20}
      />
    </S.FavoriteButton>
  );
};

export default FavouriteButton;
