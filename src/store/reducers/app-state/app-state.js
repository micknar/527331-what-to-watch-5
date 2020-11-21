import {ActionType} from "../../action";
import {films, promoFilm} from "../../../mocks/films";
import {extend, getRenderedFilmsCount} from "../../../utils/utils";
import {FILMS_COUNT_PER_STEP} from "../../../mocks/const";

const initialState = {
  films,
  promoFilm,
  activeGenre: `All genres`,
  filteredFilms: films,
  renderedFilmsCount: FILMS_COUNT_PER_STEP,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {
        renderedFilmsCount: getRenderedFilmsCount(state),
      });

    case ActionType.CLEAR_RENDERED_FILMS:
      return extend(state, {
        renderedFilmsCount: FILMS_COUNT_PER_STEP,
      });
  }

  return state;
};

export {appState};
