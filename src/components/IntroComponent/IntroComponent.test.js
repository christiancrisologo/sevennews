import React from "react";
import { shallow } from "enzyme";
import IntroComponent from "./IntroComponent";
import styled from "styled-components";
import renderer from "react-test-renderer";

describe("IntroComponent Test", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<IntroComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
