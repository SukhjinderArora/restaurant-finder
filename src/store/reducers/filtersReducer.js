import {
  GET_RESTAURANT_CATEGORIES,
  GET_CUISINES,
} from '../actions/actionTypes';

const initialState = {
  categories: [],
  cuisines: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case GET_CUISINES:
      return {
        ...state,
        cuisines: action.cuisines,
      };
    default:
      return state;
  }
};

export default filtersReducer;
