import {
  FilmsCount,
  ratingMarkMap,
  genreMap,
  FavoriteStatusCode,
  Radix,
  WHITE_RGB_COLOR_CODE,
  HOUR,
} from "./const/const";

export const getRatingMark = (rating) => {
  let mark = ``;

  if (rating < ratingMarkMap.bad.value) {
    mark = ratingMarkMap.bad.text;
  } else if (rating < ratingMarkMap.normal.value) {
    mark = ratingMarkMap.normal.text;
  } else if (rating < ratingMarkMap.good.value) {
    mark = ratingMarkMap.good.text;
  } else if (rating < ratingMarkMap.veryGood.value) {
    mark = ratingMarkMap.veryGood.text;
  } else if (rating === ratingMarkMap.awesome.value) {
    mark = ratingMarkMap.awesome.text;
  }

  return mark;
};

export const getRuntime = (time) => {
  return {
    hours: Math.floor(time / HOUR),
    minutes: time % HOUR,
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
  const parseRGBCode = (min, max) => parseInt(color.substring(min, max), Radix.HEXADECIMAL);
  const shadeRGBcolor = (code) => parseInt((code * (100 + percent) / 100), Radix.DECIMAL);
  const checkResult = (code) => (code < WHITE_RGB_COLOR_CODE) ? code : WHITE_RGB_COLOR_CODE;
  const getHEXString = (code) => code.toString(Radix.HEXADECIMAL);
  const getHEXCode = (code) => ((getHEXString(code).length === 1) ? `0` + getHEXString(code) : getHEXString(code));

  let R = parseRGBCode(1, 3);
  let G = parseRGBCode(3, 5);
  let B = parseRGBCode(5, 7);

  R = shadeRGBcolor(R);
  G = shadeRGBcolor(G);
  B = shadeRGBcolor(B);

  R = checkResult(R);
  G = checkResult(G);
  B = checkResult(B);

  const RR = getHEXCode(R);
  const GG = getHEXCode(G);
  const BB = getHEXCode(B);

  return `#` + RR + GG + BB;
};

export const isDouble = (n) => n > 10 ? n : `0${n}`;

export const getElapsedTime = (duration, progress) => {
  const minutesElapsed = Math.floor((duration - progress) / HOUR);
  const secondsElapsed = Math.floor((duration - progress) % HOUR);
  const timeElapsed = `${isDouble(minutesElapsed)}:${isDouble(secondsElapsed)}`;

  return timeElapsed;
};

export const getGenreInPlural = (genre) => {
  switch (genre) {
    case genreMap.comedy.single:
      return genreMap.comedy.plural;
    case genreMap.drama.single:
      return genreMap.drama.plural;
    case genreMap.thriller.single:
      return genreMap.thriller.plural;
    default:
      return genre;
  }
};
