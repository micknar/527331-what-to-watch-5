import React from "react";
import renderer from "react-test-renderer";
import {MyList} from "./my-list";
import {noop, films} from "../../test-mocks";

jest.mock(`../films-list/films-list`, () => `FilmsList`);
jest.mock(`../page-header-logo/page-header-logo`, () => `PageHeaderLogo`);
jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../page-footer/page-footer`, () => `PageFooter`);

it(`Should MyList render correctly`, () => {
  const tree = renderer
    .create(
        <MyList
          favoriteFilms={films}
          onCardClick={noop}
          getFavoriteFilms={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
