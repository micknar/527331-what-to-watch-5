import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FullscreenPlayer} from "./fullscreen-player";
import {noop, films} from "../../test-mocks";

configure({adapter: new Adapter()});

describe(`FullscreenPlayer callbacks should be called`, () => {
  it(`Click by Play button calls callback`, () => {
    const onPlayBtnClickHandler = jest.fn();

    const wrapper = shallow(
        <FullscreenPlayer
          films={films}
          promoFilm={films[0]}
          currentFilmId={1}
          isPlaying={false}
          isLoading={true}
          duration={40}
          progress={15}
          onPlayBtnClick={onPlayBtnClickHandler}
          onFullscreenBtnClick={noop}
          renderPlayer={noop}
        />
    );

    const node = wrapper.find(`.player__play`);
    node.simulate(`click`);
    expect(onPlayBtnClickHandler).toHaveBeenCalledTimes(1);
  });

  it(`Click by Play button calls callback`, () => {
    const onFullscreenBtnClickHandler = jest.fn();

    const wrapper = shallow(
        <FullscreenPlayer
          films={films}
          promoFilm={films[0]}
          currentFilmId={1}
          isPlaying={false}
          isLoading={true}
          duration={40}
          progress={15}
          onPlayBtnClick={noop}
          onFullscreenBtnClick={onFullscreenBtnClickHandler}
          renderPlayer={noop}
        />
    );

    const node = wrapper.find(`.player__full-screen`);
    node.simulate(`click`);
    expect(onFullscreenBtnClickHandler).toHaveBeenCalledTimes(1);
  });
});
