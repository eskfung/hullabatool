import React from "react";
import { shallow } from "enzyme";
import Guess from "mastermind/Guess";
import ColoredPeg from "mastermind/ColoredPeg";

describe("Guess", () => {
  it("is a ColoredPeg", () => {
    const guessWrapper = shallow(<Guess />);
    expect(guessWrapper.type()).toEqual(ColoredPeg);
    expect(guessWrapper.find(ColoredPeg)).toHaveLength(1);
  });

  it("has an initial color state of \"blank\"", () => {
    const guessWrapper = shallow(<Guess />);
    expect(guessWrapper.state("color")).toEqual("blank");
  });

  it("passes the colored-peg--blank class prop to its ColoredPeg", () => {
    const guessWrapper = shallow(<Guess />);
    const coloredPeg = guessWrapper.find(ColoredPeg);
    expect(coloredPeg.prop("classes")).toEqual("colored-peg--blank");
  });

  describe("when the color state changes", function() {
    it("passes the colored-peg--{color} class prop to its ColoredPeg", () => {
      const guessWrapper = shallow(<Guess />);
      guessWrapper.setState({ "color": "lavender" });

      const coloredPeg = guessWrapper.find(ColoredPeg);
      expect(coloredPeg.prop("classes")).toEqual("colored-peg--lavender");
    });
  });

  describe("when Guess is active", function() {
    it("calls the onClick prop function with the react key and next color", () => {
      const onClickSpy = jest.fn();
      const reactKey = 1;
      const guessWrapper = shallow(<Guess
        reactKey={reactKey}
        isActive={true}
        colorChoices={["red"]}
        onClick={onClickSpy}
      />);
      const nextColor = guessWrapper.instance().nextColor();
      guessWrapper.simulate("click");

      expect(onClickSpy).toHaveBeenCalledWith(reactKey, nextColor);
    });

    it("sets the state to the next color", () => {
      const onClickSpy = jest.fn();
      const guessWrapper = shallow(<Guess
        reactKey={1}
        isActive={true}
        colorChoices={["red"]}
        onClick={onClickSpy}
      />);
      const nextColor = guessWrapper.instance().nextColor();
      guessWrapper.simulate("click");

      expect(guessWrapper.state().color).toEqual(nextColor);
    });
  });

  describe("when Guess is inactive", function() {
    it("does not call the onClick prop function", () => {
      const onClickSpy = jest.fn();
      const guessWrapper = shallow(<Guess
        isActive={false}
        onClick={onClickSpy}
      />);
      guessWrapper.simulate("click");

      expect(onClickSpy).not.toHaveBeenCalled();
    });
  });

  describe("#nextColor", function() {
    describe("when the current state color is not in the color choices", function() {
      it("is the first color", () => {
        const guessWrapper = shallow(<Guess colorChoices={["red", "blue", "green"]}/>);
        guessWrapper.setState({ "color": "lavender" });
        expect(guessWrapper.instance().nextColor()).toEqual("red");
      });
    });

    describe("when the current state color is in the color choices", function() {
      it("is the next color in order", () => {
        const guessWrapper = shallow(<Guess colorChoices={["red", "blue", "green"]}/>);
        guessWrapper.setState({ "color": "red" });
        expect(guessWrapper.instance().nextColor()).toEqual("blue");
      });
    });

    describe("when the current state color is the last of the color choices", function() {
      it("is the first color", () => {
        const guessWrapper = shallow(<Guess colorChoices={["red", "blue", "green"]}/>);
        guessWrapper.setState({ "color": "green" });
        expect(guessWrapper.instance().nextColor()).toEqual("red");
      });
    });
  });
});
