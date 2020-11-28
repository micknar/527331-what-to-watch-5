import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withFullscreenPlayer from "./with-fullscreen-player";
import {films} from "../../test-mocks";

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

it(`withFullscreenPlayer is rendered correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        currentFilmId={1}
      >
        <React.Fragment />
      </MockComponentWrapped>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
