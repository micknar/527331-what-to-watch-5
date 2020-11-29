import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {FullscreenPlayer} from "./fullscreen-player";
import {noop, films} from "../../test-mocks";

describe(`Should FullscreenPlayer render correctly`, () => {
  it(`When video is loading`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FullscreenPlayer
              films={films}
              promoFilm={films[0]}
              currentFilmId={1}
              isPlaying={false}
              isLoading={true}
              duration={40}
              progress={15}
              onPlayBtnClick={noop}
              onFullscreenBtnClick={noop}
              renderPlayer={noop}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When video is playing`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FullscreenPlayer
              films={films}
              promoFilm={films[0]}
              currentFilmId={1}
              isPlaying={true}
              isLoading={false}
              duration={40}
              progress={15}
              onPlayBtnClick={noop}
              onFullscreenBtnClick={noop}
              renderPlayer={noop}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
