import { useState } from "react";
import Login from "../../Features/Login/Login";
import Register from "../../Features/Register/Register";

const MainLogin = () : JSX.Element => {
  
  const [loginScreen , setLoginScreen ] = useState(true)
  
  const changeView = () => {
    setLoginScreen(!loginScreen)
  };
   
  return (
    loginScreen ? <Login setRegisterScreen={changeView} /> : <Register /> 
  );
};

export default MainLogin;
