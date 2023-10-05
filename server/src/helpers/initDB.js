const axios = require("axios");
const { Country } = require("../db");

const initalUpload = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/countries");

    const countries = data.map((country) => ({
      id: country.cca3,
      name: country.name.common,
      flag: country.flags.png,
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : "Unknown",
      subregion: country.subregion ? country.subregion : "Unknown",
      area: country.area,
      population: country.population,
    }));

    await Country.bulkCreate(countries);
    console.log("Initial charge successfully");
  } catch (error) {
    console.log({ error: error.message });
  }
};

module.exports = initalUpload;
