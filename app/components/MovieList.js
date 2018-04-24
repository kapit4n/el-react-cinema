// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieView from './MovieView';

type Props = {
  increment: () => void,
  decrement: () => void,
  movieList: array
};

export default class MovieList extends Component<Props> {
  props: Props;

  render() {
    const {
      increment, decrement, movieList
    } = this.props;
    const listItems = movieList.map((movie) => <MovieView key={movie.id} movie={movie} />);

    return (
      <div className="container">
        <div className="btn">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div>
          <ul>{listItems}</ul>
        </div>
        <div>
          <button className="btn" onClick={increment}>
            <i className="fa fa-plus" />
          </button>
          <button className="btn" onClick={decrement}>
            <i className="fa fa-minus" />
          </button>
        </div>
      </div>
    );
  }
}
