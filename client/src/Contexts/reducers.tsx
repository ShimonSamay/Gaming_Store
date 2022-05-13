import { createContext, useReducer , ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { usersReducer } from "../Reducers/user";
import { gamesReducer } from "../Reducers/games";
import { favoritesReducer } from "../Reducers/favorites";
import { reviewsReducer } from "../Reducers/reviews";
import { User} from "../Interfaces/user";
import { Game } from "../Interfaces/game";
import { Review } from "../Interfaces/review";

export const reducersContext = createContext<any>("");

const ReducersProvider = ( {children} : {children:ReactNode} ) => {
  const [user, userDispatch] = useReducer( usersReducer , {loggedIn:false} );
  const [games , gamesDispatch] = useReducer( gamesReducer , []);
  const [favorites , favoritesDispatch] = useReducer( favoritesReducer , []);
  const [reviews , reviewDispatch] = useReducer( reviewsReducer ,[])
  const appNavigator = useNavigate();
  const globalStates : any = {
    user , userDispatch ,
    games , gamesDispatch ,
    favorites , favoritesDispatch , 
    reviews  , reviewDispatch , 
    appNavigator
  };
  return (
    <reducersContext.Provider value={globalStates}>
       {children}
    </reducersContext.Provider>
  )
};

export default ReducersProvider;
