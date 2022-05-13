import { ChangeEvent, FormEvent, useState } from "react";
import "./Login.css";

const Login = ({ setRegisterScreen }:{ setRegisterScreen:React.MouseEventHandler<HTMLButtonElement>}) => {

  const [user , setUser] = useState<any>({});

  const getInputValue = (e:ChangeEvent<HTMLInputElement>):void => {
    user[e.target.name] = e.target.value ;
  }

  const signUp = (e:FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    setUser({...user});  
  }
  return (
    <section className="form_container">
      <section className="card_container">
        <section className="card_title">
          <h1>Sign In</h1>
        </section>
        <form onSubmit={signUp}>
          <input onChange={getInputValue} type="email" name="email" placeholder="Email" />
          <input onChange={getInputValue} type="password" name="password" placeholder="Password"/>
          <button className="form_button">Sign In</button>
          <button className="form_button" onClick={setRegisterScreen}>Dont Have an account ? </button>
        </form>
      </section>
    </section>
  );
};

export default Login ;
