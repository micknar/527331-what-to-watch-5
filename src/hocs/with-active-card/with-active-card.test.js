import React from "react";
import renderer from "react-test-renderer";
import withActiveCard from "./with-active-card";
import {films, noop} from "../../test-mocks";
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
