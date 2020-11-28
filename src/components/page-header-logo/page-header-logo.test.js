import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import PageHeaderLogo from "./page-header-logo";

it(`Should PageHeaderLogo render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PageHeaderLogo />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
