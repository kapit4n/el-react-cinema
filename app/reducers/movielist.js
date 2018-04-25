// @flow
import { INCREMENT_MOVIELIST, DECREMENT_MOVIELIST } from '../actions/movielist';

const initialState = [{
  id: 1,
  name: 'Steven Jobs',
  detail: 'Detail',
  img: 'movie_jobs.jpg',
  stars: 1,
  times: [
    '10:34PM'
  ]
},
{
  id: 2,
  name: 'Monster Trucks',
  detail: 'Detail',
  img: 'movie_monster_trucks.jpg',
  stars: 5,
  times: [
    '12:34PM',
    '1:34PM',
    '4:34PM'
  ]
},
{
  id: 3,
  name: 'Silicon Valley',
  detail: 'Detail',
  img: 'movie_pirates_sillicon_valley.png',
  stars: 3,
  times: [
    '4:34PM'
  ]
},
{
  id: 4,
  name: 'The Cat Returns',
  detail: 'Detail',
  img: 'movie_the_cat_returns.jpg',
  stars: 2,
  times: [
    '8:34AM',
    '12:34PM',
    '1:34PM',
    '4:34PM'
  ]
},
{
  id: 5,
  name: 'Cobra Kai',
  detail: 'Detail',
  img: 'movie_cobra_kai.jpg',
  stars: 4,
  times: [
    '1:34PM',
    '4:34PM'
  ]
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
