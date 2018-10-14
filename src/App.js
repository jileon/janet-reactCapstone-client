import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/header-bar';
import SideNav from './components/side-nav';



class App extends Component {
  render() {
    return (
      <div className="App">
       <SideNav/>
     <HeaderBar/>
    
      </div>

    );
  }
}

export default App;
