/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import MovieList from './containers/MovieList';
import Movie from './containers/Movie';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/movies" component={MovieList} />
      <Route path="/movie" component={Movie} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
