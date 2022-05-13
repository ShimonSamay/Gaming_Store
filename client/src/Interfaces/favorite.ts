import { Game } from "./game";

export interface FavoritesAction {
  type: string;
  payload: Game;
}
