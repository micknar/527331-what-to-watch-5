import {ActionType} from "../../action";
import {extend, getRenderedFilmsCount} from "../../../utils";
import {filmsCount} from "../../../const";

const initialState = {
  films: [],
  promoFilm: {},
  activeGenre: `All genres`,
  filteredFilms: [],
  comments: [],
  renderedFilmsCount: filmsCount.PER_STEP,
  isFilmsLoading: true,
  isPromoLoading: true,
  isLoadingError: false,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
        filteredFilms: action.payload,
      });

    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoFilm: action.payload,
      });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });

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
        renderedFilmsCount: filmsCount.PER_STEP,
      });

    case ActionType.SET_IS_FILMS_LOADING:
      return extend(state, {
        isFilmsLoading: action.payload,
      });

    case ActionType.SET_IS_PROMO_LOADING:
      return extend(state, {
        isPromoLoading: action.payload,
      });

    case ActionType.SET_IS_LOADING_ERROR:
      return extend(state, {
        isLoadingError: action.payload,
      });
  }

  return state;
};

export {appState};
