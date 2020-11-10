import {
  generateId,
  getRandomArrayItem,
  getRandomArrayItems,
  getRandomFloat,
  getRandomInteger,
  getRandomBoolean
} from "../utils/utils.js";

import {
  GENRES,
  DIRECTORS,
  ACTORS,
  TITLES,
  POSTERS,
  TEXTS,
  RATING_MIN,
  RATING_MAX,
  FILMS_COUNT
} from "./const.js";

import comments from './reviews.js';

const RUNTIME_MAX = 210;
const SCORES_COUNT_MAX = 240;

const getRuntime = () => {
  const time = getRandomInteger(RUNTIME_MAX);
  return {
    hours: Math.floor(time / 60),
    minutes: time % 60,
  };
};

const generateFilm = () => {
  return {
    id: generateId(),
    name: getRandomArrayItem(TITLES),
    posterImage: getRandomArrayItem(POSTERS),
    previewImage: getRandomArrayItem(POSTERS),
    backgroundImage: `/img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: getRandomArrayItems(TEXTS).join(`. `),
    rating: getRandomFloat(RATING_MAX, RATING_MIN),
    scoresCount: getRandomInteger(SCORES_COUNT_MAX),
    director: getRandomArrayItem(DIRECTORS),
    starring: getRandomArrayItems(ACTORS).join(`, `),
    runTime: getRuntime(),
    genre: getRandomArrayItem(GENRES),
    released: getRandomInteger(2020, 1920),
    isFavorite: getRandomBoolean(),
    reviews: comments,
  };
};

export const films = new Array(FILMS_COUNT).fill().map(generateFilm);

export const promoFilm = {
  id: generateId(),
  name: `The Grand Budapest Hotel poster`,
  posterImage: `/img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `/img/bg-the-grand-budapest-hotel.jpg`,
  genre: `Drama`,
  released: 2014,
};
