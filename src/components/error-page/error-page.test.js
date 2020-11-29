import React from "react";
import renderer from "react-test-renderer";
import ErrorPage from "./error-page";

it(`Should ErrorPage render correctly`, () => {
  const tree = renderer
    .create(
        <ErrorPage />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
