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

    return (
      <li>
        <div className="card">
          <img className="card-img-top" style={{ width: '30%', height: '35%' }} src={`./assets/${movie.img}`} alt="" />
          <div className="card-body">
            <h5 className="card-title">
              <Link to="/movie">
                <i className="fa fa-folder-open fa-x" />
              </Link>
              {movie.name}
            </h5>
          </div>
        </div>
      </li>
    );
  }
}
