import { User } from "../Interfaces/user";
import { ChangeEvent } from "react";
import jwt_decode from "jwt-decode";
import { Game } from "../Interfaces/game";
import { Review } from "../Interfaces/review";


export interface fetchSettings {
   method ? : string ;
   body ? : string
   headers : any ;
};

export interface DecodedJWT {
   user : User ;
   iat : number ;
   exp : number
};

export interface LoginResponse {
   success : boolean ;
   message ? : string ;
   token ? : string;
 };

 export interface RegisterResponse {
   success : boolean ;
   message : string ;
};

export interface GlobalStateTypes {
  user:User ;
  userDispatch : Function ;
  games : Game[] ;
  gamesDispatch : Function ;
  favorites : any ;
  favoritesDispatch : Function ;
  reviews : Review[] ;
  reviewDispatch : Function ;
  appNavigator : Function
};

export const confirmPasswords = (user:User , confirmPassword:string) : boolean => {
  return user.password === confirmPassword 
};

export const getInputValue = (e:ChangeEvent<HTMLInputElement> , state:any) : void => {
   state[e.target.name] = e.target.value ;
};

export const extractJwtPayload = (token:string):User => {
  localStorage.setItem("token" , token);
  let { user } : DecodedJWT = jwt_decode(token);
  return user ;
};

export const fetchSettings = (fetchMethod?:string , data?:any ) : fetchSettings => {
  return {
   method : fetchMethod ? fetchMethod.toUpperCase() : "GET" ,
   body : JSON.stringify(data) ,
   headers : {"Content-Type" : "application/json"} 
  }
};