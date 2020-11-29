import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {FilmPage} from "./film-page";
import {noop, films} from "../../test-mocks";

jest.mock(`../films-list/films-list`, () => `FilmsList`);
jest.mock(`../page-header-logo/page-header-logo`, () => `PageHeaderLogo`);
jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../page-footer/page-footer`, () => `PageFooter`);
jest.mock(`../film-page-tabs/film-page-tabs`, () => `FilmPageTabs`);
jest.mock(`../add-to-favorite-btn/add-to-favorite-btn`, () => `AddToFavoriteBtn`);
jest.mock(`../loading-page/loading-page`, () => `LoadingPage`);
jest.mock(`../not-found-page/not-found-page`, () => `NotFoundPage`);

describe(`Should FilmPage render correctly`, () => {
  it(`With loading success`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmPage
              films={films}
              onCardClick={noop}
              currentFilmId={1}
              currentFilm={films[0]}
              getFilm={noop}
              isFilmLoading={false}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When data is loading`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmPage
              films={films}
              onCardClick={noop}
              currentFilmId={1}
              currentFilm={films[0]}
              getFilm={noop}
              isFilmLoading={true}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When film id is wrong`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmPage
              films={films}
              onCardClick={noop}
              currentFilmId={99999999}
              currentFilm={films[0]}
              getFilm={noop}
              isFilmLoading={false}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
