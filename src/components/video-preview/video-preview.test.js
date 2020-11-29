import React from "react";
import renderer from "react-test-renderer";
import VideoPreview from "./video-preview";
import {films} from "../../test-mocks";

const {previewImage, previewVideoLink} = films[0];

it(`Should VideoPreview render correctly`, () => {
  const tree = renderer
    .create(
        <VideoPreview
          previewImage={previewImage}
          previewVideoLink={previewVideoLink}
        />, {
          createNodeMock() {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
