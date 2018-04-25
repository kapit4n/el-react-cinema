import { SHOW_MOVIE } from '../actions/movie';
const movieList = require('../api/movies.json');
// @flow
const initialState = {
  id: 1,
  name: 'Steven Jobs',
  detail: 'Pirates of Silicon Valley is an original 1999 American made for television biographical drama film, directed by Martyn Burke and starring Noah Wyle as Steve Jobs and Anthony Michael Hall as Bill Gates. Spanning the years 1971–1997 and based on Paul Freiberger and Michael Swaine\'s 1984 book Fire in the Valley: The Making of the Personal Computer, it explores the impact of the rivalry between Jobs(Apple Computer) and Gates(Microsoft) on the development of the personal computer.',
  img: 'movie_jobs.jpg',
  stars: 4
};


type actionType = {
  type: string
};

export default function movie(state = initialState, action: actionType) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      if (action.payload.pathname === '/') {
        return state;
      } else if (action.payload.pathname.split('/')[1] === 'movie') {
        const id = parseInt(action.payload.pathname.split('/')[2], 0);
        const result = movieList.filter(m => m.id === id);
        if (result.length > 0) {
          return result[0];
        }
        return state;
      }
      return state;
    default:
      return state;
  }
}
