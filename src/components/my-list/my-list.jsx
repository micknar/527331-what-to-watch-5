import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import UserBlock from "../user-block/user-block";
import FilmsList from "../films-list/films-list";
import PageFooter from "../page-footer/page-footer";
import withActiveCard from "../../hocs/with-active-card/with-active-card";

const FilmsListWrapped = withActiveCard(FilmsList);

const MyList = (props) => {
  const {films, onFilmCardClick} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <PageHeaderLogo />

        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <FilmsListWrapped
          films={films}
          onFilmCardClick={onFilmCardClick}
        />
      </section>

      <PageFooter />
    </div>
  );
};

const mapStateToProps = ({APP_STATE}) => ({
  films: APP_STATE.films,
});

MyList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export {MyList};
export default connect(mapStateToProps)(MyList);
