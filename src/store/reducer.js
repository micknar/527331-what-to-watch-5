import {ActionType} from "./action";
import {films} from "../mocks/films";
import {extend} from "../utils/utils.js";

const initialState = {
  films,
  activeGenre: `All genres`,
  filteredFilms: films,
};

const getFilteredFilms = (activeGenre) => {
  if (activeGenre === `All genres`) {
    return films;
  }

  return films.filter((film) => film.genre === activeGenre);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {
        filteredFilms: getFilteredFilms(action.payload),
      });
  }

  return state;
};

export {reducer};
