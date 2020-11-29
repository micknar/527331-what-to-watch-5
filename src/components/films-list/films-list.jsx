import React from "react";
import PropTypes from "prop-types";
import filmProp from "../../const/film.prop";
import FilmCard from "../film-card/film-card";

const FilmsList = (props) => {
  const {films, onCardClick, activeCard, onCardMouseOver, onCardMouseOut} = props;

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
            onCardMouseOver={onCardMouseOver}
            onCardMouseOut={onCardMouseOut}
            onCardClick={onCardClick}
            isActive={activeCard === film.id}
          />
        );
      })}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  onCardClick: PropTypes.func.isRequired,
  activeCard: PropTypes.number.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
  onCardMouseOut: PropTypes.func.isRequired,
};

export default FilmsList;
