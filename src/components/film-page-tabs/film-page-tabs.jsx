import React from "react";
import PropTypes from "prop-types";
import filmProp from "../../const/film.prop";
import {Redirect} from "react-router-dom";
import FilmPageOverview from "../film-page-overview/film-page-overview";
import FilmPageDetails from "../film-page-details/film-page-details";
import FilmPageReviews from "../film-page-reviews/film-page-reviews";
import {FilmPageNav, AppRoute} from "../../const/const";

const FilmPageTabs = (props) => {
  const {film, activeTab, onActiveTabClick} = props;
  const {id, description, rating, runTime, director, starring, genre, released, ratingMark, scoresCount, backgroundColor} = film;

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
            scoresCount={scoresCount}
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
            backgroundColor={backgroundColor}
          />
        );
    }

    return <Redirect to={AppRoute.ROOT} />;
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
                    onActiveTabClick(value);
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
  film: filmProp.isRequired,
  activeTab: PropTypes.string.isRequired,
  onActiveTabClick: PropTypes.func.isRequired,
};

export default FilmPageTabs;
