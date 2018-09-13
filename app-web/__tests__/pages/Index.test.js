import React from 'react';
import { shallow } from 'enzyme';
import { Index } from '../../src/pages/index';

describe('Index Container', () => {
  test('it matches snapshot', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper).toMatchSnapshot();
  });
});
