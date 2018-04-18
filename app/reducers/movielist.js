// @flow
import { INCREMENT_MOVIELIST, DECREMENT_MOVIELIST } from '../actions/movielist';

const initialState = [{
  name: 'Steven Jobs',
  detail: 'Detail',
  img: 'movie_jobs.jpg'
},
{
  name: 'Monster Trucks',
  detail: 'Detail',
  img: 'movie_monster_trucks.jpg'
},
{
  name: 'Silicon Valley',
  detail: 'Detail',
  img: 'movie_sillicon_valley.jpg'
},
];

type actionType = {
  +type: string
};

export default function movieList(state = initialState, action: actionType) {
  console.log('Call movieList() from reducers 1');
  console.log(state);
  console.log('Call movieList() from reducers 2');
  switch (action.type) {
    case INCREMENT_MOVIELIST:
      return state.concat({ name: 'New Movie Incremenet', detail: 'detail Movie' });
    case DECREMENT_MOVIELIST:
      return state.slice(0, state.length - 1);
    default:
      return state;
  }
}
