import {
  GET_LIST_OF_CITIES,
  CLEAR_CITIES_LIST,
  SET_USER_LOCATION,
  SET_LOCATION_START,
  SET_LOCATION_FAIL,
} from '../actions/actionTypes';

const initialState = {
  cities: [],
  userLocation: {},
  locationLoading: false,
  locationError: false,
};

// eslint-disable-next-line default-param-last
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
    case SET_LOCATION_START:
      return {
        ...state,
        userLocation: {},
        locationLoading: true,
        locationError: false,
      };
    case SET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.location,
        locationLoading: false,
        locationError: false,
      };
    case SET_LOCATION_FAIL:
      return {
        ...state,
        userLocation: {},
        locationLoading: false,
        locationError: true,
      };
    default:
      return state;
  }
};

export default locationReducer;
