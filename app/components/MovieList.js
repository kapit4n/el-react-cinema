// @flow
import React, { Component } from 'react';
import MovieView from './MovieView';
import CustomNav from './CustomNav';

type Props = {
  movieList: array
};

export default class MovieList extends Component<Props> {
  props: Props;

  render() {
    const {
      movieList
    } = this.props;
    const listItems = movieList.map((movie) => <MovieView key={movie.id} movie={movie} />);

    return (
      <div className="container">
        <CustomNav />
        <div className="row">
          {listItems}
        </div>
      </div>
    );
  }
}
