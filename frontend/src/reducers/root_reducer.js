// src/reducers/root_reducer.js
import tweets from './tweets_reducer';
import errors from './errors_reducer';
import { combineReducers } from 'redux';
import session from './session_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  tweets
});

export default RootReducer;
