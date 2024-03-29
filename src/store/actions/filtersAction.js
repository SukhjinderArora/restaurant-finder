import axios from 'axios';

import { API_KEY, baseUrl } from '../../config';
import {
  GET_CUISINES_START,
  GET_CUISINES,
  GET_CUISINES_FAIL,
  SET_SELECTED_CUISINES,
  CLEAR_SELECTED_CUISINES,
} from './actionTypes';

export const getCusines = (cityID) => {
  return async (dispatch) => {
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

export const setCuisines = (cuisines) => {
  return {
    type: SET_SELECTED_CUISINES,
    selectedCuisines: cuisines,
  };
};

export const clearSelectedCuisines = () => {
  return {
    type: CLEAR_SELECTED_CUISINES,
  };
};
