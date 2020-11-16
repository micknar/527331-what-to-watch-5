import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageReviews from '../film-page-reviews/film-page-reviews';

const FilmPageNav = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

class FilmPageTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmTab: FilmPageNav.OVERVIEW,
    };
  }

  render() {
    const {film} = this.props;
    const {description, rating, runTime, director, starring, genre, released, reviews} = film;

    const getFilmInfo = () => {
      switch (this.state.filmTab) {
        case FilmPageNav.OVERVIEW:
          return (
            <FilmPageOverview
              description={description}
              rating={rating}
              director={director}
              starring={starring}
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
              reviews={reviews}
            />
          );
      }

      return <Redirect to="/" />;
    };

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className="movie-nav__item movie-nav__item--active">
              <a href="#" className="movie-nav__link"
                onClick={() => {
                  this.setState({
                    filmTab: FilmPageNav.OVERVIEW,
                  });
                }}>Overview</a>
            </li>

            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link"
                onClick={() => {
                  this.setState({
                    filmTab: FilmPageNav.DETAILS,
                  });
                }}>Details</a>
            </li>

            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link"
                onClick={() => {
                  this.setState({
                    filmTab: FilmPageNav.REVIEWS,
                  });
                }}>Reviews</a>
            </li>
          </ul>
        </nav>

        {getFilmInfo()}
      </div>
    );
  }
}

FilmPageTabs.propTypes = {
  film: PropTypes.shape({
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,

    runTime: PropTypes.shape({
      hours: PropTypes.number.isRequired,
      minutes: PropTypes.number.isRequired,
    }).isRequired,

    reviews: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,

      rating: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,

      date: PropTypes.shape({
        day: PropTypes.number.isRequired,
        month: PropTypes.string.isRequired,
        monthNumber: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired,
      }),
    })).isRequired,
  }).isRequired,
};

export default FilmPageTabs;
