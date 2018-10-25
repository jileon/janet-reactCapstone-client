import React from 'react';
import ReactDOM from 'react-dom';
import {EverythingHeadlines} from './everything-headlines';
import {shallow, mount} from 'enzyme';


describe('<EverythingHeadlines />', () => {
  it('Should render without crashing', () => {
      const dispatch = jest.fn();
      shallow(<EverythingHeadlines dispatch={dispatch}/>);
 
  });

  

});