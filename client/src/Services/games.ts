import axios from "axios";
import { GameData } from "../Interfaces/game";

const baseUrl: string = "http://localhost:5500/games";

export const fetchGamesData = async () : Promise <GameData | unknown> => {
  try {
    const { GamesData } : GameData = (await axios.get<GameData>(baseUrl)).data;
  } 
  catch (error : unknown) {
    return error;
  }
};
