import {
  GET_REVIEWS_START,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  reviews: [],
  loading: false,
  error: false,
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS_START:
      return {
        ...state,
        reviews: [],
        loading: true,
        error: false,
      };
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.reviews,
        loading: false,
        error: false,
      };
    case GET_REVIEWS_ERROR:
      return {
        ...state,
        reviews: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reviewsReducer;
