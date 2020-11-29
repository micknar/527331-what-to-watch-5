import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ShowMoreBtn} from "./show-more-btn";

configure({adapter: new Adapter()});

describe(`ShowMoreBtn callbacks should be called`, () => {
  it(`Click by Show more button calls callback`, () => {
    const onShowMoreBtnClickHandler = jest.fn();

    const wrapper = shallow(
        <ShowMoreBtn
          onShowMoreBtnClick={onShowMoreBtnClickHandler}
        />
    );

    const node = wrapper.find(`.catalog__button`).at(0);
    node.simulate(`click`);
    expect(onShowMoreBtnClickHandler).toHaveBeenCalledTimes(1);
  });
});
