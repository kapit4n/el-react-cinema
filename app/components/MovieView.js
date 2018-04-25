// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  movie: object
};

export default class MovieView extends Component<Props> {
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
      <div className="col-sm-4">
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={`./assets/${movie.img}`} alt="" />
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/movie/${movie.id}`}>
                <i className="fa fa-folder-open fa-x" />
              </Link>
              {movie.name} <br />
              {rows.map((ii) => <i className="fa fa-star" aria-hidden="true" key={ii} />)} <br />
              {movie.times.map((ti) => <span className="badge badge-secondary" key={ti} >{ti}</span>)}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
