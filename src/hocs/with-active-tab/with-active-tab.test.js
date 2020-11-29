import React from "react";
import renderer from "react-test-renderer";
import withActiveTab from "./with-active-tab";
import {films} from "../../test-mocks";
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

const MockComponentWrapped = withActiveTab(MockComponent);

it(`withActiveTab is rendered correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        film={films[0]}
      >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

  expect(tree).toMatchSnapshot();
});
