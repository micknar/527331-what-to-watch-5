import React from "react";
import PropTypes from "prop-types";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import UserBlock from "../user-block/user-block";
import FilmsList from "../films-list/films-list";
import PageFooter from "../page-footer/page-footer";

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
        <FilmsList
          films={films}
          onFilmCardClick={onFilmCardClick}
        />
      </section>

      <PageFooter />
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.array.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default MyList;
