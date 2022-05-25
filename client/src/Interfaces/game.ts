export interface Game {
  _id? : string ;
  name?: string;
  price?: Number;
  quantity : Number
  image?: string;
  category?: string;
  description?: string;
  sellerName?: string;
  seller_id?: string;
}

export interface GameData {
  GamesData: Game[];
}

export interface GamesAction {
  type: string;
  payload: Game[] ;
}
