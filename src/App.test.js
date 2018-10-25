import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {shallow, mount} from 'enzyme';
import { LandingPage } from './components/landing-page';
import {BrowserRouter} from 'react-router-dom';



describe('<App />', () => {
  // it('Should render without crashing', () => {
  //     shallow(<App />);
  // });

  it('Renders with Routes', () => {
   const wrapper =  shallow(
   <BrowserRouter >
   <App/>
   </BrowserRouter>);
   const Routes = wrapper.dive().dive().find('Route')
    expect(Routes).toHaveLength(4); 
});

});