import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import FilmCard from "./film-card";
import {noop, films} from "../../test-mocks";

jest.mock(`../video-preview/video-preview`, () => `VideoPreview`);

describe(`Should FilmCard render correctly`, () => {
  it(`When mouse is over the card`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmCard
              id={films[0].id}
              name={films[0].name}
              previewImage={films[0].previewImage}
              previewVideoLink={films[0].previewVideoLink}
              onCardClick={noop}
              onCardMouseOver={noop}
              onCardMouseOut={noop}
              isActive={true}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When mouse is not over the card`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmCard
              id={films[0].id}
              name={films[0].name}
              previewImage={films[0].previewImage}
              previewVideoLink={films[0].previewVideoLink}
              onCardClick={noop}
              onCardMouseOver={noop}
              onCardMouseOut={noop}
              isActive={false}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
