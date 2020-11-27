import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeGenre, clearRenderedFilms} from "../../store/action";
import {getFilteredFilms} from "../../store/reducers/app-state/selectors";
import {getGenreInPlural, getFilterItemClass} from "../../utils";

const Genres = (props) => {
  const {films, activeGenre, onGenreClick} = props;
  const genres = [`All genres`, ...new Set(films.map((film) => film.genre))];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => {
        return (
          <li
            key={genre + i}
            className={getFilterItemClass(genre, activeGenre)}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onGenreClick(genre);
              }}
            >{getGenreInPlural(genre)}</a>
          </li>
        );
      })}
    </ul>
  );
};

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

const mapStateToProps = ({APP_STATE}) => ({
  films: APP_STATE.films,
  filteredFilms: getFilteredFilms({APP_STATE}),
  activeGenre: APP_STATE.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(activeGenre) {
    dispatch(changeGenre(activeGenre));
    dispatch(clearRenderedFilms());
  }
});

export {Genres};
export default connect(mapStateToProps, mapDispatchToProps)(Genres);
