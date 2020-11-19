const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

const ratingMarkMap = {
  'Bad': {
    mark: `Bad`,
    max: 3,
  },
  'Normal': {
    mark: `Normal`,
    min: 3,
    max: 5,
  },
  'Good': {
    mark: `Good`,
    min: 5,
    max: 8,
  },
  'VeryGood': {
    mark: `Very good`,
    min: 8,
    max: 10,
  },
  'Awesome': {
    mark: `Awesome`,
    max: 10,
  },
};

export const getRatingMark = (rating) => {
  let mark = ``;

  if (rating < ratingMarkMap.Bad.max) {
    mark = ratingMarkMap.Bad.mark;
  } else if (rating >= ratingMarkMap.Normal.min && rating < ratingMarkMap.Normal.max) {
    mark = ratingMarkMap.Normal.mark;
  } else if (rating >= ratingMarkMap.Good.min && rating < ratingMarkMap.Good.max) {
    mark = ratingMarkMap.Good.mark;
  } else if (rating >= ratingMarkMap.VeryGood.min && rating < ratingMarkMap.VeryGood.max) {
    mark = ratingMarkMap.mark;
  } else if (rating >= ratingMarkMap.Awesome.max) {
    mark = ratingMarkMap.Awesome.mark;
  }

  return mark;
};

export const getRandomInteger = (max, min = 0) => Math.floor(Math.random() * (max + 1 - min)) + min;

export const getRandomFloat = (max, min) => {
  const number = (Math.random() * (max + 1 - min) + min).toFixed(1);
  return +number > max ? `${max}.0` : number;
};

export const getRandomBoolean = () => Math.random() > 0.5;

export const getRandomArrayIndex = (array) => getRandomInteger(array.length - 1);

export const getRandomArrayItem = (array) => array[getRandomArrayIndex(array)];

export const getRandomArrayItems = (array) => {
  const tempArray = array.slice();
  const count = getRandomArrayIndex(array);
  const randomItems = [];

  for (let i = 0; i < count; i++) {
    let randomIndex = getRandomArrayIndex(tempArray);
    let itemOfSet = tempArray[randomIndex];

    randomItems.push(itemOfSet);
    tempArray.splice(randomIndex, 1);
  }

  return randomItems.length === 0 ? [array[0]] : randomItems;
};

export const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const generateDate = () => {
  const date = getRandomDate(new Date(2015, 1, 1), new Date());

  return {
    day: date.getDate(),
    month: MONTHS[date.getMonth()],
    monthNumber: date.getMonth() + 1,
    year: date.getFullYear(),
  };
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
