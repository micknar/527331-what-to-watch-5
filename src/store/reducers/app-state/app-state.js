import {ActionType} from "../../action";
import {extend, getRenderedFilmsCount} from "../../../utils";
import {filmsCount} from "../../../const";

const initialState = {
  films: [],
  promoFilm: {},
  film: {},
  activeGenre: `All genres`,
  filteredFilms: [],
  comments: [],
  renderedFilmsCount: filmsCount.PER_STEP,
  isCheckingAuth: true,
  isFilmsLoading: true,
  isPromoLoading: true,
  isFilmLoading: true,
  isLoadingError: false,
  isReviewSubmitting: false,
  isReviewSubmittingError: false,
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

    case ActionType.LOAD_FILM_BY_ID:
      return extend(state, {
        film: action.payload,
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

    case ActionType.SET_IS_CHECKING_AUTH:
      return extend(state, {
        isCheckingAuth: action.payload,
      });

    case ActionType.SET_IS_FILMS_LOADING:
      return extend(state, {
        isFilmsLoading: action.payload,
      });

    case ActionType.SET_IS_PROMO_LOADING:
      return extend(state, {
        isPromoLoading: action.payload,
      });

    case ActionType.SET_IS_FILM_LOADING:
      return extend(state, {
        isFilmLoading: action.payload,
      });

    case ActionType.SET_IS_LOADING_ERROR:
      return extend(state, {
        isLoadingError: action.payload,
      });

    case ActionType.SET_IS_REVIEW_SUBMITTING:
      return extend(state, {
        isReviewSubmitting: action.payload,
      });

    case ActionType.SET_IS_REVIEW_SUBMITTING_ERROR:
      return extend(state, {
        isReviewSubmittingError: action.payload,
      });
  }

  return state;
};

export {appState};
