// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';

type Props = {
  movie: object
};

export default class Movie extends Component<Props> {
  props: Props;

  render() {
    const {
      movie
    } = this.props;

    return (
      <div className="container">
        <div className="btn">
          <Link to="/movies">
            <i className="fa fa-arrow-left fa-2x" />
          </Link>
        </div>
        <div className="card" key={movie.name}>
          <img className="card-img-top" style={{ width: '30%', height: '35%' }} src={`./assets/${movie.img}`} alt="" />
          <div className="card-body">
            <h5 className="card-title">{movie.name}</h5>
            <p className="card-text">
              {movie.detail}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
