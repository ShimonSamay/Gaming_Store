import { User } from "../Interfaces/user";

export const confirmPasswords = (user:User , confirmPassword:string):boolean => {
    console.log(user.password === confirmPassword);
    console.log(user.password , confirmPassword);
   return  user.password === confirmPassword 
}