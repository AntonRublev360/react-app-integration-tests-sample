import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import user from './user/reducer';
import repositories from './repositories/reducer';

const rootReducer = combineReducers({
  user,
  repositories
});

export default () => createStore(rootReducer, applyMiddleware(thunk));
