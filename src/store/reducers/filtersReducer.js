import {
  GET_RESTAURANT_CATEGORIES,
  GET_CUISINES,
  SET_CUISINES,
  CLEAR_SELECTED_CUISINES,
} from '../actions/actionTypes';

const initialState = {
  categories: [],
  cuisines: [],
  selectedCuisines: '',
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
    case SET_CUISINES:
      return {
        ...state,
        selectedCuisines: action.selectedCuisines,
      };
    case CLEAR_SELECTED_CUISINES:
      return {
        ...state,
        selectedCuisines: '',
      };
    default:
      return state;
  }
};

export default filtersReducer;
