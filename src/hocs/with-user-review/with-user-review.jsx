import React, {PureComponent} from "react";

const withUserReview = (Component) => {
  class WithUserReview extends PureComponent {
    constructor(props) {
      super(props);

      this._onRatingChangeHandler = this._onRatingChangeHandler.bind(this);
      this._onCommentChangeHandler = this._onCommentChangeHandler.bind(this);
      this._onFormSubmitHandler = this._onFormSubmitHandler.bind(this);

      this.state = {
        rating: 5,
        comment: ``,
        isValid: false,
      };
    }

    _onRatingChangeHandler(evt) {
      this.setState({
        rating: +evt.target.value,
      });
    }

    _onCommentChangeHandler(evt) {
      this.setState({
        comment: evt.target.value,
        isValid: evt.target.value.length >= 50 && evt.target.value.length <= 400,
      });
    }

    _onFormSubmitHandler(evt) {
      evt.preventDefault();
    }

    render() {
      const {rating, comment, isValid} = this.state;
      return (
        <Component {...this.props}
          rating={rating}
          comment={comment}
          isValid={isValid}
          onRatingChange={this._onRatingChangeHandler}
          onCommentChange={this._onCommentChangeHandler}
          onFormSubmit={this._onFormSubmitHandler}
        />
      );
    }
  }

  return WithUserReview;
};

export default withUserReview;
