import React, {PureComponent} from "react";

const MARKS = [`1`, `2`, `3`, `4`, `5`];

class AddReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: ``,
      text: ``,
    };
  }

  render() {
    const currentRating = this.state.rating;

    return (
      <form
        action="#"
        className="add-review__form"
        onSubmit={(evt) => evt.preventDefault()}
      >
        <div className="rating">
          <div className="rating__stars">
            {MARKS.map((mark) => {
              return (
                <React.Fragment key={mark}>
                  <input className="rating__input" id={`star-${mark}`} type="radio" name="rating" value={mark}
                    checked={currentRating === mark}
                    onChange={(evt) => this.setState({rating: evt.target.value})}
                  />
                  <label className="rating__label" htmlFor={`star-${mark}`}>Rating {mark}</label>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={(evt) => this.setState({text: evt.target.value})}
          ></textarea>

          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddReviewForm;
