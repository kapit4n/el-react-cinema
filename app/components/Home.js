// @flow
import React, { Component } from 'react';
import MovieView from '../components/MovieView';
import CustomNav from '../components/CustomNav';
import SimpleSlider from '../components/SimpleSlider';
import {
  Grid,
  Table,
  TableHeaderRow
} from "@devexpress/dx-react-grid-bootstrap4";

import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";

type Props = {
  favMovies: array
};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    const {
      favMovies
    } = this.props;

    const listItems = favMovies.map((movie) => <MovieView key={movie.id} movie={movie} />);

    return (
      <div>
        <div className="container" data-tid="container">
          <CustomNav/>
          <Grid
            rows={[
              { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
              { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
            ]}
            columns={[
              { name: 'id', title: 'ID' },
              { name: 'product', title: 'Product' },
              { name: 'owner', title: 'Owner' },
            ]}>
            <Table />
            <TableHeaderRow />
          </Grid>
          <SimpleSlider movies={favMovies}/>
        </div>
      </div>
    );
  }
}
