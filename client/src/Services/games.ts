import { Game } from "../Interfaces/game";

const baseUrl: string = "http://localhost:5500/games";

export const fetchGamesData = async () : Promise < Game[] | unknown > => {
  try {
    const { GamesData } : { GamesData : Game[]} = await(await fetch(`${baseUrl}`)).json();
  } 
  catch (error : unknown) {
    return error;
  }
};
