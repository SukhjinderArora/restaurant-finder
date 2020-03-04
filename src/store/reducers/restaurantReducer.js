import {
  GET_RESTAURANTS_START,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_ERROR,
  CLEAR_RESTAURANTS,
} from '../actions/actionTypes';

const initialState = {
  restaurants: [],
  offset: 0,
  totalResults: 0,
  loading: false,
  error: false,
  hasMore: false,
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_RESTAURANTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        hasMore: false,
      };
    case GET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        restaurants: [...state.restaurants, ...action.result.restaurants],
        offset:
          state.offset > action.result.offset
            ? state.offset
            : action.result.offset,
        totalResults: action.result.totalResults,
        hasMore: action.result.hasMore,
      };
    case CLEAR_RESTAURANTS:
      return {
        ...state,
        restaurants: [],
        offset: 0,
        totalResults: 0,
        hasMore: false,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
