// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  movie: object
};

export default class Movie extends Component<Props> {
  props: Props;

  render() {
    const {
      movie
    } = this.props;

    const rows = [];
    let i = 0;
    const len = movie.stars;
    while (i < len) {
      rows.push(i);
      i += 1;
    }

    return (
      <div className="container">
        <div className="btn">
          <Link to="/movies">
            <i className="fa fa-arrow-left fa-1x" />
          </Link>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-sm-4">
              <img className="card-img-top" src={`./assets/${movie.img}`} alt="" />
            </div>
            <div className="col-sm-8">
              <div className="card-body">
                <h5 className="card-title">
                  {movie.name}<br />
                  {rows.map((ii) => <i className="fa fa-star" aria-hidden="true" key={ii} />)}
                </h5>
                <p className="card-text">
                  {movie.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
