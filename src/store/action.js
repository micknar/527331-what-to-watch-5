const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
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
};

export {ActionType, ActionCreator};
