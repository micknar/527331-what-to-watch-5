import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveTab from "./with-active-tab";
import {films} from "../../test-mocks";
import {FilmPageNav} from "../../const";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveTab(MockComponent);

it(`Should`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        film={films[0]}
      />);

  expect(wrapper.state().filmTab).toEqual(FilmPageNav.OVERVIEW);
});
