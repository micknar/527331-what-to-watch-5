import React, {useEffect} from "react";
import PropTypes from "prop-types";
import filmProp from "../../const/film.prop";
import {connect} from "react-redux";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import UserBlock from "../user-block/user-block";
import FilmsList from "../films-list/films-list";
import PageFooter from "../page-footer/page-footer";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import {fetchFavoriteFilms} from "../../store/api-actions";

const FilmsListWrapped = withActiveCard(FilmsList);

const MyList = (props) => {
  const {favoriteFilms, onCardClick, getFavoriteFilms} = props;

  useEffect(() => {
    getFavoriteFilms();
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <PageHeaderLogo />

        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <FilmsListWrapped
          films={favoriteFilms}
          onCardClick={onCardClick}
        />
      </section>

      <PageFooter />
    </div>
  );
};

MyList.propTypes = {
  favoriteFilms: PropTypes.arrayOf(filmProp).isRequired,
  onCardClick: PropTypes.func.isRequired,
  getFavoriteFilms: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  favoriteFilms: USER.favoriteFilms,
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteFilms() {
    dispatch(fetchFavoriteFilms());
  }
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
