import { User } from "../Interfaces/user";
import { confirmPasswords } from "../Utils/util";
import { RefObject } from "react"


const baseUrl: string = "http://localhost:5500/users";

interface RegisterResponse {
    success : boolean ;
    message : string ;
}

export const validateRegistration = async (user: User , setMessage:Function  , inputRef:RefObject<HTMLInputElement>) : Promise < RegisterResponse | unknown > => {
  try {
    if(inputRef.current && confirmPasswords(user,inputRef.current.value)) {
        let options = {
            method:"POST" ,
            body : JSON.stringify(user) ,
            headers: { "Content-Type" : "application/json;" } 
        }
       let response : RegisterResponse = await (await fetch(`${baseUrl}/register` , options)).json();
       setMessage(response.message);
}   
    setMessage("Password confirmation failed ...") ;

  } catch ( error : unknown) {
    return error;
  }
};


export const signUser = async () => {
  try {
 
  }
  catch (error) {
    return error ;
  }
}