import axios from 'axios';

import { API_KEY, baseUrl } from '../../config';
import {
  GET_RESTAURANT_CATEGORIES_START,
  GET_RESTAURANT_CATEGORIES,
  GET_RESTAURANT_CATEGORIES_FAIL,
  GET_CUISINES_START,
  GET_CUISINES,
  GET_CUISINES_FAIL,
} from './actionTypes';

export const getRestaurantCategories = cityID => {
  return async dispatch => {
    try {
      dispatch({ type: GET_RESTAURANT_CATEGORIES_START });
      const response = await axios.get(`${baseUrl}/establishments`, {
        params: {
          city_id: cityID,
        },
        headers: {
          'user-key': API_KEY,
        },
      });
      dispatch({
        type: GET_RESTAURANT_CATEGORIES,
        categories: response.data.establishments,
      });
    } catch (e) {
      dispatch({ type: GET_RESTAURANT_CATEGORIES_FAIL });
    }
  };
};

export const getCusines = cityID => {
  return async dispatch => {
    try {
      dispatch({ type: GET_CUISINES_START });
      const response = await axios.get(`${baseUrl}/cuisines`, {
        params: {
          city_id: cityID,
        },
        headers: {
          'user-key': API_KEY,
        },
      });
      dispatch({ type: GET_CUISINES, cuisines: response.data.cuisines });
    } catch (e) {
      dispatch({ type: GET_CUISINES_FAIL });
    }
  };
};
