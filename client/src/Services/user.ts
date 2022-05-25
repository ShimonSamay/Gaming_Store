import { User } from "../Interfaces/user";
import { confirmPasswords, extractJwtPayload, fetchSettings, LoginResponse, RegisterResponse } from "../Utils/util";
import { RefObject } from "react"

const baseUrl : string = "http://localhost:5500/users";

export const validateRegistration = async (user: User , setResponse:Function  , inputRef:RefObject<HTMLInputElement> , openPopUp:Function) : Promise < RegisterResponse | unknown > => {
  try {
    if(inputRef.current && confirmPasswords(user,inputRef.current.value)) {
      let response : RegisterResponse = await (await fetch(`${baseUrl}/register`, fetchSettings("post" , user))).json();
      setResponse(response);
    }
    else {
      setResponse({ success:false , message:"Password confirmation failed ..." }) ;
    }
    openPopUp();
  }   
  catch ( error : unknown) {
    return error;
  }
};


export const signUser = async (user:User , setResponse:Function , userDispatch:Function , loginAction:Function , openPopUp?:Function  ) : Promise < LoginResponse | unknown > => {
  try {
    let response : LoginResponse = await(await fetch(`${baseUrl}/login`, fetchSettings("post" ,user))).json();
    if (response.success && response.token) {
     userDispatch(loginAction(extractJwtPayload(response.token))) ; 
   }
   else {
     setResponse(response);
     openPopUp?.(); 
   }
 }
  catch (error : unknown) {
    return error;
  }
};