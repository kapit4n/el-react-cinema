// @flow
const initialState = {
  id: 1,
  name: 'Steven Jobs',
  detail: 'Detail',
  img: 'movie_jobs.jpg'
};

type actionType = {
  +type: string
};

export default function movie(state = initialState, action: actionType) {
  switch (action.type) {
    default:
      return state;
  }
}
