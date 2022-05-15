import { ChangeEvent, FormEvent, useState , useRef , useContext } from "react";
import { loginAction } from "../../../Actions/user";
import { reducersContext } from "../../../Contexts/reducers";
import { Dynamic } from "../../../Interfaces/dynamic";
import { signUser, validateRegistration } from "../../../Services/user";
import { getInputValue, LoginResponse, RegisterResponse } from "../../../Utils/util";
import "./Register.css";

const Register = () => {
    
    const { userDispatch } = useContext(reducersContext);

    const [newUser , setNewUser] = useState<Dynamic>({});

    const confirmInputRef = useRef<HTMLInputElement>(null) ;

    const popUpRef = useRef<any>(null);

    const [response , setResponse] = useState< RegisterResponse | LoginResponse >({success:false , message:""});
    
    const getUserDetails = (e:ChangeEvent<HTMLInputElement>):void => {
      getInputValue(e,newUser);
    }

    const popUpHandler = ():void => {  
      popUpRef.current &&  popUpRef.current.open ? popUpRef.current.close () : popUpRef.current.showModal() ;
    }

    const register = (e:FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        setNewUser({...newUser});               
        validateRegistration(newUser , setResponse , confirmInputRef , popUpHandler)
    }

    const enterNewUser = () => {
      signUser(newUser, setResponse , userDispatch, loginAction)
    }

    
  return (
    <section className="form_container">
      <section className="card">
        <section className="card_title">
          <h1>Sign Up</h1>
        </section>
        <form onSubmit={register} autoComplete="off">
          <input onChange={getUserDetails} type="text" name="firstName" placeholder="First Name"/>
          <input onChange={getUserDetails} type="text" name="lastName" placeholder="Last Name"/>
          <input onChange={getUserDetails} type="text" name="userID" placeholder="ID"/>
          <input onChange={getUserDetails} type="text" name="email" placeholder="Email"/>
          <input onChange={getUserDetails} type="password" name="password" placeholder="Password"/>
          <input ref={confirmInputRef} type="password" placeholder="Confirm Password"/>
          <button type="submit">Sign Up</button>
        </form>
         <dialog ref={popUpRef}>
          { response.message && 
             <section>
               <p>{response.message}</p>
               <button onClick={ response.success ? enterNewUser : popUpHandler }>{ response.success ? "Login" : "Try again"}</button>
             </section>
          }
         </dialog>
      </section>
    </section>
  );
};

export default Register;
