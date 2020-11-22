import {createSelector} from 'reselect';

const getFilms = ({APP_STATE}) => APP_STATE.films;
const getActiveGenre = ({APP_STATE}) => APP_STATE.activeGenre;

const getFilteredFilms = createSelector(
    getFilms,
    getActiveGenre,
    (films, activeGenre) => {
      if (activeGenre === `All genres`) {
        return films;
      }

      return films.filter((film) => film.genre === activeGenre);
    }
);

export {getFilteredFilms};
