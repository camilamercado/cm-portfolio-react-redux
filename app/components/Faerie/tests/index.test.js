/**
 * Testing the Faerie
 */

import React from 'react';
import { shallow } from 'enzyme';

import Faerie from '../index';

describe('<Faerie />', () => {
  it('should render the Faerie Images', () => {
    const renderedComponent = shallow(<Faerie />);
    expect(renderedComponent.find('.em').length).not.toBe(0);
  });
});
