const { Activity } = require("../db");

const createActivityDB = async (name, dificulty, duration, season) => {
    return await Activity.create({name, dificulty, duration, season});
}

module.exports = {createActivityDB};