import { ChangeEvent, FormEvent, useState , useRef } from "react";
import { newUser } from "../../../Interfaces/user";
import { validateRegistration } from "../../../Services/user";
import "./Register.css";

const Register = () => {

    const [newUser , setNewUser] = useState<newUser>({});

    const confirmInputRef = useRef<HTMLInputElement>(null) ;

    const popUpRef = useRef<any>(null);

    const [message , setMessage] = useState<string>("");

    const getInputValue = (e:ChangeEvent<HTMLInputElement>):void => {
        newUser[e.target.name] = e.target.value ;
    };

    const popUpHandler = ():void => {  
      popUpRef.current &&  popUpRef.current.open ? popUpRef.current.close () : popUpRef.current.showModal() ;
    }

    const register = (e:FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        setNewUser({...newUser});        
        validateRegistration(newUser , setMessage , confirmInputRef)
        popUpHandler();
    }

  return (
    <section className="form_container">
      <section className="card">
        <section className="card_title">
          <h1>Sign Up</h1>
        </section>
        <form onSubmit={register}>
          <input onChange={getInputValue} type="text" name="firstName" placeholder="First Name"/>
          <input onChange={getInputValue} type="text" name="lastName" placeholder="Last Name"/>
          <input onChange={getInputValue} type="text" name="userID" placeholder="ID"/>
          <input onChange={getInputValue} type="email" name="email" placeholder="Email"/>
          <input onChange={getInputValue} type="password" name="password" placeholder="Password"/>
          <input ref={confirmInputRef} type="password" placeholder="Confirm Password"/>
          <button type="submit">Sign Up</button>
        </form>
         <dialog ref={popUpRef}>
          { message && 
             <section>
               <p>{message}</p>
               <button onClick={popUpHandler}>Try again</button>
             </section>
          }
         </dialog>
      </section>
    </section>
  );
};

export default Register;
