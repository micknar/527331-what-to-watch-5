import {filmsCount, ratingMarksType} from "./const";

export const getRatingMark = (rating) => {
  let mark = ``;

  if (rating < 3) {
    mark = ratingMarksType.BAD;
  } else if (rating < 5) {
    mark = ratingMarksType.NORMAL;
  } else if (rating < 8) {
    mark = ratingMarksType.GOOD;
  } else if (rating < 10) {
    mark = ratingMarksType.VERY_GOOD;
  } else if (rating === 10) {
    mark = ratingMarksType.AWESOME;
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
  const count = state.renderedFilmsCount + filmsCount.PER_STEP;

  if (count > state.filteredFilms.length) {
    return state.renderedFilmsCount + (state.filteredFilms.length % filmsCount.PER_STEP);
  }

  return count;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
