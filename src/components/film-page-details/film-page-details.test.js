import React from "react";
import renderer from "react-test-renderer";
import FilmPageDetails from "./film-page-details";
import {films} from "../../test-mocks";

const {runTime, genre, released, director, starring} = films[0];

it(`Should FilmPageDetails render correctly`, () => {
  const tree = renderer
    .create(
        <FilmPageDetails
          runTime={runTime}
          genre={genre}
          released={released}
          director={director}
          starring={starring}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
