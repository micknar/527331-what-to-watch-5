import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Genres} from "./genres";
import {noop, films} from "../../test-mocks";

it(`Should Genres render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Genres
            activeGenre={`Dramas`}
            films={films}
            onGenreClick={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
