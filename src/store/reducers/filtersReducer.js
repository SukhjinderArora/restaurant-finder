import {
  GET_CUISINES,
  SET_SELECTED_CUISINES,
  CLEAR_SELECTED_CUISINES,
} from '../actions/actionTypes';

const initialState = {
  categories: [],
  cuisines: [],
  selectedCuisines: '',
};

// eslint-disable-next-line default-param-last
const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUISINES:
      return {
        ...state,
        cuisines: action.cuisines,
      };
    case SET_SELECTED_CUISINES:
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
