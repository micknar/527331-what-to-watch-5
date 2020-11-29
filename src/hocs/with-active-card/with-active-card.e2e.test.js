import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveCard from "./with-active-card";
import {films, noop} from "../../test-mocks";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveCard(MockComponent);

describe(`Should`, () => {
  it(`activeCard -1`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          films={films}
          onCardClick={noop}
        />);

    expect(wrapper.state().activeCard).toEqual(-1);
  });

  it(`hoverTimeout null`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          films={films}
          onCardClick={noop}
        />);

    expect(wrapper.state().hoverTimeout).toEqual(null);
  });
});
