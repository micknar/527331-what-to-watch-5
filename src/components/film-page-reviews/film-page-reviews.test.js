import React from "react";
import renderer from "react-test-renderer";
import {FilmPageReviews} from "./film-page-reviews";
import {noop, comments} from "../../test-mocks";

it(`Should FilmPageReviews render correctly`, () => {
  const tree = renderer
    .create(
        <FilmPageReviews
          comments={comments}
          filmId={1}
          loadComments={noop}
          backgroundColor={`#4aa2e5`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
