const { Router } = require("express");
const { getCountries, getCountryById, getCountryByName } = require("../handlers/countryHandlers");
const { getActivities, createActivityHandler } = require("../handlers/activitiesHandlers")

const router = Router();

router.get("/countries", getCountries);
router.get("/countries/search", getCountryByName)
router.get("/countries/:id", getCountryById);
router.post("/activities", createActivityHandler);
router.get("/activities", getActivities);

module.exports = router;
