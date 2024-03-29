import axios from 'axios';

import { API_KEY, baseUrl } from '../../config';
import {
  GET_RESTAURANTS_START,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_ERROR,
  CLEAR_RESTAURANTS,
  GET_RESTAURANT_START,
  GET_RESTAURANT_SUCCESS,
  GET_RESTAURANT_ERROR,
} from './actionTypes';

export const getRestaurants = (cityID, cuisines, sortBy, orderBy) => {
  return async (dispatch, getState) => {
    try {
      if (getState().restaurants.loading) return;
      dispatch({ type: GET_RESTAURANTS_START });
      const response = await axios.get(`${baseUrl}/search`, {
        params: {
          entity_id: cityID,
          entity_type: 'city',
          cuisines,
          sort: sortBy,
          order: orderBy,
          start: getState().restaurants.offset,
        },
        headers: {
          'user-key': API_KEY,
        },
      });
      dispatch({
        type: GET_RESTAURANTS_SUCCESS,
        result: {
          restaurants: response.data.restaurants,
          offset: response.data.results_start + 20,
          totalResults: response.data.results_found,
          hasMore: response.data.results_shown !== 0,
        },
      });
    } catch (e) {
      dispatch({ type: GET_RESTAURANTS_ERROR });
    }
  };
};

export const clearRestaurants = () => {
  return { type: CLEAR_RESTAURANTS };
};

export const getRestaurant = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_RESTAURANT_START });
      const response = await axios.get(`${baseUrl}/restaurant`, {
        params: {
          res_id: id,
        },
        headers: {
          'user-key': API_KEY,
        },
      });
      dispatch({ type: GET_RESTAURANT_SUCCESS, restaurant: response.data });
    } catch (e) {
      dispatch({ type: GET_RESTAURANT_ERROR });
    }
  };
};
