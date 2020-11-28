import {getDate} from "./utils";

export const noop = () => {};

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
    starring: [`Bill Murray`, `Saoirse Ronan`],
    runTime: {
      hours: 2,
      minutes: 40,
    },
    genre: `Crime`,
    released: 1996,
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

export const userInfo = {
  'id': 1,
  'email': `Oliver.conner@gmail.com`,
  'name': `Oliver.conner`,
  'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
};

export const filmsFromServer = [{
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
}];

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
