/**
 * Testing the MediaViewer
 */

import React from 'react';
import { shallow } from 'enzyme';

import MediaViewer from '../index';

describe('<MediaViewer />', () => {
  it('should render the MediaViewer', () => {
    const renderedComponent = shallow(<MediaViewer />);
    expect(renderedComponent.contains(<section className="mediaViewer"></section>)).toEqual(true);
  });
});
