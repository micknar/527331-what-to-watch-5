import React from "react";
import renderer from "react-test-renderer";
import withAuthData from "./with-auth-data";
import {noop} from "../../test-mocks";
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
