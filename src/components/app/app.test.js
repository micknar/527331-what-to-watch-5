import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

jest.mock(`../main/main`, () => `Main`);
jest.mock(`../sign-in/sign-in`, () => `SignIn`);
jest.mock(`../my-list/my-list`, () => `MyList`);
jest.mock(`../film-page/film-page`, () => `FilmPage`);
jest.mock(`../add-review/add-review`, () => `AddReview`);
jest.mock(`../fullscreen-player/fullscreen-player`, () => `FullscreenPlayer`);
jest.mock(`../private-route/private-route`, () => `PrivateRoute`);
jest.mock(`../loading-page/loading-page`, () => `LoadingPage`);
jest.mock(`../error-page/error-page`, () => `ErrorPage`);
jest.mock(`../not-found-page/not-found-page`, () => `NotFoundPage`);

describe(`Should App render correctly`, () => {
  it(`With loading success`, () => {
    const tree = renderer
      .create(
          <App
            isFilmsLoading={false}
            isPromoLoading={false}
            isLoadingError={false}
            isCheckingAuth={false}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With checking authorization`, () => {
    const tree = renderer
      .create(
          <App
            isFilmsLoading={false}
            isPromoLoading={false}
            isLoadingError={false}
            isCheckingAuth={true}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When data loading`, () => {
    const tree = renderer
      .create(
          <App
            isFilmsLoading={true}
            isPromoLoading={true}
            isLoadingError={false}
            isCheckingAuth={false}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With loading error`, () => {
    const tree = renderer
      .create(
          <App
            isFilmsLoading={false}
            isPromoLoading={false}
            isLoadingError={true}
            isCheckingAuth={false}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
