import React, {PureComponent} from "react";

const withUserReview = (Component) => {
  class WithUserReview extends PureComponent {
    constructor(props) {
      super(props);

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);

      this.state = {
        rating: 5,
        comment: ``,
        isValid: false,
      };
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: +evt.target.value,
      });
    }

    _handleTextChange(evt) {
      this.setState({
        comment: evt.target.value,
        isValid: evt.target.value.length >= 50 && evt.target.value.length <= 400,
      });
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
    }

    render() {
      const {rating, comment, isValid} = this.state;
      return (
        <Component {...this.props}
          rating={rating}
          comment={comment}
          isValid={isValid}
          handleRatingChange={this._handleRatingChange}
          handleTextChange={this._handleTextChange}
          handleFormSubmit={this._handleFormSubmit}
        />
      );
    }
  }

  return WithUserReview;
};

export default withUserReview;
