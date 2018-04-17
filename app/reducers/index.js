// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import movie from './movie';

const rootReducer = combineReducers({
  counter,
  movie,
  router,
});

export default rootReducer;
