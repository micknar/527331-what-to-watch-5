import React, {PureComponent} from "react";

const withUserReview = (Component) => {
  class WithUserReview extends PureComponent {
    constructor(props) {
      super(props);

      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);

      this.state = {
        rating: ``,
        text: ``,
      };
    }

    handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    handleTextChange(evt) {
      this.setState({
        comment: evt.target.value,
      });
    }

    handleFormSubmit(evt) {
      evt.preventDefault();
    }

    render() {
      const currentRating = this.state.rating;

      return (
        <Component {...this.props}
          currentRating={currentRating}
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
