import { combineReducers } from 'redux'

import user from './user/reducer';
import repositories from './repositories/reducer';

const rootReducer = combineReducers({
  user,
  repositories
});

export default rootReducer



