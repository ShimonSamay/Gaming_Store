import { Game, GamesAction } from "../Interfaces/game";

export const gamesReducer = ( state:Game[], action:GamesAction ) : Game[] => {

  const { type, payload } : { type:string , payload:Game[] } = action;

  switch (type) {
    case "SET-DATA":
      return [...payload]

      default : 
       return state ;
  }
};
