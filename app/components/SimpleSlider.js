import React from 'react';
import Slider from 'react-slick';
import Movie from './Movie';

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        { this.props.movies.map(movie => <Movie key={movie.id} movie={movie} />) }        
      </Slider>
    );
  }
}