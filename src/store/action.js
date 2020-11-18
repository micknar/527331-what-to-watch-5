const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  CLEAR_RENDERED_FILMS: `CLEAR_RENDERED_FILMS`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsByGenre: (genre) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: genre,
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
  }),
  clearRenderedFilms: () => ({
    type: ActionType.CLEAR_RENDERED_FILMS,
  }),
};

export {ActionType, ActionCreator};
