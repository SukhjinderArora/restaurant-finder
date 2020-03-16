import axios from 'axios';

import { API_KEY, baseUrl } from '../../config';
import {
  GET_REVIEWS_START,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_ERROR,
} from './actionTypes';

const getReviewsStart = () => {
  return { type: GET_REVIEWS_START };
};

const getReviewsError = () => {
  return { type: GET_REVIEWS_ERROR };
};

const getReviews = resId => {
  return async dispatch => {
    dispatch(getReviewsStart());
    try {
      const response = await axios(`${baseUrl}/reviews`, {
        params: {
          res_id: resId,
        },
        headers: {
          'user-key': API_KEY,
        },
      });
      dispatch({
        type: GET_REVIEWS_SUCCESS,
        reviews: response.data.user_reviews,
      });
    } catch (e) {
      dispatch(getReviewsError());
    }
  };
};

export default getReviews;
