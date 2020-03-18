import {
  GET_REVIEWS_START,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_ERROR,
  CLEAR_REVIEWS,
} from '../actions/actionTypes';

const initialState = {
  reviews: [],
  offset: 0,
  totalReviews: 0,
  loading: false,
  error: false,
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_REVIEWS:
      return {
        ...state,
        reviews: [],
        offset: 0,
        totalReviews: 0,
        loading: false,
        error: false,
      };
    case GET_REVIEWS_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: [...state.reviews, ...action.reviews],
        offset: state.offset + 10,
        totalReviews: action.totalReviews,
        loading: false,
        error: false,
      };
    case GET_REVIEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reviewsReducer;
