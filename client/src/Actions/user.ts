import { User , UserAction } from "../Interfaces/user" ;

export const registerAction = (value:User) : UserAction => {
   return {
       type : "REGISTER" ,
       payload : value
   }
} ;

export const loginAction = (value:User) : UserAction => {
    return {
        type : "LOGIN" ,
        payload : value
    }
};

export const logoutAction = () : UserAction => {
    return {
        type:"LOGOUT"
    }
}