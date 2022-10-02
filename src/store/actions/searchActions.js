import axios from 'axios';

import { API_KEY, baseUrl } from '../../config';
import { SEARCH_RESTAURANTS, CLEAR_SEARCH_RESULTS } from './actionTypes';

export const searchForRestaurants = (searchQuery, cityID) => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/search`, {
      params: {
        entity_id: cityID,
        entity_type: 'city',
        q: searchQuery,
      },
      headers: {
        'user-key': API_KEY,
      },
    });
    dispatch({
      type: SEARCH_RESTAURANTS,
      restaurantsData: response.data,
    });
  };
};

export const clearSearchResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS,
  };
};
