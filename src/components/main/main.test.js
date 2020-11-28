import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Main} from "./main";
import {noop, films} from "../../test-mocks";

jest.mock(`../films-list/films-list`, () => `FilmsListWrapped`);
jest.mock(`../genres/genres`, () => `Genres`);
jest.mock(`../show-more-btn/show-more-btn`, () => `ShowMoreBtn`);
jest.mock(`../page-header-logo/page-header-logo`, () => `PageHeaderLogo`);
jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../page-footer/page-footer`, () => `PageFooter`);
jest.mock(`../add-to-favorite-btn/add-to-favorite-btn`, () => `AddToFavoriteBtn`);

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Main
            promoFilm={films[0]}
            filteredFilms={films}
            renderedFilmsCount={8}
            onCardClick={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
