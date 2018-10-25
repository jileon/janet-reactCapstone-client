import React from 'react';
import ReactDOM from 'react-dom';
import CategorNav from './category-nav';
import {shallow, mount} from 'enzyme';


describe('<CategoryNav />', () => {
  it('Should render without crashing', () => {
      shallow(<CategorNav/>);
  });
});