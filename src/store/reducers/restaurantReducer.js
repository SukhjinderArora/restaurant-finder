import {
  GET_RESTAURANTS_START,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_ERROR,
  CLEAR_RESTAURANTS,
} from '../actions/actionTypes';

const initialState = {
  restaurants: [],
  offset: 0,
  loading: false,
  error: false,
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
      };
    case GET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        restaurants: [...state.restaurants, ...action.result.restaurants],
        offset: state.offset + 20,
      };
    case CLEAR_RESTAURANTS:
      return {
        ...state,
        restaurants: [],
        offset: 0,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
