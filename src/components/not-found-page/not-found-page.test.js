import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import NotFoundPage from "./not-found-page";

it(`Should NotFoundPage render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
