// @flow
import { INCREMENT_MOVIE, DECREMENT_MOVIE } from '../actions/movie';

export type counterStateType = {
  +movie: number
};

type actionType = {
  +type: string
};

export default function movie(state: number = 0, action: actionType) {
  switch (action.type) {
    case INCREMENT_MOVIE:
      return state + 1;
    case DECREMENT_MOVIE:
      return state - 1;
    default:
      return state;
  }
}
