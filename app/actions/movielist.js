// @flow
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
