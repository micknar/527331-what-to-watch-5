import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AddToFavoriteBtn} from "./add-to-favorite-btn";
import {AuthorizationStatus} from "../../const/const";

configure({adapter: new Adapter()});

describe(`AddToFavoriteBtn callbacks should be called`, () => {
  it(`Click by MyList button calls callback`, () => {
    const onAddToFavoriteBtnClickHandler = jest.fn();

    const wrapper = shallow(
        <AddToFavoriteBtn
          id={1}
          isFavorite={false}
          authorizationStatus={AuthorizationStatus.AUTH}
          onAddToFavoriteBtnClick={onAddToFavoriteBtnClickHandler}
        />
    );

    const node = wrapper.find(`.btn--list`);
    node.simulate(`click`, {preventDefault() {}});
    expect(onAddToFavoriteBtnClickHandler).toHaveBeenCalledTimes(1);
  });

  it(`Click by MyList button doesn't call callback`, () => {
    const onAddToFavoriteBtnClickHandler = jest.fn();

    const wrapper = shallow(
        <AddToFavoriteBtn
          id={1}
          isFavorite={false}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          onAddToFavoriteBtnClick={onAddToFavoriteBtnClickHandler}
        />
    );

    const node = wrapper.find(`.btn--list`);
    node.simulate(`click`, {preventDefault() {}});
    expect(onAddToFavoriteBtnClickHandler).toHaveBeenCalledTimes(0);
  });
});
