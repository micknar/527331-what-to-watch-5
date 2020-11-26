import React, {PureComponent} from "react";

const withUserReview = (Component) => {
  class WithUserReview extends PureComponent {
    constructor(props) {
      super(props);

      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);

      this.state = {
        rating: 5,
        comment: ``,
        isValid: false,
      };
    }

    handleRatingChange(evt) {
      this.setState({
        rating: +evt.target.value,
      });
    }

    handleTextChange(evt) {
      this.setState({
        comment: evt.target.value,
        isValid: evt.target.value.length >= 50 && evt.target.value.length <= 400,
      });
    }

    handleFormSubmit(evt) {
      evt.preventDefault();
    }

    render() {
      const {rating, comment, isValid} = this.state;
      return (
        <Component {...this.props}
          rating={rating}
          comment={comment}
          isValid={isValid}
          handleRatingChange={this.handleRatingChange}
          handleTextChange={this.handleTextChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      );
    }
  }

  return WithUserReview;
};

export default withUserReview;
