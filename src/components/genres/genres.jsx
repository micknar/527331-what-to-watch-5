import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const Genres = (props) => {
  const {films, activeGenre, onGenreClick} = props;
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

  const getFilterItemClass = (genre) => {
    return activeGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => {
        return (
          <li
            key={genre + i}
            className={getFilterItemClass(genre)}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onGenreClick(genre);
              }}
            >{getFilterItem(genre)}</a>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  films: state.films,
  filteredFilms: state.filteredFilms,
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(activeGenre) {
    dispatch(ActionCreator.changeGenre(activeGenre));
    dispatch(ActionCreator.getFilmsByGenre(activeGenre));
    dispatch(ActionCreator.clearRenderedFilms());
  }
});

Genres.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export {Genres};
export default connect(mapStateToProps, mapDispatchToProps)(Genres);
