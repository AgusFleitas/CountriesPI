const {getAllCountries} = require("../controllers/countryController")

const getCountries = async (req, res) => {
  try {
    const response = await getAllCountries();
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const getCountryById = (req, res) => {
  const {id} = req.params

  try {
    
  } catch (error) {
    
  }
};

module.exports = { getCountries, getCountryById };
