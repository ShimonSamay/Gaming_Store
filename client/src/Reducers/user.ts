import { User, UserAction } from "../Interfaces/user";

export const usersReducer = ( state:User , action:UserAction ) : User => {

  const { type , payload } : { type:string , payload?:User } = action;

  switch (type) {
    case "REGISTER":
      return state;

    case "LOGIN":
      return { ...payload, loggedIn: true };

    case "LOGOUT":
      return { loggedIn: false };

    default:
      return state;
  }
};
