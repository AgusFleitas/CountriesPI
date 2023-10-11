import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getCountries } from "../../redux/actions";

import validate from "../../Helpers/Validation";
import tourist_activities from "../../Helpers/TouristActivities";

const Create = ({ createActivity }) => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countriesCopy);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [error, setError] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
    setError(validate({ ...input, [event.target.name]: event.target.value }));
  };

  function handleAddCountry(event) {
    const { value } = event.target;
    setInput({
      ...input,
      countries: [...input.countries, value],
    });
  }

  const noErrors = (Object.values(input).every((value) => value !== "") && input.countries.length >= 1);

  function handleSubmit(event) {
    event.preventDefault();
    createActivity(input);
    alert("Activity created");

    setInput({
      name: "",
      dificulty: "",
      duration: "",
      season: "",
      countries: [],
    });
  }

  return (
    <>
      <Link to='/home'>
        <button>Home</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <select name='name' value={input.name} onChange={handleChange}>
            <option hidden defaultValue>
              Activity
            </option>
            {tourist_activities.map((name, index) => (
              <option value={name} key={index}>
                {name}
              </option>
            ))}
          </select>
          <span>{error.name}</span>
        </div>
        <div>
          <label>Difficulty: </label>
          <select
            name='dificulty'
            value={input.dificulty}
            onChange={handleChange}
          >
            <option hidden defaultValue>
              Difficulty
            </option>
            {["1", "2", "3", "4", "5"].map((dificulty, index) => (
              <option value={dificulty} key={index}>
                {dificulty}
              </option>
            ))}
          </select>
          <span>{error.dificulty}</span>
        </div>
        <div>
          <label>Duration: </label>
          <input
            name='duration'
            value={input.value}
            onChange={handleChange}
            type='time'
          />
          <span>{error.duration}</span>
        </div>
        <div>
          <label>Season: </label>
          <select name='season' value={input.season} onChange={handleChange}>
            <option hidden defaultValue>
              Season
            </option>
            {["Winter", "Spring", "Summer", "Autumn"].map((season, index) => (
              <option value={season} key={index}>
                {season}
              </option>
            ))}
          </select>
          <span>{error.season}</span>
        </div>
        <div>
          <label>Countries: </label>
          <select
            name='countries'
            value={input.countries}
            onChange={handleAddCountry}
            multiple
          >
            <option hidden defaultValue>
              Select country
            </option>
            {allCountries?.map((country, index) => (
              <option value={country.name} key={index}>
                {country.name}
              </option>
            ))}
          </select>
          <span>{error.countries}</span>
        </div>
        <div>
          <label>Added Countries: </label>
          <ul>
            {input.countries.map((country, index) => (
              <li key={index}>{country}</li>
            ))}
          </ul>
        </div>
        <button type='submit' disabled={!noErrors}>
          Create
        </button>
      </form>
    </>
  );
};

export default Create;
