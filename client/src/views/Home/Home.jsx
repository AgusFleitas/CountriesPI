import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getCountryByName } from "../../redux/actions";

import NavBar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";

import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  const [searchString, setSearchString] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(getCountryByName(searchString))
  }

  // Cuando se monta el componente, se despacha una action solicitando todos los Countries.
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Cards allCountries={allCountries} />
    </div>
  );
};

export default Home;
