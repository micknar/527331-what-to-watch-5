import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";

const FilmsList = (props) => {
  const {films, onFilmCardClick, activeCard, handleActiveCard, handleMouseLeave} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return (
          <FilmCard
            key={film.id}
            id={film.id}
            name={film.name}
            previewImage={film.previewImage}
            previewVideoLink={film.previewVideoLink}
            onFilmCardHover={handleActiveCard}
            onFilmCardLeave={handleMouseLeave}
            onFilmCardClick={onFilmCardClick}
            isActive={activeCard === film.id}
          />
        );
      })}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  })).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  activeCard: PropTypes.number.isRequired,
  handleActiveCard: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};

export default FilmsList;
