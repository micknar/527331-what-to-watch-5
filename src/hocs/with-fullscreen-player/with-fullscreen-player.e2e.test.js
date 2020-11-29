import React from "react";
import PropTypes from "prop-types";
import Adapter from "enzyme-adapter-react-16";
import {configure, mount} from "enzyme";
import withFullscreenPlayer from "./with-fullscreen-player";
import {films} from "../../test-mocks";

configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {children, renderPlayer} = props;

  return (
    <>
      {renderPlayer(films[0])}
      {children}
    </>
  );
};

MockComponent.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const MockComponentWrapped = withFullscreenPlayer(MockComponent);

describe(`Should`, () => {
  it(`isPlaying true`, () => {
    const wrapper = mount(
        <MockComponentWrapped
          currentFilmId={1}
        >
          <React.Fragment />
        </MockComponentWrapped>);

    expect(wrapper.state().isPlaying).toEqual(true);
  });

  it(`isLoading true`, () => {
    const wrapper = mount(
        <MockComponentWrapped
          currentFilmId={1}
        >
          <React.Fragment />
        </MockComponentWrapped>);

    expect(wrapper.state().isLoading).toEqual(true);
  });

  it(`duration 0`, () => {
    const wrapper = mount(
        <MockComponentWrapped
          currentFilmId={1}
        >
          <React.Fragment />
        </MockComponentWrapped>);

    expect(wrapper.state().duration).toEqual(0);
  });

  it(`progress 0`, () => {
    const wrapper = mount(
        <MockComponentWrapped
          currentFilmId={1}
        >
          <React.Fragment />
        </MockComponentWrapped>);

    expect(wrapper.state().progress).toEqual(0);
  });
});
