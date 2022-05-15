import { useState } from "react";
import VideoBanner from "../../Features/Video Banner/Video-Banner";
import MainLogin from "../Main Login/Main-Login";

const Home = () => {
  const [ loginScreen , setLoginScreen] = useState<boolean>(false);

  const changeView = () => {
    setLoginScreen(!loginScreen);
  }

  return (
    loginScreen ? <MainLogin/> : <VideoBanner setLoginScreen={changeView}/>
  )
};

export default Home ;
