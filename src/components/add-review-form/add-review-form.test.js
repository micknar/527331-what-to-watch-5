import React from "react";
import renderer from "react-test-renderer";
import {AddReviewForm} from "./add-review-form";
import {noop} from "../../test-mocks";

describe(`Should AddReviewForm render correctly`, () => {
  it(`With valid review`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            filmId={1}
            rating={3}
            comment={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            isValid={true}
            backgroundColor={`#556271`}
            onRatingChange={noop}
            onCommentChange={noop}
            onFormSubmit={noop}
            isReviewSubmitting={false}
            isReviewSubmittingError={false}
            sendReview={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With invalid review`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            filmId={1}
            rating={3}
            comment={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            isValid={false}
            backgroundColor={`#556271`}
            onRatingChange={noop}
            onCommentChange={noop}
            onFormSubmit={noop}
            isReviewSubmitting={false}
            isReviewSubmittingError={false}
            sendReview={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When review is submitting`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            filmId={1}
            rating={3}
            comment={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            isValid={true}
            backgroundColor={`#556271`}
            onRatingChange={noop}
            onCommentChange={noop}
            onFormSubmit={noop}
            isReviewSubmitting={true}
            isReviewSubmittingError={false}
            sendReview={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With review submitting error`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            filmId={1}
            rating={3}
            comment={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            isValid={true}
            backgroundColor={`#556271`}
            onRatingChange={noop}
            onCommentChange={noop}
            onFormSubmit={noop}
            isReviewSubmitting={false}
            isReviewSubmittingError={true}
            sendReview={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
