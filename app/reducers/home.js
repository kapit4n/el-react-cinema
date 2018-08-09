// @flow
const initialState = [
  {
    id: 1,
    name: 'Steven Jobs',
    detail: 'obs is a 2013 American biographical drama film based on the life of Steve Jobs, from 1974 while a student at Reed College to the introduction of the iPod in 2001.[3] It is directed by Joshua Michael Stern, written by Matt Whiteley, and produced by Stern and Mark Hulme. Steve Jobs is portrayed by Ashton Kutcher, with Josh Gad as Apple Computer\'s co-founder Steve Wozniak. Jobs was chosen to close the 2013 Sundance Film Festival',
    img: 'movie_jobs.jpg',
    stars: 1,
    times: [
      '10: 34PM'
    ]
  },
  {
    id: 2,
    name: 'Monster Trucks',
    detail: 'Monster Trucks is a 2016 American comedy film produced by Paramount Animation, Nickelodeon Movies and Disruption Entertainment for Paramount Pictures. It was directed by Chris Wedge and written by Derek Connolly, from a story by Jonathan Aibel, Glenn Berger and Matthew Robinson.[4] The film stars Lucas Till, Jane Levy, Amy Ryan, Rob Lowe, Danny Glover, Barry Pepper and Holt McCallany, and follows a high schooler who finds an escaped monster living in his truck',
    img: 'movie_monster_trucks.jpg',
    stars: 5,
    times: [
      '12: 34PM',
      '1: 34PM',
      '4: 34PM'
    ]
  },
  {
    id: 3,
    name: 'Silicon Valley',
    detail: 'Pirates of Silicon Valley is an original 1999 American made for television biographical drama film, directed by Martyn Burke and starring Noah Wyle as Steve Jobs and Anthony Michael Hall as Bill Gates. Spanning the years 1971–1997 and based on Paul Freiberger and Michael Swaine\'s 1984 book Fire in the Valley: The Making of the Personal Computer, it explores the impact of the rivalry between Jobs (Apple Computer) and Gates (Microsoft) on the development of the personal computer',
    img: 'movie_pirates_sillicon_valley.png',
    stars: 3,
    times: [
      '4: 34PM'
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
