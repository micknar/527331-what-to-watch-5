import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {UserBlock} from "./user-block";
import {AuthorizationStatus} from "../../const/const";

const avatar = `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`;

describe(`Should UserBlock render correctly`, () => {
  it(`With guest`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <UserBlock
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              avatar={avatar}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With authorized user`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <UserBlock
              authorizationStatus={AuthorizationStatus.AUTH}
              avatar={avatar}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
