import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {AddToFavoriteBtn} from "./add-to-favorite-btn";
import {noop} from "../../test-mocks";
import {AuthorizationStatus} from "../../const/const";

describe(`Should AddToFavoriteBtn render correctly`, () => {
  it(`When authorized user adds to favorites`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <AddToFavoriteBtn
              id={1}
              isFavorite={false}
              authorizationStatus={AuthorizationStatus.AUTH}
              onAddToFavoriteBtnClick={noop}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When authorized user remove from favorites`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <AddToFavoriteBtn
              id={1}
              isFavorite={true}
              authorizationStatus={AuthorizationStatus.AUTH}
              onAddToFavoriteBtnClick={noop}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When guest clicks on 'MyList' button`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <AddToFavoriteBtn
              id={1}
              isFavorite={false}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              onAddToFavoriteBtnClick={noop}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
