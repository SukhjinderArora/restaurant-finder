import axios from 'axios';

import { API_KEY, baseUrl } from '../../config';
import {
  GET_LIST_OF_CITIES,
  CLEAR_CITIES_LIST,
  SET_USER_LOCATION,
  SET_LOCATION_START,
  SET_LOCATION_FAIL,
} from './actionTypes';

export const getListOfCities = searchQuery => {
  return async dispatch => {
    const response = await axios.get(`${baseUrl}/cities`, {
      params: {
        q: searchQuery,
      },
      headers: {
        'user-key': API_KEY,
      },
    });
    dispatch({
      type: GET_LIST_OF_CITIES,
      citiesList: response.data.location_suggestions,
    });
  };
};

export const clearCitiesList = () => {
  return {
    type: CLEAR_CITIES_LIST,
  };
};

const setLocationStart = () => {
  return {
    type: SET_LOCATION_START,
  };
};

const setLocationFail = () => {
  return {
    type: SET_LOCATION_FAIL,
  };
};

export const getUserLocation = id => {
  return async dispatch => {
    try {
      dispatch(setLocationStart());
      const response = await axios.get(`${baseUrl}/cities`, {
        params: {
          city_ids: id,
        },
        headers: {
          'user-key': API_KEY,
        },
      });
      const locationData = response.data.location_suggestions[0];
      dispatch({
        type: SET_USER_LOCATION,
        location: {
          id: locationData.id,
          name: locationData.name,
          country_id: locationData.country_id,
          country_name: locationData.country_name,
          country_flag_url: locationData.country_flag_url,
        },
      });
    } catch (e) {
      dispatch(setLocationFail());
    }
  };
};
