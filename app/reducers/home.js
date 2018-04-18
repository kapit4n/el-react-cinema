// @flow
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

export default function favMovies(state = initialState, action: actionType) {
  console.log("favMovies");
  console.log(state);
  switch (action.type) {
    default:
      return state;
  }
}
