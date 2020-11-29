import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list";
import {noop, films} from "../../test-mocks";

jest.mock(`../film-card/film-card`, () => `FilmCard`);

it(`Should FilmsList render correctly`, () => {
  const tree = renderer
    .create(
        <FilmsList
          films={films}
          onCardClick={noop}
          activeCard={2}
          onCardMouseOver={noop}
          onCardMouseOut={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
