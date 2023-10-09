import { useState } from "react";
import validate from "../../Helpers/Validation";

const Create = ({ createActivity }) => {
  const [input, setInput] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [countryInput, setCountryInput] = useState("");

  const [error, setError] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  function handleChange(event) {
    if (event.target.name != 'countries') {
      setInput({
        ...input,
        [event.target.name]: event.target.value,
      });
    }
    setError(validate({ ...input, [event.target.name]: event.target.value }));
  }

  function handleAddCountry() {
    setInput({
      ...input,
      countries: [...input.countries, countryInput],
    });

    setCountryInput("");
  }

  const noErrors = Object.values(error).every((value) => value === "");

  function handleSubmit(event) {
    event.preventDefault();

    createActivity(input);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name='name' value={input.value} onChange={handleChange} />
          <span>{error.name}</span>
        </div>
        <div>
          <label>Difficulty: </label>
          <input name='dificulty' value={input.value} onChange={handleChange} />
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
          <input name='season' value={input.value} onChange={handleChange} />
          <span>{error.season}</span>
        </div>
        <div>
          <label>Countries: </label>
          <input
            name='countries'
            value={countryInput}
            onChange={(event) => setCountryInput(event.target.value)}
          />
          <button type='button' onClick={handleAddCountry}>
            Add Country
          </button>
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
