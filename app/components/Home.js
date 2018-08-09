// @flow
import React, { Component } from 'react';
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

    return (
      <div>
        <div className="container" data-tid="container">
          <CustomNav />
          <SimpleSlider movies={favMovies} />
        </div>
      </div>
    );
  }
}
