import axios from 'axios';

import { API_KEY, baseUrl } from '../../config';
import {
  GET_REVIEWS_START,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_ERROR,
  CLEAR_REVIEWS,
} from './actionTypes';

const getReviewsStart = () => {
  return { type: GET_REVIEWS_START };
};

const getReviewsError = () => {
  return { type: GET_REVIEWS_ERROR };
};

export const getReviews = resId => {
  return async (dispatch, getState) => {
    if (getState().reviews.loading) return;
    dispatch(getReviewsStart());
    try {
      const response = await axios(`${baseUrl}/reviews`, {
        params: {
          res_id: resId,
          start: getState().reviews.offset,
          count: 10,
        },
        headers: {
          'user-key': API_KEY,
        },
      });
      dispatch({
        type: GET_REVIEWS_SUCCESS,
        reviews: response.data.user_reviews,
        totalReviews: response.data.reviews_count,
      });
    } catch (e) {
      dispatch(getReviewsError());
    }
  };
};

export const clearReviews = () => {
  return { type: CLEAR_REVIEWS };
};
