import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Genres} from "./genres";
import {films} from "../../test-mocks";

configure({adapter: new Adapter()});

describe(`Genres callbacks should be called`, () => {
  it(`Click by Genre button calls callback`, () => {
    const onActiveTabClickHandler = jest.fn();

    const wrapper = shallow(
        <Genres
          activeGenre={`Dramas`}
          films={films}
          onGenreClick={onActiveTabClickHandler}
        />
    );

    const node = wrapper.find(`.catalog__genres-link`).at(0);
    node.simulate(`click`, {preventDefault() {}});
    expect(onActiveTabClickHandler).toHaveBeenCalledTimes(1);
  });
});
