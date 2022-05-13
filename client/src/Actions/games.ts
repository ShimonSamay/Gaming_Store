import { Game , GamesAction } from "../Interfaces/game" ;

export const setGamesData = (value:Game[]) : GamesAction => {
    return {
        type : "SET-DATA" ,
        payload : value
    }
}

