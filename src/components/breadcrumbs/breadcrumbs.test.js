import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import Breadcrumbs from "./breadcrumbs";
import {films} from "../../test-mocks";

it(`Should Breadcrumbs render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Breadcrumbs
            film={films[0]}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
