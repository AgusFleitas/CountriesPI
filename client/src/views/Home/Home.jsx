import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  getCountryByName,
  filterByContinent,
  filterByActivity,
  sortCountries,
  resetCountries,
  sortCountriesByPopulation,
  getActivities,
} from "../../redux/actions";

import SearchBar from "../../components/SearchBar/SearchBar";
import NavBar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";

import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const activities = useSelector((state) => state.activities);

  const perPage = 10;

  // Estados Locales.

  const [searchString, setSearchString] = useState("");
  const [fullCountries, setFullCountries] = useState(allCountries);
  const [items, setItems] = useState([...allCountries]);
  const [currentPage, setCurrentPage] = useState(0);

  // Handlers para la SearchBar

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getCountryByName(searchString));
  }

  // Cuando se monta el componente, se despacha una action solicitando todos los Countries y Activities.

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  // Cuando se monta el componente seteamos un estado adicional y luego se 'splitean' los items mostrados para que solo sean 10.

  useEffect(() => {
    setFullCountries(allCountries);
    setItems(allCountries.slice(0, perPage));
  }, [allCountries]);

  // Handler para RETROCEDER de página.

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 0) return;

    const firstIndex = prevPage * perPage;

    setItems([...fullCountries].splice(firstIndex, perPage));
    setCurrentPage(prevPage);
  };

  // Handler para AVANZAR de página.

  const nextHandler = () => {
    const totalElements = fullCountries.length;
    const nextPage = currentPage + 1;

    const firstIndex = nextPage * perPage;

    if (firstIndex >= totalElements) return;

    setItems([...fullCountries].splice(firstIndex, perPage));
    setCurrentPage(nextPage);
  };

  // Handlers para los FILTROS.

  function handleSort(event) {
    if (
      event.target.value === "Sort A to Z" ||
      event.target.value === "Sort Z to A"
    ) {
      dispatch(sortCountries(event.target.value));
    } else {
      dispatch(sortCountriesByPopulation(event.target.value));
    }
  }

  function handleFilter(event) {
    dispatch(filterByContinent(event.target.value));
  }

  function handleActivityFilter(event) {
    dispatch(filterByActivity(event.target.value));
  }

  function handleReset() {
    dispatch(resetCountries());
  }

  return (
    <div className={style.wrapper}>
      <NavBar />
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className={style.Filters}>
        <select onChange={handleFilter}>
          <option hidden defaultValue>
            Continents
          </option>
          {[
            "North America",
            "South America",
            "Europe",
            "Asia",
            "Africa",
            "Oceania",
            "Antarctica",
          ].map((continent, index) => (
            <option value={continent} key={index}>
              {continent}
            </option>
          ))}
        </select>
        <select onChange={handleSort}>
          <option hidden defaultValue>
            Sort A-Z
          </option>
          {[
            "Sort A to Z",
            "Sort Z to A",
            "By population: Lowest First",
            "By population: Highest First",
          ].map((order, index) => (
            <option value={order} key={index}>
              {order}
            </option>
          ))}
        </select>
        {Array.isArray(activities) && activities.length > 0 ? (
          <select onChange={handleActivityFilter}>
            <option hidden defaultValue>
              Activities
            </option>
            {activities.map((activity) => (
              <option value={activity.name} key={activity.id}>
                {activity.name}
              </option>
            ))}
          </select>
        ) : (
          <select>
            <option disabled>No activities yet</option>
          </select>
        )}
        <button onClick={handleReset}>Clear Filters</button>
      </div>

      {allCountries.length > 0 && (
        <Cards
          items={items}
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Home;
