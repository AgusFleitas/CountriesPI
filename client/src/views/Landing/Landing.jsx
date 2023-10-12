import { Link } from "react-router-dom";

import style from "./Landing.module.css";
import landingVideo from "../../video/countrybackground.mp4";

const Landing = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.buttonwrapper}>
          <h2>Welcome</h2>
          <h3>Explore the Globe!</h3>
          <Link to={"/home"}>
            <button className={style.startButton}>START</button>
          </Link>
        </div>
        <div className={style.videoWrapper}>
          <video
            src={landingVideo}
            autoPlay
            muted
            loop
            className={style.bgVideo}
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
