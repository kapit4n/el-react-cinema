// @flow
import { INCREMENT_MOVIELIST, DECREMENT_MOVIELIST } from '../actions/movielist';

const initialState = [{
  id: 1,
  name: 'Steven Jobs',
  detail: 'Detail',
  img: 'movie_jobs.jpg',
  stars: 1
},
{
  id: 2,
  name: 'Monster Trucks',
  detail: 'Detail',
  img: 'movie_monster_trucks.jpg',
  stars: 5
},
{
  id: 3,
  name: 'Silicon Valley',
  detail: 'Detail',
  img: 'movie_pirates_sillicon_valley.png',
  stars: 3
},
{
  id: 4,
  name: 'The Cat Returns',
  detail: 'Detail',
  img: 'movie_the_cat_returns.jpg',
  stars: 2
},
{
  id: 5,
  name: 'Cobra Kai',
  detail: 'Detail',
  img: 'movie_cobra_kai.jpg',
  stars: 4
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
