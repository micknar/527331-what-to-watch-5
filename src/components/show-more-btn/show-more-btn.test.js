import React from "react";
import renderer from "react-test-renderer";
import {ShowMoreBtn} from "./show-more-btn";
import {noop} from "../../test-mocks";

it(`Should ShowMoreBtn render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreBtn
          onShowMoreBtnClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
