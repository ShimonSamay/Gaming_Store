import "./Video-Banner.css";
const video = require("../../../Media/banner.mp4");

const VideoBanner = () => {
  return (
    <section className="home_banner">
      <video autoPlay loop muted>
        <source src={video} />
      </video>
      <section className="text_banner_container">
        <p>Welcome To Gstore</p>
        <p>The best online gaming store</p>
        <section>
          <button>Explore now</button>
        </section>
      </section>
    </section>
  );
};

export default VideoBanner;
