const { Activity, Country } = require("../db");

const activitiesList = async () => {
    const list = await Activity.findAll();

    if(list.length >= 1) {
        return [...list]
    } else return "The activities list is empty"

    
}


const createActivityDB = async (name, dificulty, duration, season, countries) => {
    const newActivity = await Activity.create({name, dificulty, duration, season});
    
    if (countries && countries.length > 0) {
        const associatedCountries = await Country.findAll({
            where: {
                name: countries,
            }
        });
        
        await newActivity.addCountries(associatedCountries);
    }
    
    return newActivity
}

const delActivity = async (name) => {
    await Activity.destroy({
        where: {
        name: name
        }
      }); 
      
      return `The activity ${name} has been deleted.`
}

module.exports = {activitiesList, createActivityDB, delActivity};