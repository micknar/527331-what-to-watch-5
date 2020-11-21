export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  CLEAR_RENDERED_FILMS: `CLEAR_RENDERED_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const getFilmsByGenre = (genre) => ({
  type: ActionType.GET_FILMS_BY_GENRE,
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

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
