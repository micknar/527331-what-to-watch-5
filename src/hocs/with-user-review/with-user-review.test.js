import React from "react";
import renderer from "react-test-renderer";
import withUserReview from "./with-user-review";
import childrenProp from "../../const/children-prop";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
};

MockComponent.propTypes = {
  children: childrenProp.isRequired,
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
