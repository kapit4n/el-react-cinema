// @flow
import type { movieStateType } from '../reducers/movie';

type actionType = {
  +type: string
};

export const INCREMENT_MOVIE = 'INCREMENT_MOVIE';
export const DECREMENT_MOVIE = 'DECREMENT_MOVIE';

export function increment() {
  return {
    type: INCREMENT_MOVIE
  };
}

export function decrement() {
  return {
    type: DECREMENT_MOVIE
  };
}

export function incrementIfOdd() {
  return (dispatch: (action: actionType) => void, getState: () => movieStateType) => {
    const { movie } = getState();

    if (movie % 2 === 0) {
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
