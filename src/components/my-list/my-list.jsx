import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import UserBlock from "../user-block/user-block";
import FilmsList from "../films-list/films-list";
import PageFooter from "../page-footer/page-footer";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import {fetchFavoriteFilms} from "../../store/api-actions";

const FilmsListWrapped = withActiveCard(FilmsList);

const MyList = (props) => {
  const {favoriteFilms, onFilmCardClick, getFavoriteFilms} = props;

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
          onFilmCardClick={onFilmCardClick}
        />
      </section>

      <PageFooter />
    </div>
  );
};

MyList.propTypes = {
  favoriteFilms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
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
