import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import UserBlock from "../user-block/user-block";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import AddReviewForm from "../add-review-form/add-review-form";
import withUserReview from "../../hocs/with-user-review/with-user-review";

const AddReviewFormWrapped = withUserReview(AddReviewForm);

const AddReview = (props) => {
  const {films, currentFilmId} = props;
  const currentFilm = films.find((film) => film.id === currentFilmId);
  const {backgroundImage, name, posterImage, backgroundColor} = currentFilm;

  return (
    <section className="movie-card movie-card--full" style={{backgroundColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <PageHeaderLogo />
          <Breadcrumbs film={currentFilm} />
          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewFormWrapped backgroundColor={backgroundColor} />
      </div>
    </section>
  );
};

const mapStateToProps = ({APP_STATE}) => ({
  films: APP_STATE.films,
});

AddReview.propTypes = {
  currentFilmId: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  })).isRequired,
};

export {AddReview};
export default connect(mapStateToProps)(AddReview);
