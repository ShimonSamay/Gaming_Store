import { MouseEventHandler } from "react";
import "./Video-Banner.css";
const video = require("../../../Media/banner.mp4");

const VideoBanner = ({ setLoginScreen } : { setLoginScreen:MouseEventHandler<HTMLButtonElement> }) : JSX.Element => {
  return (
    <section className="home_banner">
      <video autoPlay loop muted>
        <source src={video}/>
      </video>
      <section className="text_banner_container">
        <p>Welcome To Gstore</p>
        <p>The best online gaming store</p>
        <section>
          <button onClick={setLoginScreen}>Explore now</button>
        </section>
      </section>
    </section>
  );
};

export default VideoBanner;
