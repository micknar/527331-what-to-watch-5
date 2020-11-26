import React from "react";
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';
import {connect} from "react-redux";
import {submitReview} from "../../store/api-actions";
import {setIsReviewSubmitting} from "../../store/action";
import {shadeColor} from "../../utils";
import {RATING_MARKS} from "../../const";

const AddReviewForm = (props) => {
  const {
    filmId,
    rating,
    comment,
    isValid,
    backgroundColor,
    handleRatingChange,
    handleTextChange,
    handleFormSubmit,
    isReviewSubmitting,
    isReviewSubmittingError,
    onPostBtnClick
  } = props;

  const handlePostBtnClick = (evt) => {
    evt.preventDefault();
    onPostBtnClick(filmId, {rating, comment});
  };

  const checkSubmittingStatus = () => {
    if (isReviewSubmitting) {
      return (
        <div style={{display: `flex`, justifyContent: `center`, marginTop: `20px`}}>
          <ReactLoading type={`bars`} color={`#252525`} height={`10%`} width={`10%`} />
        </div>
      );
    } else if (isReviewSubmittingError) {
      return (
        <p style={{color: `#a8421e`}}>Something went wrong. Please, try again later. </p>
      );
    } else {
      return ``;
    }
  };

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={handleFormSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {RATING_MARKS.map((mark) => {
            return (
              <React.Fragment key={mark}>
                <input
                  className="rating__input"
                  id={`star-${mark}`}
                  type="radio"
                  name="rating"
                  value={mark}
                  checked={rating === mark}
                  onChange={handleRatingChange}
                  disabled={isReviewSubmitting}
                />
                <label className="rating__label" htmlFor={`star-${mark}`}>Rating {mark}</label>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="add-review__text" style={{backgroundColor: shadeColor(backgroundColor, 30)}}>
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleTextChange}
          minLength="50"
          maxLength="400"
          disabled={isReviewSubmitting}
        ></textarea>

        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={!isValid}
            onClick={handlePostBtnClick}
          >Post</button>
        </div>
      </div>
      {checkSubmittingStatus()}
    </form>
  );
};

AddReviewForm.propTypes = {
  filmId: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  onPostBtnClick: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  isReviewSubmitting: PropTypes.bool.isRequired,
  isReviewSubmittingError: PropTypes.bool.isRequired,
};

const mapStateToProps = ({APP_STATE}) => ({
  isReviewSubmitting: APP_STATE.isReviewSubmitting,
  isReviewSubmittingError: APP_STATE.isReviewSubmittingError,
});

const mapDispatchToProps = (dispatch) => ({
  onPostBtnClick(filmId, {rating, comment}) {
    dispatch(setIsReviewSubmitting(true));
    dispatch(submitReview(filmId, {rating, comment}));
  }
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
