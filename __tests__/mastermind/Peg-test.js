import React from "react";
import { shallow } from "enzyme";
import Peg from "mastermind/Peg";

describe("Peg", () => {
  it("is a div", () => {
    const pegWrapper = shallow(<Peg />);
    expect(pegWrapper.type()).toEqual("div");
  });

  it("has a peg classname", () => {
    const pegWrapper = shallow(<Peg />);
    expect(pegWrapper.props().className.split(" ").indexOf("peg")).not.toEqual(-1);
  });

  describe("without a color", () => {
    it("has a peg-blank classname", () => {
      const pegWrapper = shallow(<Peg />);
      expect(pegWrapper.props().className.split(" ").indexOf("peg-blank")).not.toEqual(-1);
    });
  });

  describe("with a color passed in as a prop", () => {
    it("has a peg- classname matching the color prop", () => {
      const pegWrapper = shallow(<Peg color="lavender"/>);
      expect(pegWrapper.props().className.split(" ").indexOf("peg-lavender")).not.toEqual(-1);
    });
  });
});
