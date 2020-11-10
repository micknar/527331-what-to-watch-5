import React from "react";
import PropTypes from "prop-types";
import UserBlock from "../user-block/user-block";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import AddReviewForm from "../add-review-form/add-review-form";

const AddReview = (props) => {
  const {films} = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={films[0].backgroundImage} alt={films[0].name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <PageHeaderLogo />
          <Breadcrumbs films={films}/>
          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={films[0].posterImage} alt={films[0].name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>
    </section>
  );
};

AddReview.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
  })).isRequired,
};

export default AddReview;
