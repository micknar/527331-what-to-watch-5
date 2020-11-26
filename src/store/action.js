export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  CLEAR_RENDERED_FILMS: `CLEAR_RENDERED_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_FILM_BY_ID: `LOAD_FILM_BY_ID`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_AVATAR: `SET_USER_AVATAR`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_IS_CHECKING_AUTH: `SET_IS_CHECKING_AUTH`,
  SET_IS_FILMS_LOADING: `SET_IS_FILMS_LOADING`,
  SET_IS_PROMO_LOADING: `SET_IS_PROMO_LOADING`,
  SET_IS_FILM_LOADING: `SET_IS_FILM_LOADING`,
  SET_IS_LOADING_ERROR: `SET_IS_LOADING_ERROR`,
  SET_IS_REVIEW_SUBMITTING: `SET_IS_REVIEW_SUBMITTING`,
  SET_IS_REVIEW_SUBMITTING_ERROR: `SET_IS_REVIEW_SUBMITTING_ERROR`,
  SET_IS_LOGIN_DATA_SENDING: `SET_IS_LOGIN_DATA_SENDING`,
  SET_IS_LOGIN_ERROR: `SET_IS_LOGIN_ERROR`,
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

export const loadFilmById = (film) => ({
  type: ActionType.LOAD_FILM_BY_ID,
  payload: film,
});

export const loadFavoriteFilms = (films) => ({
  type: ActionType.LOAD_FAVORITE_FILMS,
  payload: films,
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const setUserAvatar = (src) => ({
  type: ActionType.SET_USER_AVATAR,
  payload: src,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setIsCheckingAuth = (bool) => ({
  type: ActionType.SET_IS_CHECKING_AUTH,
  payload: bool,
});

export const setIsFilmsLoading = (bool) => ({
  type: ActionType.SET_IS_FILMS_LOADING,
  payload: bool,
});

export const setIsPromoLoading = (bool) => ({
  type: ActionType.SET_IS_PROMO_LOADING,
  payload: bool,
});

export const setIsFilmLoading = (bool) => ({
  type: ActionType.SET_IS_FILM_LOADING,
  payload: bool,
});

export const setIsLoadingError = (bool) => ({
  type: ActionType.SET_IS_LOADING_ERROR,
  payload: bool,
});

export const setIsReviewSubmitting = (bool) => ({
  type: ActionType.SET_IS_REVIEW_SUBMITTING,
  payload: bool,
});

export const setIsReviewSubmittingError = (bool) => ({
  type: ActionType.SET_IS_REVIEW_SUBMITTING_ERROR,
  payload: bool,
});

export const setIsLoginDataSending = (bool) => ({
  type: ActionType.SET_IS_LOGIN_DATA_SENDING,
  payload: bool,
});

export const setIsLoginError = (bool) => ({
  type: ActionType.SET_IS_LOGIN_ERROR,
  payload: bool,
});
