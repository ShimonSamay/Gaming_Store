import { createContext, useReducer , ReactNode, FC } from "react";
import { useNavigate } from "react-router-dom";
import { usersReducer } from "../Reducers/user";
import { gamesReducer } from "../Reducers/games";
import { favoritesReducer } from "../Reducers/favorites";
import { reviewsReducer } from "../Reducers/reviews";
import { GlobalStateTypes } from "../Utils/util";

const initialStatesValue : GlobalStateTypes = {
  user : { loggedIn:false } ,
  userDispatch : () => {} , 
  games : []  ,
  gamesDispatch : () => [] ,
  favorites : [] ,
  favoritesDispatch : () => [] ,
  reviews : [] ,
  reviewDispatch : () => [] ,
  appNavigator : () => null
} 

interface ProviderPropsType {
  children : ReactNode
}

export const globalStatesContext = createContext<GlobalStateTypes>(initialStatesValue);

const ReducersProvider : FC<ProviderPropsType> = ( { children } : { children:ReactNode } ) : JSX.Element => {

  const [user, userDispatch] = useReducer(usersReducer , initialStatesValue.user);
  const [games , gamesDispatch] = useReducer(gamesReducer , initialStatesValue.games);
  const [favorites , favoritesDispatch] = useReducer(favoritesReducer , initialStatesValue.favorites);
  const [reviews , reviewDispatch] = useReducer(reviewsReducer , initialStatesValue.reviews)
  const appNavigator = useNavigate(); 

  const globalStates : GlobalStateTypes = {
    user , userDispatch ,
    games , gamesDispatch ,
    favorites , favoritesDispatch ,
    reviews , reviewDispatch ,
    appNavigator
  }

  return (
    <globalStatesContext.Provider value={globalStates}>
       {children}
    </globalStatesContext.Provider>
  )
};

export default ReducersProvider;
