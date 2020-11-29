import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmPageTabs from "./film-page-tabs";
import {films} from "../../test-mocks";

configure({adapter: new Adapter()});

describe(`FilmPageTabs callbacks should be called`, () => {
  it(`Click by navigation tab calls callback`, () => {
    const onActiveTabClickHandler = jest.fn();

    const wrapper = shallow(
        <FilmPageTabs
          film={films[0]}
          activeTab={`Reviews`}
          onActiveTabClick={onActiveTabClickHandler}
        />
    );

    const node = wrapper.find(`.movie-nav__link`).at(0);
    node.simulate(`click`, {preventDefault() {}});
    expect(onActiveTabClickHandler).toHaveBeenCalledTimes(1);
  });
});
