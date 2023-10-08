const {
  getAllCountries,
  getCountryDetail,
  getCountryQuery
} = require("../controllers/countryController");

const getCountries = async (req, res) => {
  try {
    const response = await getAllCountries();
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountryById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await getCountryDetail(id);
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountryByName = async (req, res) => {
  const { name } = req.query;

  try {
    const response = await getCountryQuery(name);
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

module.exports = { getCountries, getCountryById, getCountryByName };
