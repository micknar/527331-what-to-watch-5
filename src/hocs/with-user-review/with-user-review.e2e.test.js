import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";
import withUserReview from "./with-user-review";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserReview(MockComponent);

describe(`Should`, () => {
  it(`rating`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          filmId={1}
          backgroundColor={`#4aa2e5`}
        />);

    expect(wrapper.state().rating).toEqual(5);
  });

  it(`comment`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          filmId={1}
          backgroundColor={`#4aa2e5`}
        />);

    expect(wrapper.state().comment).toEqual(``);
  });

  it(`isValid false`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          filmId={1}
          backgroundColor={`#4aa2e5`}
        />);

    expect(wrapper.state().isValid).toEqual(false);
  });
});
