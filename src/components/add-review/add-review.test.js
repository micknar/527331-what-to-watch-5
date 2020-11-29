import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review";
import {films} from "../../test-mocks";

jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../page-header-logo/page-header-logo`, () => `PageHeaderLogo`);
jest.mock(`../breadcrumbs/breadcrumbs`, () => `Breadcrumbs`);
jest.mock(`../add-review-form/add-review-form`, () => `AddReviewForm`);

it(`Should AddReview render correctly`, () => {
  const tree = renderer
    .create(
        <AddReview
          films={films}
          currentFilmId={films[0].id}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
