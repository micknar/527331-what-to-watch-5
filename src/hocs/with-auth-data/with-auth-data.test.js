import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withAuthData from "./with-auth-data";
import {noop} from "../../test-mocks";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const MockComponentWrapped = withAuthData(MockComponent);

it(`withAuthData is rendered correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        onCardClick={noop}
      >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

  expect(tree).toMatchSnapshot();
});
