import { CREATE_ACTIVITY, GET_COUNTRIES, GET_COUNTRY_BY_NAME } from "../actions/action-types";

let initialState = { allCountries: [], countriesCopy: [], activities: [] };

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
        countriesCopy: payload,
      };

    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        allCountries: payload,
      };

    case CREATE_ACTIVITY:
      console.log("Objeto payload que llega al reducer:" + payload);
      return {
        ...state,
        activities: payload,
      }
    default:
      return state;
  }
}

export default rootReducer;
