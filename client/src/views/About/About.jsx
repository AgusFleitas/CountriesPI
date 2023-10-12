import { Link } from "react-router-dom";

import myPhoto from "../../image/Photo.jpg";
import github from "../../image/githubLogo.svg";
import instagram from "../../image/instagramLogo.svg";
import linkedIn from "../../image/linkedinLogo.svg";

import style from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={style.about}>
        <div className={style.main}>
          <img src={myPhoto} />
          <div className={style.aboutText}>
            <h1>About me</h1>
            <h5>
              Full-Stack <span>Developer</span>
            </h5>
            <p>
              Hi!👋🏻 I'm Agustín Fleitas, born in Argentina and living in Spain
              since December 2022. I started my web development studies in 2023,
              and this is my "Countries" project.
            </p>
            <h5>About the website</h5>
            <p>
              It's a Single Page Application (SPA) developed using the
              technologies I've learned over these months: React and Redux for
              the client-side, Node.JS with Express for the server, along with
              SQL and Sequelize for the database.
            </p>
            <h5>Follow me on social media!</h5>
            <div className={style.social}>
              <Link to='https://github.com/AgusFleitas'>
                <img src={github} />
              </Link>
              <Link to='https://www.linkedin.com/in/agustin-fleitas-faes/'>
                <img src={linkedIn} />
              </Link>
              <Link to='https://www.instagram.com/agusvalentine/'>
                <img src={instagram} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
