import { useState } from "react";
import { useDispatch } from "react-redux";

import { getCountryByName } from "../../redux/actions";

import style from "./SearchBar.module.css";

const SearchBar = ({ handleChange, handleSubmit }) => {
  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getCountryByName(searchString));
  }

  return (
    <div className={style.wrapper}>
      <form onChange={handleChange}>
        <div className={style.barElements}>
          <input type='search' placeholder='Search Country'></input>
          <button type='submit' onClick={handleSubmit}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
