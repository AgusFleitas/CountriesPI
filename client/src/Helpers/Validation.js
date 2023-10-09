const validate = (input) => {
    let errors = {};
    let durationRegEx = /^(?:[0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
    let seasons = ["Summer", "Autumn", "Spring", "Winter"]

    if(input.name.length < 3 || input.name.length > 15) {
        errors.name = "The activity name must be between 3 and 15 characters."
    }

    if (input.dificulty < 1 || input.dificulty > 5) {
        errors.dificulty = "The difficulty must be from 1 to 5."
    }

    if (!durationRegEx.test(input.duration)) {
        errors.duration = "The duration must be in time format."
    }

    if (!seasons.includes(input.season)) {
        errors.season = "The season must be: Summer, Autumn, Spring or Winter."
    }

    // if (!input.countries.length) {
    //     errors.countries = "You must select at least one country."
    // }

    return errors;
};

export default validate