const { createActivityDB } = require("../controllers/activityController")

const getActivities = (req, res) => {
    res.status(200).send("Esta es la lista de actividades")
}

const createActivityHandler = async (req, res) => {
    const {name, dificulty, duration, season} = req.body

    try {
        const response = await createActivityDB(name, dificulty, duration, season)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

module.exports = {getActivities, createActivityHandler}