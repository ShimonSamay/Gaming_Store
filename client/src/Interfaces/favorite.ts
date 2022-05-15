import { Game } from "./game";

export interface favorite {
  _id : string ;
  user_id : string ;
  favorites : Game[]
  createdAt : Date 
  updatedAt : Date
}

export interface FavoritesAction {
  type: string;
  payload: Game;
}
