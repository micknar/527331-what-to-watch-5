import React from "react";
import PropTypes from "prop-types";
import {getRatingMark} from "../../utils/utils.js";

const FilmPageOverview = (props) => {
  const {description, rating, director, starring} = props;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingMark(+rating)}</span>
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring} and other</strong></p>
      </div>
    </>
  );
};

FilmPageOverview.propTypes = {
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired,
};

export default FilmPageOverview;
