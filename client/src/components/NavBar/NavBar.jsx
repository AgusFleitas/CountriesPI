import { Link, useLocation } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <div className={style.fullWrapper}>
        <div className={style.buttonsWrapper}>
          {location.pathname !== "/home" && (
            <Link to='/home'>
              <button>Home</button>
            </Link>
          )}
          {location.pathname !== "/create-activity" && (
            <Link to='/create-activity'>
              <button>Create Activity</button>
            </Link>
          )}
          {location.pathname !== "/about" && (
            <Link to='/about'>
              <button>About</button>
            </Link>
          )}
        </div>
        {location.pathname === "/home" && <SearchBar />}
        <Link to='/'>
          <button>Log Out</button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
