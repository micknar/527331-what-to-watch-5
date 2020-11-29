import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AddReviewForm} from "./add-review-form";
import {noop} from "../../test-mocks";

configure({adapter: new Adapter()});

describe(`AddReviewForm callbacks should be called`, () => {
  it(`Rating changes calls callback`, () => {
    const onRatingChangeHandler = jest.fn();

    const wrapper = shallow(
        <AddReviewForm
          filmId={1}
          rating={3}
          comment={``}
          isValid={true}
          backgroundColor={`#556271`}
          onRatingChange={onRatingChangeHandler}
          onCommentChange={noop}
          onFormSubmit={noop}
          isReviewSubmitting={false}
          isReviewSubmittingError={false}
          sendReview={noop}
        />
    );

    const node = wrapper.find(`.rating__input`).at(0);
    node.simulate(`change`, {target: {checked: true}});

    expect(onRatingChangeHandler).toHaveBeenCalledTimes(1);
  });

  it(`Textarea changes calls callback`, () => {
    const onCommentChangeHandler = jest.fn();

    const wrapper = shallow(
        <AddReviewForm
          filmId={1}
          rating={3}
          comment={``}
          isValid={true}
          backgroundColor={`#556271`}
          onRatingChange={noop}
          onCommentChange={onCommentChangeHandler}
          onFormSubmit={noop}
          isReviewSubmitting={false}
          isReviewSubmittingError={false}
          sendReview={noop}
        />
    );

    const node = wrapper.find(`.add-review__textarea`);
    node.simulate(`change`);
    expect(onCommentChangeHandler).toHaveBeenCalledTimes(1);
  });

  it(`Click by disabled Post button doesn't call callback`, () => {
    const onFormSubmitHandler = jest.fn();

    const wrapper = shallow(
        <AddReviewForm
          filmId={1}
          rating={3}
          comment={`Lorem ipsum dolor sit amet, consectetur adisddsgpi`}
          isValid={true}
          backgroundColor={`#556271`}
          onRatingChange={noop}
          onCommentChange={noop}
          onFormSubmit={onFormSubmitHandler}
          isReviewSubmitting={false}
          isReviewSubmittingError={false}
          sendReview={noop}
        />
    );

    wrapper.find(`.add-review__btn`).simulate(`click`, {preventDefault() {}});
    expect(onFormSubmitHandler).toHaveBeenCalledTimes(0);
  });
});
