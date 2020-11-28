import React from "react";
import renderer from "react-test-renderer";
import LoadingPage from "./loading-page";

it(`Should LoadingPage render correctly`, () => {
  const tree = renderer
    .create(
        <LoadingPage />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
