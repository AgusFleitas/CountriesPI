import { Link } from "react-router-dom";

import NavBar from "../../components/Navbar/Navbar";
import myPhoto from "../../image/Photo.jpg";
import github from "../../image/githubLogo.png";
import instagram from "../../image/instagramLogo.png";
import linkedIn from "../../image/linkedinLogo.png";

import style from "./About.module.css";

const About = () => {
  return (
    <>
      <NavBar />
      <h2>More info</h2>
      <div className={style.wrapper}>
        <img src={myPhoto}></img>
        <h4>About me:</h4>
        <p>
          Hi!👋🏻 I'm Agustín Fleitas, born in Argentina and living in Spain since
          December 2022. I started my web development studies in 2023, and this
          is my "Countries" project.
        </p>
        <h4>About the web:</h4>
        <p>
          It's a Single Page Application (SPA) developed using the technologies
          I've learned over these months: React and Redux for the client-side,
          Node.JS with Express for the server, along with SQL and Sequelize for
          the database.
        </p>
      </div>
      <div className={style.links}>
        <Link to='https://github.com/AgusFleitas' target="_blank">
            <img src={github}></img>
        </Link>
        <Link to='https://www.linkedin.com/in/agustin-fleitas-faes/' target="_blank">
            <img src={linkedIn}></img>
        </Link>
        <Link to='https://www.instagram.com/agusvalentine' target="_blank">
            <img src={instagram}></img>
        </Link>
      </div>
    </>
  );
};

export default About;
