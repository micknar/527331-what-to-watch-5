export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  CLEAR_RENDERED_FILMS: `CLEAR_RENDERED_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_IS_FILMS_LOADING: `SET_IS_FILMS_LOADING`,
  SET_IS_PROMO_LOADING: `SET_IS_PROMO_LOADING`,
  SET_IS_LOADING_ERROR: `SET_IS_LOADING_ERROR`,
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const showMoreFilms = () => ({
  type: ActionType.SHOW_MORE_FILMS,
});

export const clearRenderedFilms = () => ({
  type: ActionType.CLEAR_RENDERED_FILMS,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const loadPromo = (promoFilm) => ({
  type: ActionType.LOAD_PROMO,
  payload: promoFilm,
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setIsFilmsLoading = (bool) => ({
  type: ActionType.SET_IS_FILMS_LOADING,
  payload: bool,
});

export const setIsPromoLoading = (bool) => ({
  type: ActionType.SET_IS_PROMO_LOADING,
  payload: bool,
});

export const setIsLoadingError = (bool) => ({
  type: ActionType.SET_IS_LOADING_ERROR,
  payload: bool,
});
