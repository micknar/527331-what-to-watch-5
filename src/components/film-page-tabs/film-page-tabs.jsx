import React from "react";
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageReviews from '../film-page-reviews/film-page-reviews';
import {FilmPageNav} from "../../const";

const FilmPageTabs = (props) => {
  const {film, activeTab, handleActiveTab} = props;
  const {id, description, rating, runTime, director, starring, genre, released, ratingMark} = film;

  const getFilmInfo = () => {
    switch (activeTab) {
      case FilmPageNav.OVERVIEW:
        return (
          <FilmPageOverview
            description={description}
            rating={rating}
            director={director}
            starring={starring}
            ratingMark={ratingMark}
          />
        );
      case FilmPageNav.DETAILS:
        return (
          <FilmPageDetails
            runTime={runTime}
            genre={genre}
            director={director}
            starring={starring}
            released={released}
          />
        );
      case FilmPageNav.REVIEWS:
        return (
          <FilmPageReviews
            filmId={id}
          />
        );
    }

    return <Redirect to="/" />;
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(FilmPageNav).map((value, i) => {
            return (
              <li
                key={i}
                className={value === activeTab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}
              >
                <a
                  href="#"
                  className="movie-nav__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    handleActiveTab(value);
                  }}>{value}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      {getFilmInfo()}
    </div>
  );
};

FilmPageTabs.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingMark: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,

    runTime: PropTypes.shape({
      hours: PropTypes.number.isRequired,
      minutes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  activeTab: PropTypes.string.isRequired,
  handleActiveTab: PropTypes.func.isRequired,
};

export default FilmPageTabs;
