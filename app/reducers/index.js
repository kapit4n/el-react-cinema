// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import movie from './movie';
import favMovies from './home';
import movieList from './movielist';

const rootReducer = combineReducers({
  counter,
  movie,
  favMovies,
  movieList,
  router,
});

export default rootReducer;
