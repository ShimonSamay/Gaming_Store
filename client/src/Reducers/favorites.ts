import { Game } from "../Interfaces/game" ;
import { FavoritesAction } from "../Interfaces/favorite";

export const favoritesReducer = ( state:Game[] , action:FavoritesAction ) : Game[] => {
    
   const { type , payload } : { type:string , payload:Game } = action ;

   switch (type) {
       case "ADD" : 
         return [...state , payload] ;

       case "REMOVE" : 
         return [...state.filter((game:Game) => game!==payload )] ;

        default :
         return state ;
   }
}