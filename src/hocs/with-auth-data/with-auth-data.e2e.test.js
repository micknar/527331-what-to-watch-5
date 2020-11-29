import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withAuthData from "./with-auth-data";
import {noop} from "../../test-mocks";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withAuthData(MockComponent);

describe(`Should`, () => {
  it(`empty email`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          onCardClick={noop}
        />);

    expect(wrapper.state().email).toEqual(``);
  });

  it(`empty password`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          onCardClick={noop}
        />);

    expect(wrapper.state().password).toEqual(``);
  });

  it(`isValidEmail true`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          onCardClick={noop}
        />);

    expect(wrapper.state().isValidEmail).toEqual(true);
  });

  it(`isValidPassword true`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          onCardClick={noop}
        />);

    expect(wrapper.state().isValidPassword).toEqual(true);
  });
});
