import React from 'react';
import ReactDOM from 'react-dom';
import {Dashboard} from './dashboard';
import {shallow, mount} from 'enzyme';


describe('<Dashboard />', () => {
  it('Should render without crashing', () => {
      const dispatch = jest.fn();
      shallow(<Dashboard dispatch={dispatch}/>);
 
  });
});