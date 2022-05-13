import { Game } from "../Interfaces/game";
import { FavoritesAction } from "../Interfaces/favorite";

export const addToFavorites = (value: Game) : FavoritesAction => {
  return {
    type: "ADD",
    payload: value,
  };
};

export const removeFromFavorites = (value: Game) : FavoritesAction => {
  return {
    type: "REMOVE",
    payload: value,
  };
};
