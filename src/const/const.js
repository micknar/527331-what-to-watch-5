export const HOUR = 60;
export const WHITE_RGB_COLOR_CODE = 255;
export const CARD_HOVER_TIMEOUT = 1000;

export const RATING_MARKS = [1, 2, 3, 4, 5];

export const ratingMarkMap = {
  'bad': {
    text: `Bad`,
    value: 3,
  },
  'normal': {
    text: `Normal`,
    value: 5,
  },
  'good': {
    text: `Good`,
    value: 8,
  },
  'veryGood': {
    text: `Very good`,
    value: 10,
  },
  'awesome': {
    text: `Awesome`,
    value: 10,
  },
};

export const genreMap = {
  'comedy': {
    single: `Comedy`,
    plural: `Comedies`,
  },
  'drama': {
    single: `Drama`,
    plural: `Dramas`,
  },
  'thriller': {
    single: `Thriller`,
    plural: `Thrillers`,
  },
};

export const FilmsCount = {
  SIMILAR: 4,
  PER_STEP: 8,
};

export const FilmPageNav = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  FILMS: `/films/`,
  FILMS_ID: `/films/:id`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  REVIEW: `/films/:id/review`,
  ROOT: `/`,
  PLAYER: `/player/`,
  PLAYER_ID: `/player/:id`,
};

export const APIRoute = {
  COMMENTS: `/comments/`,
  FAVORITE_FILMS: `/favorite`,
  FILMS: `/films/`,
  LOGIN: `/login`,
  PROMO_FILM: `/films/promo`,
};

export const FavoriteStatusCode = {
  ADD: 1,
  REMOVE: 0,
};

export const NameSpace = {
  APP_STATE: `APP_STATE`,
  USER: `USER`,
};

export const Radix = {
  DECIMAL: 10,
  HEXADECIMAL: 16,
};

export const HttpCode = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};
