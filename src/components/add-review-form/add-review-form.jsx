import React from "react";
import PropTypes from "prop-types";
import {shadeColor} from "../../utils";

const MARKS = [`1`, `2`, `3`, `4`, `5`];

const AddReviewForm = (props) => {
  const {currentRating, handleRatingChange, handleTextChange, handleFormSubmit, backgroundColor} = props;
  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={handleFormSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {MARKS.map((mark) => {
            return (
              <React.Fragment key={mark}>
                <input
                  className="rating__input"
                  id={`star-${mark}`}
                  type="radio"
                  name="rating"
                  value={mark}
                  checked={currentRating === mark}
                  onChange={handleRatingChange}
                />
                <label className="rating__label" htmlFor={`star-${mark}`}>Rating {mark}</label>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="add-review__text" style={{backgroundColor: shadeColor(backgroundColor, 20)}}>
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleTextChange}
        ></textarea>

        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  currentRating: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

export default AddReviewForm;
