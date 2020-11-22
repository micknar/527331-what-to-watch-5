import {filmsCount, RatingMarkType} from "./const";

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
  const count = state.renderedFilmsCount + filmsCount.PER_STEP;

  if (count > state.filteredFilms.length) {
    return state.renderedFilmsCount + (state.filteredFilms.length % filmsCount.PER_STEP);
  }

  return count;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
