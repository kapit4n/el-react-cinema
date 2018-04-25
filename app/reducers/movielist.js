// @flow
import { INCREMENT_MOVIELIST, DECREMENT_MOVIELIST } from '../actions/movielist';

const movieListData = require('../api/movies.json');

const initialState = movieListData;

type actionType = {
  +type: string
};

export default function movieList(state = initialState, action: actionType) {
  switch (action.type) {
    case INCREMENT_MOVIELIST:
      return state.concat({
        id: 0,
        name: 'New Movie',
        detail: 'Detail',
        img: 'new_movie.jpg'
      });
    case DECREMENT_MOVIELIST:
      return state.slice(0, state.length - 1);
    default:
      return state;
  }
}
