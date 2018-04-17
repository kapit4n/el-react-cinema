// @flow
import { INCREMENT_MOVIE, DECREMENT_MOVIE } from '../actions/movie';

const initialState = {
  movie: {
    name: 0,
    detail: 'DETAIL'
  }
};

type actionType = {
  +type: string
};

export default function movie(state = initialState, action: actionType) {
  console.log('Call movie() from reducers 1');
  console.log(state);
  console.log('Call movie() from reducers 2');
  switch (action.type) {
    case INCREMENT_MOVIE:
      return { name: state.name + 1, detail: 'INCREMENT' };
    case DECREMENT_MOVIE:
      return { name: state.name - 1, detail: 'DECREMENT' };
    default:
      return { name: 0, detail: 'DEFAULT' };
  }
}
