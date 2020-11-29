import React from "react";
import renderer from "react-test-renderer";
import FilmPageOverview from "./film-page-overview";
import {films} from "../../test-mocks";

it(`Should FilmPageOverview render correctly`, () => {
  const tree = renderer
    .create(
        <FilmPageOverview
          description={films[0].description}
          rating={films[0].rating}
          director={films[0].director}
          starring={films[0].starring}
          ratingMark={films[0].ratingMark}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
