import {
  generateId,
  getRandomArrayItem,
  getRandomArrayItems,
  getRandomFloat,
  generateDate,
  getRandomInteger
} from "../utils/utils.js";
import {
  USERS,
  TEXTS,
  RATING_MIN,
  RATING_MAX
} from "../mocks/const.js";

const generateComment = () => {
  return {
    user: {
      id: generateId(),
      name: getRandomArrayItem(USERS),
    },
    rating: getRandomFloat(RATING_MAX, RATING_MIN),
    comment: getRandomArrayItems(TEXTS).join(`. `),
    date: generateDate(),
  };
};

const comments = new Array(getRandomInteger(5)).fill().map(generateComment);

export default comments;
