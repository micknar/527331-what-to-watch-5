import {getDate} from "./utils";

export const noop = () => { };

export const userInfo = {
  'id': 1,
  'email': `Oliver.conner@gmail.com`,
  'name': `Oliver.conner`,
  'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
};

export const films = [
  {
    id: 1,
    name: `Bronson`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    backgroundImage: `/img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#4aa2e5`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 8.9,
    ratingMark: `Very good`,
    scoresCount: 240,
    director: `Nicolas Winding Refn`,
    starring: `Bill Murray, Saoirse Ronan`,
    runTime: {
      hours: 2,
      minutes: 40,
    },
    genre: `Crime`,
    released: 1996,
    isFavorite: false,
  }, {
    id: 2,
    name: `Midnight Special`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Midnight_Special.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/Midnight_Special.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    backgroundColor: `#4aa2e5`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    rating: 10,
    ratingMark: `Awesome`,
    scoresCount: 240,
    director: `Quentin Tarantino`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan`,
    runTime: {
      hours: 1,
      minutes: 42,
    },
    genre: `Thriller`,
    released: 1989,
    isFavorite: true,
  },
  {
    id: 3,
    name: `Pulp Fiction`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/Pulp_Fiction.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    backgroundColor: `#4aa2e5`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    rating: 2.2,
    ratingMark: `Bad`,
    scoresCount: 240,
    director: `Quentin Tarantino`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan`,
    runTime: {
      hours: 1,
      minutes: 22,
    },
    genre: `Action`,
    released: 2007,
    isFavorite: false,
  },
  {
    id: 4,
    name: `Matrix`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Matrix.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/Matrix.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    backgroundColor: `#4aa2e5`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ext enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    rating: 4.5,
    ratingMark: `Normal`,
    scoresCount: 240,
    director: `Quentin Tarantino`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan`,
    runTime: {
      hours: 1,
      minutes: 24,
    },
    genre: `Adventure`,
    released: 2011,
    isFavorite: true,
  },
  {
    id: 5,
    name: `Legend`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Legend.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/Legend.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    backgroundColor: `#4aa2e5`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem i ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    rating: 4.1,
    ratingMark: `Normal`,
    scoresCount: 240,
    director: `Quentin Tarantino`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan`,
    runTime: {
      hours: 1,
      minutes: 57,
    },
    genre: `Comedy`,
    released: 2015,
    isFavorite: false,
  },
  {
    id: 6,
    name: `angs of new york`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/gangs_of_new_york.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/gangs_of_new_york.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    backgroundColor: `#4aa2e5`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.uip ex ea commodo consequat.`,
    rating: 7.8,
    ratingMark: `Good`,
    scoresCount: 240,
    director: `Quentin Tarantino`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan`,
    runTime: {
      hours: 1,
      minutes: 35,
    },
    genre: `Fantasy`,
    released: 1980,
    isFavorite: false,
  },
  {
    id: 7,
    name: `A Star Is Born`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/A_Star_is_Born.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/A_Star_is_Born.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    backgroundColor: `#4aa2e5`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    rating: 6.4,
    ratingMark: `Good`,
    scoresCount: 240,
    director: `Guy Ritchie`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan`,
    runTime: {
      hours: 1,
      minutes: 25,
    },
    genre: `Drama`,
    released: 1989,
    isFavorite: false,
  },
  {
    id: 8,
    name: `Snatch`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/Snatch.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    backgroundColor: `#4aa2e5`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    rating: 9.8,
    ratingMark: `Very good`,
    scoresCount: 240,
    director: `Quentin Tarantino`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan`,
    runTime: {
      hours: 2,
      minutes: 20,
    },
    genre: `Fantasy`,
    released: 2004,
    isFavorite: false,
  },
  {
    id: 9,
    name: `Bohemian Rhapsody`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Bohemian_Rhapsody.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/Bohemian_Rhapsody.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    backgroundColor: `#4aa2e5`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur.`,
    rating: 3,
    ratingMark: `Normal`,
    scoresCount: 240,
    director: `Quentin Tarantino`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan`,
    runTime: {
      hours: 1,
      minutes: 20,
    },
    genre: `Adventure`,
    released: 1998,
    isFavorite: false,
  },
];

export const comments = [
  {
    id: 1,
    user: {
      id: 19,
      name: `Christina`,
    },
    rating: 2.4,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    date: getDate(`2020-10-09T13:38:44.769Z`),
  },
  {
    id: 2,
    user: {
      id: 14,
      name: `Corey`,
    },
    rating: 3.2,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`,
    date: getDate(`2020-10-27T13:38:44.769Z`),
  },
];

export const filmsFromServer = [
  {
    id: 1,
    name: `Bronson`,
    // eslint-disable-next-line camelcase
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    // eslint-disable-next-line camelcase
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    // eslint-disable-next-line camelcase
    background_image: `/img/the-grand-budapest-hotel-bg.jpg`,
    // eslint-disable-next-line camelcase
    background_color: `#4aa2e5`,
    // eslint-disable-next-line camelcase
    video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    // eslint-disable-next-line camelcase
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 8.9,
    // eslint-disable-next-line camelcase
    scores_count: 240,
    director: `Nicolas Winding Refn`,
    starring: [`Bill Murray`, `Saoirse Ronan`],
    // eslint-disable-next-line camelcase
    run_time: 160,
    genre: `Crime`,
    released: 1996,
    // eslint-disable-next-line camelcase
    is_favorite: false,
  },
  {
    id: 2,
    name: `Midnight Special`,
    // eslint-disable-next-line camelcase
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Midnight_Special.jpg`,
    // eslint-disable-next-line camelcase
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/Midnight_Special.jpg`,
    // eslint-disable-next-line camelcase
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    // eslint-disable-next-line camelcase
    background_color: `#4aa2e5`,
    // eslint-disable-next-line camelcase
    video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    // eslint-disable-next-line camelcase
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    rating: 10,
    // eslint-disable-next-line camelcase
    scores_count: 240,
    director: `Quentin Tarantino`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    // eslint-disable-next-line camelcase
    run_time: 102,
    genre: `Thriller`,
    released: 1989,
    // eslint-disable-next-line camelcase
    is_favorite: true,
  },
  {
    id: 3,
    name: `Pulp Fiction`,
    // eslint-disable-next-line camelcase
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
    // eslint-disable-next-line camelcase
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/Pulp_Fiction.jpg`,
    // eslint-disable-next-line camelcase
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    // eslint-disable-next-line camelcase
    background_color: `#4aa2e5`,
    // eslint-disable-next-line camelcase
    video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    // eslint-disable-next-line camelcase
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    rating: 2.2,
    // eslint-disable-next-line camelcase
    scores_count: 240,
    director: `Quentin Tarantino`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    // eslint-disable-next-line camelcase
    run_time: 82,
    genre: `Action`,
    released: 2007,
    // eslint-disable-next-line camelcase
    is_favorite: false,
  },
  {
    id: 4,
    name: `Matrix`,
    // eslint-disable-next-line camelcase
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Matrix.jpg`,
    // eslint-disable-next-line camelcase
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/Matrix.jpg`,
    // eslint-disable-next-line camelcase
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    // eslint-disable-next-line camelcase
    background_color: `#4aa2e5`,
    // eslint-disable-next-line camelcase
    video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    // eslint-disable-next-line camelcase
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ext enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    rating: 4.5,
    // eslint-disable-next-line camelcase
    scores_count: 240,
    director: `Quentin Tarantino`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    // eslint-disable-next-line camelcase
    run_time: 84,
    genre: `Adventure`,
    released: 2011,
    // eslint-disable-next-line camelcase
    is_favorite: true,
  },
  {
    id: 5,
    name: `Legend`,
    // eslint-disable-next-line camelcase
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Legend.jpg`,
    // eslint-disable-next-line camelcase
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/Legend.jpg`,
    // eslint-disable-next-line camelcase
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    // eslint-disable-next-line camelcase
    background_color: `#4aa2e5`,
    // eslint-disable-next-line camelcase
    video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    // eslint-disable-next-line camelcase
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem i ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    rating: 4.1,
    // eslint-disable-next-line camelcase
    scores_count: 240,
    director: `Quentin Tarantino`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    // eslint-disable-next-line camelcase
    run_time: 117,
    genre: `Comedy`,
    released: 2015,
    // eslint-disable-next-line camelcase
    is_favorite: false,
  },
  {
    id: 6,
    name: `angs of new york`,
    // eslint-disable-next-line camelcase
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/gangs_of_new_york.jpg`,
    // eslint-disable-next-line camelcase
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/gangs_of_new_york.jpg`,
    // eslint-disable-next-line camelcase
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    // eslint-disable-next-line camelcase
    background_color: `#4aa2e5`,
    // eslint-disable-next-line camelcase
    video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    // eslint-disable-next-line camelcase
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.uip ex ea commodo consequat.`,
    rating: 7.8,
    // eslint-disable-next-line camelcase
    scores_count: 240,
    director: `Quentin Tarantino`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    // eslint-disable-next-line camelcase
    run_time: 95,
    genre: `Fantasy`,
    released: 1980,
    // eslint-disable-next-line camelcase
    is_favorite: false,
  },
  {
    id: 7,
    name: `A Star Is Born`,
    // eslint-disable-next-line camelcase
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/A_Star_is_Born.jpg`,
    // eslint-disable-next-line camelcase
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/A_Star_is_Born.jpg`,
    // eslint-disable-next-line camelcase
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    // eslint-disable-next-line camelcase
    background_color: `#4aa2e5`,
    // eslint-disable-next-line camelcase
    video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    // eslint-disable-next-line camelcase
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    rating: 6.4,
    // eslint-disable-next-line camelcase
    scores_count: 240,
    director: `Guy Ritchie`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    // eslint-disable-next-line camelcase
    run_time: 85,
    genre: `Drama`,
    released: 1989,
    // eslint-disable-next-line camelcase
    is_favorite: false,
  },
  {
    id: 8,
    name: `Snatch`,
    // eslint-disable-next-line camelcase
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
    // eslint-disable-next-line camelcase
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/Snatch.jpg`,
    // eslint-disable-next-line camelcase
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    // eslint-disable-next-line camelcase
    background_color: `#4aa2e5`,
    // eslint-disable-next-line camelcase
    video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    // eslint-disable-next-line camelcase
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    rating: 9.8,
    // eslint-disable-next-line camelcase
    scores_count: 240,
    director: `Quentin Tarantino`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    // eslint-disable-next-line camelcase
    run_time: 140,
    genre: `Fantasy`,
    released: 2004,
    // eslint-disable-next-line camelcase
    is_favorite: false,
  },
  {
    id: 9,
    name: `Bohemian Rhapsody`,
    // eslint-disable-next-line camelcase
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Bohemian_Rhapsody.jpg`,
    // eslint-disable-next-line camelcase
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/Bohemian_Rhapsody.jpg`,
    // eslint-disable-next-line camelcase
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Bohemian_Rhapsody.jpg`,
    // eslint-disable-next-line camelcase
    background_color: `#4aa2e5`,
    // eslint-disable-next-line camelcase
    video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    // eslint-disable-next-line camelcase
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Lorem ipsum dolor sit amet, consectetur.`,
    rating: 3,
    // eslint-disable-next-line camelcase
    scores_count: 240,
    director: `Quentin Tarantino`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    // eslint-disable-next-line camelcase
    run_time: 80,
    genre: `Adventure`,
    released: 1998,
    // eslint-disable-next-line camelcase
    is_favorite: false,
  },
];

export const commentFromServer = [
  {
    id: 1,
    user: {
      id: 19,
      name: `Christina`,
    },
    rating: 2.4,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
    date: `2020-10-09T13:38:44.769Z`,
  },
  {
    id: 2,
    user: {
      id: 14,
      name: `Corey`,
    },
    rating: 3.2,
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`,
    date: `2020-10-27T13:38:44.769Z`,
  },
];
