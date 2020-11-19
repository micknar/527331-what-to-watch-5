import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import FilmsList from "../films-list/films-list";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import UserBlock from "../user-block/user-block";
import PageFooter from "../page-footer/page-footer";
import FilmPageTabs from '../film-page-tabs/film-page-tabs';

const FilmPage = (props) => {
  const {films, onFilmCardClick, currentFilmId} = props;
  const currentFilm = films.find((film) => film.id === currentFilmId);
  const {id, name, posterImage, backgroundImage, genre, released} = currentFilm;
  const similarFilms = films.filter((film) => film.genre === genre && film.id !== id).slice(0, 4);

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
                <Link to={`/player/${id}/`} className="btn btn--play movie-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <Link to="/mylist" className="btn btn--list movie-card__button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </Link>

                <Link to={`/films/${id}/review`} href="add-review.html" className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <FilmPageTabs film={currentFilm}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList
            films={similarFilms}
            onFilmCardClick={onFilmCardClick}
          />
        </section>

        <PageFooter />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  films: state.films,
});

FilmPage.propTypes = {
  currentFilmId: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  })).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export {FilmPage};
export default connect(mapStateToProps)(FilmPage);
