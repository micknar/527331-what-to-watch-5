import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import FilmsList from "../films-list/films-list";
import Genres from "../genres/genres";
import ShowMoreBtn from "../show-more-btn/show-more-btn";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import UserBlock from "../user-block/user-block";
import PageFooter from "../page-footer/page-footer";

const Main = (props) => {
  const {promoFilm, filteredFilms, renderedFilmsCount, onFilmCardClick} = props;
  const {posterImage, name, genre, backgroundImage, released, id} = promoFilm;

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <PageHeaderLogo />
          <UserBlock />
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres />

          <FilmsList
            films={filteredFilms.slice(0, renderedFilmsCount)}
            onFilmCardClick={onFilmCardClick}
          />

          {renderedFilmsCount < filteredFilms.length && <ShowMoreBtn />}
        </section>

        <PageFooter />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  filteredFilms: state.filteredFilms,
  renderedFilmsCount: state.renderedFilmsCount,
});

Main.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  promoFilm: PropTypes.shape({
    id: PropTypes.number.isRequired,
    posterImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }).isRequired,
  filteredFilms: PropTypes.array.isRequired,
  renderedFilmsCount: PropTypes.number.isRequired,
};

export {Main};
export default connect(mapStateToProps)(Main);
