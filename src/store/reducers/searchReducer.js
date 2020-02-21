import {
  SEARCH_RESTAURANTS,
  CLEAR_SEARCH_RESULTS,
} from '../actions/actionTypes';

const initialState = {
  restaurantsData: {},
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESTAURANTS:
      return {
        ...state,
        restaurantsData: action.restaurantsData,
      };
    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        restaurantsData: {},
      };
    default:
      return state;
  }
};

export default searchReducer;
