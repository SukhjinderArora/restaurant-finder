import { combineReducers } from 'redux';

import locationReducer from './locationReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  location: locationReducer,
  search: searchReducer,
});
