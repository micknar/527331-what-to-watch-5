import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';
import FilmsList from "../films-list/films-list";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import UserBlock from "../user-block/user-block";
import FilmPageOverview from "../film-page-overview/film-page-overview";
import FilmPageDetails from "../film-page-details/film-page-details";
import FilmPageReviews from "../film-page-reviews/film-page-reviews";
import PageFooter from "../page-footer/page-footer";

const FilmPageNav = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

class FilmPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmTab: FilmPageNav.OVERVIEW,
    };
  }

  render() {
    const {films, onFilmCardClick} = this.props;
    const {id, name, posterImage, backgroundImage, description, rating, runTime, director, starring, genre, released, reviews} = films[0];

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
      <>
        <section className="movie-card movie-card--full" data-id={id}>
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt={name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <PageHeaderLogo />
              <UserBlock />
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={posterImage} alt={name} width="218" height="327" />
              </div>

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
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmsList
              films={films.slice(0, 4)}
              onFilmCardClick={onFilmCardClick}
            />
          </section>

          <PageFooter />
        </div>
      </>
    );
  }
}

FilmPage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,

    runTime: PropTypes.shape({
      hours: PropTypes.number.isRequired,
      minutes: PropTypes.number.isRequired,
    }),

    reviews: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
      rating: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.shape({
        day: PropTypes.number.isRequired,
        month: PropTypes.string.isRequired,
        monthNumber: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired,
      }),
    }))
  })),
  onFilmCardClick: PropTypes.func.isRequired,
};

export default FilmPage;
