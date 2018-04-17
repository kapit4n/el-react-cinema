// @flow
import { INCREMENT_MOVIELIST, DECREMENT_MOVIELIST } from '../actions/movielist';

export type movieListStateType = {
  movieList: array
};

const initialState = {
  movieList: [{
    name: 'Movie 1',
    detail: 'Detail'
  }]
};

type actionType = {
  +type: string
};

export default function movieList(state = initialState, action: actionType) {
  console.log('Call movieList() from reducers 1');
  console.log(state);
  console.log('Call movieList() from reducers 2');
  switch (action.type) {
    case INCREMENT_MOVIELIST:
      return [{ name: 'New Movie Incremenet', detail: 'detail Movie' }];
    case DECREMENT_MOVIELIST:
      return [{ name: 'New Movie Decremenet', detail: 'detail Movie' }];
    default:
      return [{ name: 'New Movie', detail: 'detail Movie' }];
  }
}
