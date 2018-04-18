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
    console.log('Displaying props');
    console.log(this.props);
    const listItems = movieList.map((movie) =>
      <div className="card" key={movie.name}>
        <img className="card-img-top" height={200} src="./assets/movie_jobs.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{movie.name}</h5>
          <p className="card-text">{movie.detail}</p>
        </div>
      </div>);

    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div>
          <ul>{listItems}</ul>
        </div>
        <div>
          <button className={styles.btn} onClick={increment} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={decrement} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
        </div>
      </div>
    );
  }
}
