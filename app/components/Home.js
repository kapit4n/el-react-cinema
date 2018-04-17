// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <div className="vertical-menu">
            <a href="#" className="active">Home</a>
            <Link to="/counter">Counter</Link>
            <Link to="/movies">Movie List</Link>
          </div>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
