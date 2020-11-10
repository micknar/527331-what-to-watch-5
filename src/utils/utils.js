const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

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
