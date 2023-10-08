import NavBar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards"

import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.wrapper}>
      <NavBar/>
      <Cards/>
    </div>
  );
};

export default Home;
