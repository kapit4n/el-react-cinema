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
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/movies">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className="card" key={movie.name}>
          <img className="card-img-top" height={100} src={`./assets/${movie.img}`} alt="" />
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
