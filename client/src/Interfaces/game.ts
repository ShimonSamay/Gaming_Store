export interface Game {
  name: string;
  price: Number;
  image: string;
  category: string;
  description: string;
  sellerName: string;
  seller_id: string;
}

export interface GameData {
  GamesData: Game[];
}

export interface GamesAction {
  type: string;
  payload: Game[] ;
}
