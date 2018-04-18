// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';

type Props = {
  increment: () => void,
  decrement: () => void,
  movieList: array
};

export default class MovieList extends Component<Props> {
  props: Props;

  render() {
    const {
      increment, decrement, movieList
    } = this.props;
    const listItems = movieList.map((movie) =>
    <li key={movie.name}>
      <div className="card">
          <img className="card-img-top" style={{ width: '30%', height: '35%'}} src={`./assets/${movie.img}`} alt="" />
        <div className="card-body">
          <h5 className="card-title">
          {movie.name}  
          <Link to={"/movie"}>
              <i className="fa fa-folder-open fa-2x" />
          </Link>
          </h5>
          <p className="card-text">
            {movie.detail}
          </p>
          
        </div>
      </div>
    </li>);

    return (
      <div className="container">
        <div className="btn">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div>
          <ul>{listItems}</ul>
        </div>
        <div>
          <button className="btn" onClick={increment}>
            <i className="fa fa-plus" />
          </button>
          <button className="btn" onClick={decrement}>
            <i className="fa fa-minus" />
          </button>
        </div>
      </div>
    );
  }
}
