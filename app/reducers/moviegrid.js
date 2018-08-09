// @flow
const movieListData = require('../api/movies.json');

const initialState = movieListData;

type actionType = {
  +type: string
};

export default function movieGrid(state = initialState, action: actionType) {
  switch (action.type) {
    default:
      return state;
  }
}
