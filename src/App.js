import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/header-bar';
import SideNav from './components/side-nav';
import MainSection from './components/main-section'
class App extends Component {
  render() {
    return (
      <main className="site-content">
       <SideNav/>
     <HeaderBar/>
    <MainSection/>
      </main>
    );
  }
}

export default App;
