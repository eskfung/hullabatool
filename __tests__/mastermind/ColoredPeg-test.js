import React from 'react';
import { shallow } from 'enzyme';
import ColoredPeg from 'mastermind/ColoredPeg';

describe('ColoredPeg', () => {
  it('is a div', () => {
    const coloredPegWrapper = shallow(<ColoredPeg />);
    expect(coloredPegWrapper.type()).toEqual('div');
  });

  it('has a peg classname', () => {
    const coloredPegWrapper = shallow(<ColoredPeg />);
    expect(coloredPegWrapper.hasClass('peg')).toEqual(true);
  });

  it('calls its onClick function when clicked', () => {
    const spy = jest.fn();
    const coloredPegWrapper = shallow(<ColoredPeg onClick={spy}/>);
    coloredPegWrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
