import React, { Component } from 'react';
import {
  Grid,
  Table,
  TableHeaderRow
} from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

import CustomNav from './CustomNav';

type Props = {
  movieList: array
};


export default class MovieGrid extends Component<Props> {
  props: Props;
  render() {
    const {
      movieList
    } = this.props;

    return [
      <CustomNav />,
      <Grid
        rows={movieList}
        columns={[
          { name: 'id', title: 'ID' },
          { name: 'name', title: 'Product' },
          { name: 'detail', title: 'Owner' },
        ]}>
        <Table />
        <TableHeaderRow />
      </Grid>
    ];
  }
}
