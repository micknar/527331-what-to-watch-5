import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import FilmsList from "../films-list/films-list";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import UserBlock from "../user-block/user-block";
import PageFooter from "../page-footer/page-footer";
import FilmPageTabs from '../film-page-tabs/film-page-tabs';
import AddToFavoriteBtn from '../add-to-favorite-btn/add-to-favorite-btn';
import LoadingPage from "../loading-page/loading-page";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab";
import {FilmsCount, AppRoute} from "../../const";
import {fetchFilmById} from "../../store/api-actions";
import {setIsFilmLoading} from "../../store/action";

const FilmsListWrapped = withActiveCard(FilmsList);
const FilmPageTabsWrapped = withActiveTab(FilmPageTabs);

const FilmPage = (props) => {
  const {films, onFilmCardClick, currentFilmId, currentFilm, getFilm, isFilmLoading} = props;

  useEffect(() => {
    getFilm(currentFilmId);
  }, [currentFilmId]);

  const {id, name, posterImage, backgroundImage, backgroundColor, genre, released, isFavorite} = currentFilm;
  const similarFilms = films.filter((film) => film.genre === genre && film.id !== id).slice(0, FilmsCount.SIMILAR);

  if (isFilmLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <>
      <section className="movie-card movie-card--full" data-id={id} style={{backgroundColor}}>
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

                <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <FilmPageTabsWrapped film={currentFilm} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsListWrapped
            films={similarFilms}
            onFilmCardClick={onFilmCardClick}
          />
        </section>

        <PageFooter />
      </div>
    </>
  );
};

const mapStateToProps = ({APP_STATE}) => ({
  films: APP_STATE.films,
  currentFilm: APP_STATE.film,
  isFilmLoading: APP_STATE.isFilmLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getFilm(id) {
    dispatch(setIsFilmLoading(true));
    dispatch(fetchFilmById(id));
  }
});

FilmPage.propTypes = {
  currentFilmId: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
  currentFilm: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  getFilm: PropTypes.func.isRequired,
  isFilmLoading: PropTypes.bool.isRequired,
};

export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
