// @flow
import type { movieListStateType } from '../reducers/movielist';

type actionType = {
  +type: string
};

export const INCREMENT_MOVIELIST = 'INCREMENT_MOVIELIST';
export const DECREMENT_MOVIELIST = 'DECREMENT_MOVIELIST';

export function increment() {
  return {
    type: INCREMENT_MOVIELIST
  };
}

export function decrement() {
  return {
    type: DECREMENT_MOVIELIST
  };
}

export function incrementIfOdd() {
  return (dispatch: (action: actionType) => void, getState: () => movieListStateType) => {
    const { movie } = getState();

    if (movie.name % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: (action: actionType) => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
