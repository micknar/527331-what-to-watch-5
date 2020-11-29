import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in";
import {noop} from "../../test-mocks";

jest.mock(`../page-header-logo/page-header-logo`, () => `PageHeaderLogo`);
jest.mock(`../page-footer/page-footer`, () => `PageFooter`);

describe(`Should SignIn render correctly`, () => {
  it(`With success authorization`, () => {
    const tree = renderer
      .create(
          <SignIn
            email={`mrrobot@gmail.com`}
            password={`helloworld`}
            sendData={noop}
            onInputChange={noop}
            onFormSubmit={noop}
            isValidEmail={true}
            isValidPassword={true}
            isLoginDataSending={false}
            isLoginError={false}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With valid data sending`, () => {
    const tree = renderer
      .create(
          <SignIn
            email={`mrrobot@gmail.com`}
            password={`helloworld`}
            sendData={noop}
            onInputChange={noop}
            onFormSubmit={noop}
            isValidEmail={true}
            isValidPassword={true}
            isLoginDataSending={true}
            isLoginError={false}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With invalid email`, () => {
    const tree = renderer
      .create(
          <SignIn
            email={`mrrobot@@@gmail.com`}
            password={`helloworld`}
            sendData={noop}
            onInputChange={noop}
            onFormSubmit={noop}
            isValidEmail={false}
            isValidPassword={true}
            isLoginDataSending={false}
            isLoginError={false}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With invalid password`, () => {
    const tree = renderer
      .create(
          <SignIn
            email={`mrrobot@gmail.com`}
            password={``}
            sendData={noop}
            onInputChange={noop}
            onFormSubmit={noop}
            isValidEmail={true}
            isValidPassword={false}
            isLoginDataSending={false}
            isLoginError={false}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With login error`, () => {
    const tree = renderer
      .create(
          <SignIn
            email={``}
            password={``}
            sendData={noop}
            onInputChange={noop}
            onFormSubmit={noop}
            isValidEmail={false}
            isValidPassword={false}
            isLoginDataSending={false}
            isLoginError={true}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
