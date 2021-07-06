import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { HeliumSpinner } from './Spinner';

let wrap: ShallowWrapper;

describe(`<HeliumSpinner />`, () => {
  it(`renders with default screen reader text and size when no props are passed`, () => {
    wrap = shallow(<HeliumSpinner />);
    expect(wrap).toMatchSnapshot();
  });

  it(`renders with a modifier class when the modifierClass prop is passed`, () => {
    wrap = shallow(<HeliumSpinner modifierClass="h-spinner--pizza" />);
    expect(wrap).toMatchSnapshot();
  });

  it(`renders with custom screen reader text when the screenReaderText prop is passed`, () => {
    wrap = shallow(<HeliumSpinner screenReaderText="Loading...I love pizza" />);
    expect(wrap).toMatchSnapshot();
  });

  it(`modifies its size when an acceptable value is passed to the size prop`, () => {
    wrap = shallow(<HeliumSpinner size="small" />);
    expect(wrap).toMatchSnapshot();
  });
});
