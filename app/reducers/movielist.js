// @flow
import { INCREMENT_MOVIELIST, DECREMENT_MOVIELIST } from '../actions/movielist';

const initialState = [{
  id: 1,
  name: 'Steven Jobs',
  detail: 'Detail',
  img: 'movie_jobs.jpg'
},
{
  id: 2,
  name: 'Monster Trucks',
  detail: 'Detail',
  img: 'movie_monster_trucks.jpg'
},
{
  id: 3,
  name: 'Silicon Valley',
  detail: 'Detail',
  img: 'movie_sillicon_valley.jpg'
},
];

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
