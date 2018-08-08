import React from "react";
import Slider from "react-slick";
import MovieView from './MovieView';

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
      { this.props.movies.map(movie => <MovieView key={movie.id} movie={movie} />) }        
      </Slider>
    );
  }
}