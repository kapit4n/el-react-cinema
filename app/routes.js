/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import MovieList from './containers/MovieList';
import MovieGrid from './containers/MovieGrid';
import Movie from './containers/Movie';

export default () => (
  <App>
    <Switch>
      <Route path="/movieGrid" component={MovieGrid} />
      <Route path="/movies" component={MovieList} />
      <Route path="/movie/:id" component={Movie} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
