import {
  GET_LIST_OF_CITIES,
  CLEAR_CITIES_LIST,
  SET_USER_LOCATION,
} from '../actions/actionTypes';

const initialState = {
  cities: [],
  userLocation: {},
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_OF_CITIES:
      return {
        ...state,
        cities: action.citiesList,
      };
    case CLEAR_CITIES_LIST:
      return {
        ...state,
        cities: [],
      };
    case SET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.location,
      };
    default:
      return state;
  }
};

export default locationReducer;
