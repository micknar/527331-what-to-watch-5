import React from "react";
import renderer from "react-test-renderer";
import FilmPageOverview from "./film-page-overview";
import {films} from "../../test-mocks";

const {description, rating, ratingMark, director, starring} = films[0];

it(`Should FilmPageOverview render correctly`, () => {
  const tree = renderer
    .create(
        <FilmPageOverview
          description={description}
          rating={rating}
          director={director}
          starring={starring}
          ratingMark={ratingMark}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
