import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {id, posterImage, name, onFilmCardClick, onFilmCardHover} = props;
  return (
    <article
      data-id={id}
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onFilmCardHover(id)}
      onClick={() => onFilmCardClick(id)}
    >
      <div className="small-movie-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  posterImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilmCardHover: PropTypes.func.isRequired
};

export default FilmCard;
