import {
  GET_RESTAURANTS_START,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_ERROR,
  CLEAR_RESTAURANTS,
  GET_RESTAURANT_START,
  GET_RESTAURANT_SUCCESS,
  GET_RESTAURANT_ERROR,
} from '../actions/actionTypes';

const initialState = {
  restaurants: [],
  restaurant: {},
  offset: 0,
  totalResults: 0,
  loading: false,
  error: false,
  hasMore: false,
};

// eslint-disable-next-line default-param-last
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
    case GET_RESTAURANT_START:
      return {
        ...state,
        restaurant: {},
        loading: true,
      };
    case GET_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurant: action.restaurant,
        loading: false,
      };
    case GET_RESTAURANT_ERROR:
      return {
        ...state,
        restaurant: {},
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
