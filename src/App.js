import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/header-bar';
import SideNav from './components/side-nav';
import SearchForm from './components/search';
import MainSection from './components/main-section';
import CategoryNav from './components/category-nav';
import {setSearchTerm} from './actions/search-action';
// import Headlines from './components/headlines';

import {connect } from 'react-redux';
import {getCategory}from './actions/category-action';
// import {SearchApp, Pagination} from './components/search-scratch';


class App extends Component {



  render() {
    return (
      <div className="App">
      <SideNav/>
     <HeaderBar/>
     <CategoryNav buttonClick={(e)=>{
       this.props.dispatch(setSearchTerm(''));
       this.props.dispatch(getCategory(e.target.name))
     }}/>
     <SearchForm/>
     <MainSection/>
    
  
      </div>

    
    );
  }
}

const mapStateToProps = state => {
  return {
      category: state.category.category,
      headlines: state.category.headlines,
      search: state.search.searchTerm
  };
};
export default connect(mapStateToProps)(App);


