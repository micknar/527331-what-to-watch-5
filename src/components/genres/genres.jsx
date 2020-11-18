import React from "react";
import PropTypes from "prop-types";

const Genres = (props) => {
  const {films} = props;
  const genres = [`All genres`, ...new Set(films.map((film) => film.genre))];

  const getFilterItem = (genre) => {
    switch (genre) {
      case `Comedy`:
        return `Comedies`;
      case `Drama`:
        return `Dramas`;
      case `Thriller`:
        return `Thrillers`;
      default:
        return genre;
    }
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => {
        return (
          <li
            key={genre + i}
            className="catalog__genres-item catalog__genres-item--active"
          >
            <a
              href="#"
              className="catalog__genres-link"
            >{getFilterItem(genre)}</a>
          </li>
        );
      })}
    </ul>
  );
};

Genres.propTypes = {
  films: PropTypes.array.isRequired,
};

export default Genres;
