import {ActionType} from "./action";
import {films} from "../mocks/films";
import {extend} from "../utils/utils.js";
import {FILMS_COUNT_PER_STEP} from "../mocks/const.js";

const initialState = {
  films,
  activeGenre: `All genres`,
  filteredFilms: films,
  renderedFilmsCount: FILMS_COUNT_PER_STEP,
};

const getFilteredFilms = (activeGenre) => {
  if (activeGenre === `All genres`) {
    return films;
  }

  return films.filter((film) => film.genre === activeGenre);
};

const getRenderedFilmsCount = (state) => {
  const count = state.renderedFilmsCount + FILMS_COUNT_PER_STEP;

  if (count > state.filteredFilms.length) {
    return state.renderedFilmsCount + (state.filteredFilms.length % FILMS_COUNT_PER_STEP);
  }

  return count;
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

    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {
        renderedFilmsCount: getRenderedFilmsCount(state),
      });

    case ActionType.CLEAR_RENDERED_FILMS:
      return Object.assign({}, state, {
        renderedFilmsCount: FILMS_COUNT_PER_STEP,
      });
  }

  return state;
};

export {reducer};
