const { activitiesList, createActivityDB, delActivity } = require("../controllers/activityController")

const getActivities = async (req, res) => {
    try {
        const response = await activitiesList()
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const createActivityHandler = async (req, res) => {
    const {name, dificulty, duration, season, countries} = req.body
    
    try {
        const response = await createActivityDB(name, dificulty, duration, season, countries)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const deleteActivity = async (req, res) => {
    const {name} = req.body
    try {
        const response = await delActivity(name)
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}


module.exports = {getActivities, createActivityHandler, deleteActivity}