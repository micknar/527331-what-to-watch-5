import React from "react";
import renderer from "react-test-renderer";
import VideoPreview from "./video-preview";
import {films} from "../../test-mocks";

it(`Should VideoPreview render correctly`, () => {
  const tree = renderer
    .create(
        <VideoPreview
          previewImage={films[0].previewImage}
          previewVideoLink={films[0].previewVideoLink}
        />, {
          createNodeMock() {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
