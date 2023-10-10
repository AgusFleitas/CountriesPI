import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

import style from "./NavBar.module.css";

const NavBar = ({ handleChange, handleSubmit }) => {
  return (
    <>
      <div className={style.fullWrapper}>
        <div className={style.buttonsWrapper}>
          <Link to='/home'>
            <button>Home</button>
          </Link>
          <Link to='/create-activity'>
            <button>Create Activity</button>
          </Link>
        </div>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
        <Link to={"/"}>
          <button>Log Out</button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
