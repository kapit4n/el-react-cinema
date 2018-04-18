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
  console.log('Call movie() from reducers 1');
  console.log(state);
  console.log('Call movie() from reducers 2');
  switch (action.type) {
    default:
      return state;
  }
}
