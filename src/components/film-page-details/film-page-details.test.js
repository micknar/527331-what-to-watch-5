import React from "react";
import renderer from "react-test-renderer";
import FilmPageDetails from "./film-page-details";
import {films} from "../../test-mocks";

it(`Should FilmPageDetails render correctly`, () => {
  const tree = renderer
    .create(
        <FilmPageDetails
          runTime={films[0].runTime}
          genre={films[0].genre}
          released={films[0].released}
          director={films[0].director}
          starring={films[0].starring}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
