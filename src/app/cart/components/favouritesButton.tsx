"use client";

import React, { FC, useState } from "react";
import * as S from "../styled";
import ActionsItemIcon from "./actionsItemIcon";
import Favourites from "@api/favourites";
import toast from "react-hot-toast";

interface Props {
  id: number;
  isInFavourites: boolean;
  favoriteItemId: number | null;
}

const FavouritesButton: FC<Props> = ({
  id,
  isInFavourites,
  favoriteItemId,
}) => {
  const [added, setAdded] = useState(isInFavourites);
  const [favId, setFavId] = useState(favoriteItemId);

  const handleFavourite = async () => {
    const prevAdded = added;
    setAdded(!added);

    try {
      if (prevAdded && favId) {
        await Favourites.deleteItem(favId);
        setFavId(null);
      } else {
        const response = await Favourites.addItem(id);
        setFavId(response.id);
      }
    } catch (error) {
      setAdded(prevAdded);
      if (error instanceof Error) toast.error(error.message);
    }
  };

  return (
    <S.GoodActionsItem $inFavourites={added} onClick={handleFavourite}>
      <ActionsItemIcon
        fill={added ? "#ff0000" : "#000"}
        stroke={added ? "#ff0000" : "#000"}
        type="favourite"
      />
    </S.GoodActionsItem>
  );
};

export default FavouritesButton;
