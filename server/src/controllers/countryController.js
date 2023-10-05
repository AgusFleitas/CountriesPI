const { Country } = require("../db");
const axios = require("axios");

const infoCleaner = (arr) => {
  return arr.map((country) => {
    return {
      name: country.name.common,
      flag: country.flags.png,
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : "Unknown",
      subregion: country.subregion ? country.subregion[0] : "Unknown",
      area: country.area,
      population: country.population,
    };
  });
};

const getAllCountries = async () => {
  const countryAPI = (await axios.get("http://localhost:5000/countries")).data

  const cleanCountry = infoCleaner(countryAPI)

  return cleanCountry
};

module.exports = { getAllCountries };
