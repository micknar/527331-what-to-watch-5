import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveCard from "./with-active-card";
import {films, noop} from "../../test-mocks";

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

const MockComponentWrapped = withActiveCard(MockComponent);

it(`withActiveCard is rendered correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        films={films}
        onCardClick={noop}
      >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

  expect(tree).toMatchSnapshot();
});
