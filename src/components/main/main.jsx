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
import AddToFavoriteBtn from '../add-to-favorite-btn/add-to-favorite-btn';
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import {getFilteredFilms} from "../../store/reducers/app-state/selectors";
import {AppRoute} from "../../const";

const FilmsListWrapped = withActiveCard(FilmsList);

const Main = (props) => {
  const {promoFilm, filteredFilms, renderedFilmsCount, onFilmCardClick} = props;
  const {posterImage, name, genre, backgroundImage, backgroundColor, released, id, isFavorite} = promoFilm;

  return (
    <>
      <section className="movie-card" style={{backgroundColor}}>
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
                <Link to={AppRoute.PLAYER + id} className="btn btn--play movie-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <AddToFavoriteBtn
                  id={id}
                  isFavorite={isFavorite}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres />

          <FilmsListWrapped
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

const mapStateToProps = ({APP_STATE}) => ({
  filteredFilms: getFilteredFilms({APP_STATE}),
  renderedFilmsCount: APP_STATE.renderedFilmsCount,
  promoFilm: APP_STATE.promoFilm,
});

Main.propTypes = {
  promoFilm: PropTypes.shape({
    id: PropTypes.number.isRequired,
    posterImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,

  filteredFilms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,

  renderedFilmsCount: PropTypes.number.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export {Main};
export default connect(mapStateToProps)(Main);
