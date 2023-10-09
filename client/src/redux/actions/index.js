import { CREATE_ACTIVITY, GET_COUNTRIES, GET_COUNTRY_BY_NAME } from "./action-types";
import axios from "axios";

export const getCountries = () => {
  const endpoint = "http://localhost:3001/countries";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: GET_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCountryByName = (searchTerm) => {
  const endpoint = `http://localhost:3001/countries/search?name=${searchTerm}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addActivity = (activityDetail) => {
  const endpoint = `http://localhost:3001/activities`;
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, activityDetail);

      return dispatch({
        type: CREATE_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
