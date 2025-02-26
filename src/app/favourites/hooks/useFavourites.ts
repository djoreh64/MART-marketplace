import Favourites from "@api/favourites";
import { useFavouritesStore } from "@stores/favourites.store";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useFavourites = () => {
  const [loading, setLoading] = useState(true);

  const setFavourites = useFavouritesStore((state) => state.setFavourites);
  const favourites = useFavouritesStore((state) => state.favourites);

  const getCart = async () => {
    try {
      const favourites = await Favourites.get();
      setFavourites(favourites);
    } catch {
      toast.error("Ошибка при получении списка избранного:");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return { loading, favourites };
};

export default useFavourites;
