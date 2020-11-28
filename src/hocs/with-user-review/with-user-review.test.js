import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withUserReview from "./with-user-review";

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

const MockComponentWrapped = withUserReview(MockComponent);

it(`withUserReview is rendered correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        filmId={1}
        backgroundColor={`#4aa2e5`}
      >
        <React.Fragment />
      </MockComponentWrapped>
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
