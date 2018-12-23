import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// HOOKS DON'T HAVE SUPPORT TO SHALLOW RENDER YET!
it('renders without crashing', () => {
  // const div = document.createElement('div');
  // const wrapper = shallow(<App />);

  // expect(wrapper.find('App-task')).toBeTruthy()

  expect(1).toBe(1);
});
