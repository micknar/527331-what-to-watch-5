import React from "react";
import renderer from "react-test-renderer";
import FilmPageTabs from "./film-page-tabs";
import {noop, films} from "../../test-mocks";

const activeTab = `Reviews`;

jest.mock(`../film-page-overview/film-page-overview`, () => `FilmPageOverview`);
jest.mock(`../film-page-details/film-page-details`, () => `FilmPageDetails`);
jest.mock(`../film-page-reviews/film-page-reviews`, () => `FilmPageReviews`);

it(`Should FilmPageTabs render correctly`, () => {
  const tree = renderer
    .create(
        <FilmPageTabs
          film={films[0]}
          activeTab={activeTab}
          onActiveTabClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
