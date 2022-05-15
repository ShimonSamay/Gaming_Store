import { FormEvent, useContext, useState , ChangeEvent, useRef } from "react";
import { loginAction } from "../../../Actions/user";
import { reducersContext } from "../../../Contexts/reducers";
import { Dynamic } from "../../../Interfaces/dynamic";
import { signUser } from "../../../Services/user";
import { getInputValue, LoginResponse } from "../../../Utils/util";
import "./Login.css";

const Login = ({ setRegisterScreen }:{ setRegisterScreen:React.MouseEventHandler<HTMLButtonElement>}) => {

  const [details , setDetails] = useState<Dynamic>({});

  const { userDispatch } = useContext(reducersContext);

  const [response , setResponse] = useState<LoginResponse>({success:false , message:""});

  const popUpRef = useRef<any>(null)

  const getUserDetails = (e:ChangeEvent<HTMLInputElement>):void => {
    getInputValue(e,details);
  }

  const popUpHandler = ():void => {  
    popUpRef.current &&  popUpRef.current.open ? popUpRef.current.close() : popUpRef.current.showModal() ;
  }

  const signUp = (e:FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    setDetails({...details});  
    signUser(details , setResponse , userDispatch , loginAction , popUpHandler);
  }

  
  return (
    <section className="form_container">
      <section className="card_container">
        <section className="card_title">
          <h1>Sign In</h1>
        </section>
        <form onSubmit={signUp}>
          <input onChange={getUserDetails} name="email" placeholder="Email"/>
          <input onChange={getUserDetails} type="password" name="password" placeholder="Password"/>
          <button className="form_button">Sign In</button>
          <button className="form_button" onClick={setRegisterScreen}>Dont Have an account ? </button>
        </form>
        <dialog ref={popUpRef} className="popUp">
          {response.message && 
             <section>
               <p>{response.message}</p>
               <button onClick={popUpHandler}>Try again</button>
             </section>
          }
         </dialog>
      </section>
    </section>
  );
};

export default Login ;
