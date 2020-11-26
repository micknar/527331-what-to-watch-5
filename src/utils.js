import {FilmsCount, RatingMarkType, FavoriteStatusCode} from "./const";

export const getRatingMark = (rating) => {
  let mark = ``;

  if (rating < 3) {
    mark = RatingMarkType.BAD;
  } else if (rating < 5) {
    mark = RatingMarkType.NORMAL;
  } else if (rating < 8) {
    mark = RatingMarkType.GOOD;
  } else if (rating < 10) {
    mark = RatingMarkType.VERY_GOOD;
  } else if (rating === 10) {
    mark = RatingMarkType.AWESOME;
  }

  return mark;
};

export const getRuntime = (time) => {
  return {
    hours: Math.floor(time / 60),
    minutes: time % 60,
  };
};

export const getDate = (date) => {
  const dateToFormat = new Date(date);
  const day = dateToFormat.getDate();
  const month = dateToFormat.getMonth() + 1;
  const year = dateToFormat.getFullYear();

  return {
    dateTime: `${year}-${month}-${day}`,
    humanizeDate: dateToFormat.toLocaleString(`en-US`, {
      day: `numeric`,
      month: `long`,
      year: `numeric`
    }),
  };
};

export const isDouble = (n) => n > 10 ? n : `0${n}`;

export const getRenderedFilmsCount = (state) => {
  const count = state.renderedFilmsCount + FilmsCount.PER_STEP;

  if (count > state.filteredFilms.length) {
    return state.renderedFilmsCount + (state.filteredFilms.length % FilmsCount.PER_STEP);
  }

  return count;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const setFavoriteStatus = (isFavorite) => isFavorite ? FavoriteStatusCode.REMOVE : FavoriteStatusCode.ADD;

export const shadeColor = (color, percent) => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent) / 100), 10);
  G = parseInt((G * (100 + percent) / 100), 10);
  B = parseInt((B * (100 + percent) / 100), 10);

  R = (R < 255) ? R : 255;
  G = (G < 255) ? G : 255;
  B = (B < 255) ? B : 255;

  const RR = ((R.toString(16).length === 1) ? `0` + R.toString(16) : R.toString(16));
  const GG = ((G.toString(16).length === 1) ? `0` + G.toString(16) : G.toString(16));
  const BB = ((B.toString(16).length === 1) ? `0` + B.toString(16) : B.toString(16));

  return `#` + RR + GG + BB;
};

export const getElapsedTime = (duration, progress) => {
  const minutesElapsed = Math.floor((duration - progress) / 60);
  const secondsElapsed = Math.floor((duration - progress) % 60);
  const timeElapsed = `${isDouble(minutesElapsed)}:${isDouble(secondsElapsed)}`;

  return timeElapsed;
};

export const getGenreInPlural = (genre) => {
  switch (genre) {
    case `Comedy`:
      return `Comedies`;
    case `Drama`:
      return `Dramas`;
    case `Thriller`:
      return `Thrillers`;
    default:
      return genre;
  }
};

export const getFilterItemClass = (genre, activeGenre) => {
  return activeGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
};

export const getLoginFormFieldClassName = (isValid) => isValid ? `sign-in__field` : `sign-in__field sign-in__field--error`;
