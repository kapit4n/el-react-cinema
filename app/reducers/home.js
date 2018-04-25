// @flow
const initialState = [{
  id: 1,
  name: 'Steven Jobs',
  detail: 'Detail',
  img: 'movie_jobs.jpg',
  stars: 5,
  times: [
    '12:34PM',
    '4:34PM'
  ]
},
{
  id: 2,
  name: 'Monster Trucks',
  detail: 'Detail',
  img: 'movie_monster_trucks.jpg',
  stars: 3,
  times: [
    '12:34PM',
    '1:34PM',
    '5:34PM',
    '8:34PM'
  ]
},
];

type actionType = {
  +type: string
};

export default function favMovies(state = initialState, action: actionType) {
  switch (action.type) {
    default:
      return state;
  }
}
