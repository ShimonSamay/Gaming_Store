import { createContext, useReducer , ReactNode, FC } from "react";
import { useNavigate } from "react-router-dom";
import { usersReducer } from "../Reducers/user";
import { gamesReducer } from "../Reducers/games";
import { favoritesReducer } from "../Reducers/favorites";
import { reviewsReducer } from "../Reducers/reviews";
import { User} from "../Interfaces/user";
import { Game } from "../Interfaces/game";
import { Review } from "../Interfaces/review";

interface StateTypes {
  user:User ;
  userDispatch : Function ;
  games : Game[] ;
  gamesDispatch : Function ;
  favorites : any ;
  favoritesDispatch : Function ;
  reviews : Review[] ;
  reviewDispatch : Function ;
  appNavigator : Function
}

const contextDefaultValue : StateTypes = {
  user : { loggedIn:false } ,
  userDispatch : () => {} ,
  games : []  ,
  gamesDispatch : () => [] ,
  favorites : [] ,
  favoritesDispatch : () => [] ,
  reviews : [] ,
  reviewDispatch : () => [] ,
  appNavigator : () => ""
} 


export const reducersContext = createContext<StateTypes>(contextDefaultValue);

const ReducersProvider = ( {children} : {children:ReactNode} ) => {
  const [user, userDispatch] = useReducer( usersReducer , {loggedIn:false} );
  const [games , gamesDispatch] = useReducer( gamesReducer , []);
  const [favorites , favoritesDispatch] = useReducer( favoritesReducer , []);
  const [reviews , reviewDispatch] = useReducer( reviewsReducer ,[])
  const appNavigator = useNavigate();

  const globalStates : StateTypes = {
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
