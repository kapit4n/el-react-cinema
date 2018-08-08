// @flow
import React, { Component } from 'react';
import MovieView from '../components/MovieView';
import CustomNav from '../components/CustomNav';
import SimpleSlider from '../components/SimpleSlider';

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
          <CustomNav/>
          <SimpleSlider movies={favMovies}/>
        </div>
      </div>
    );
  }
}
