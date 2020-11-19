import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const FilmCard = (props) => {
  const {id, name, onFilmCardClick, onFilmCardHover, onFilmCardLeave, children} = props;
  return (
    <article
      data-id={id}
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onFilmCardHover(id)}
      onMouseOut={() => onFilmCardLeave()}
      onClick={() => onFilmCardClick(id)}
    >
      {children}

      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilmCardHover: PropTypes.func.isRequired,
  onFilmCardLeave: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FilmCard;
