import { combineReducers } from 'redux';

import locationReducer from './locationReducer';
import searchReducer from './searchReducer';
import filtersReducer from './filtersReducer';
import restaurantReducer from './restaurantReducer';
import reviewsReducer from './reviewsReducer';

export default combineReducers({
  location: locationReducer,
  search: searchReducer,
  filter: filtersReducer,
  restaurants: restaurantReducer,
  reviews: reviewsReducer,
});
