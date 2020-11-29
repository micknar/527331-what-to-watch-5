import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";
import {noop} from "../../test-mocks";

configure({adapter: new Adapter()});

describe(`SignIn callbacks should be called`, () => {
  it(`Input text changes calls callback`, () => {
    const onInputChangeHandler = jest.fn();

    const wrapper = shallow(
        <SignIn
          email={`mrrobot@gmail.com`}
          password={`helloworld`}
          sendData={noop}
          onInputChange={onInputChangeHandler}
          onFormSubmit={noop}
          isValidEmail={true}
          isValidPassword={true}
          isLoginDataSending={false}
          isLoginError={false}
        />
    );

    const node = wrapper.find(`.sign-in__input`).at(0);
    node.simulate(`change`);
    expect(onInputChangeHandler).toHaveBeenCalledTimes(1);
  });

  // it(`Click by Submit button calls callback`, () => {
  //   const onFormSubmitHandler = jest.fn();

  //   const wrapper = shallow(
  //       <SignIn
  //         email={`mrrobot@gmail.com`}
  //         password={`helloworld`}
  //         sendData={noop}
  //         onInputChange={noop}
  //         onFormSubmit={onFormSubmitHandler}
  //         isValidEmail={true}
  //         isValidPassword={true}
  //         isLoginDataSending={false}
  //         isLoginError={false}
  //       />
  //   );

  //   const node = wrapper.find(`.sign-in__btn`);
  //   node.simulate(`click`, {preventDefault() {}});
  //   expect(onFormSubmitHandler).toHaveBeenCalledTimes(1);
  // });
});
