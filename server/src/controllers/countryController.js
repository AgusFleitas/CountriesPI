const { Country, Activity } = require("../db");
const { Op } = require('sequelize');

const getAllCountries = async () => {
  const CountriesDB = await Country.findAll(
    {
      include: [
        {
          model: Activity,
          attributes: ['id', 'name', 'dificulty', 'duration', 'season'],
        },
    ]}
  );

  return [...CountriesDB]
};

const getCountryDetail = async (id) => {
  const found = await Country.findByPk(id, {
    include: [
      {
        model: Activity,
        attributes: ['id', 'name', 'dificulty', 'duration', 'season'],
      },
  ]});

  if (found) {
    return found
  } else return "Cannot find any country"
}

const getCountryQuery = async (name) => {
  const matches = await Country.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },

    include: Activity,
  });

  if (matches.length >= 1) {
    return matches
  } else return "No matches found"
}

module.exports = { getAllCountries, getCountryDetail, getCountryQuery };
