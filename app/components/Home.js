// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieView from '../components/MovieView';

type Props = {
  favMovies: array
};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    const {
      favMovies
    } = this.props;

    const listItems = favMovies.map((movie) => <MovieView key={movie.id} movie={movie} />);

    return (
      <div>
        <div className="container" data-tid="container">
          <div className="vertical-menu">
            <a href="#" className="active">Home</a>/
            <Link to="/movies">All Movies</Link>
          </div>
          <div>
            <ul>{listItems}</ul>
          </div>
        </div>
      </div>
    );
  }
}
