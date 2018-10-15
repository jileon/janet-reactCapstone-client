import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/header-bar';
import SideNav from './components/side-nav';
// import MainSection from './components/main-section'
import CategoryNav from './components/category-nav'
import Headlines from './components/headlines';


class App extends Component {
  render() {
    return (
      <div className="App">
       <SideNav/>
     <HeaderBar/>
     <CategoryNav/>
       <Headlines/>
      </div>

    );
  }
}

export default App;
