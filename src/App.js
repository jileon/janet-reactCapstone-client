import React, { Component } from 'react';
import {connect } from 'react-redux';
import './App.css';
import HeaderBar from './components/header-bar';
import SideNav from './components/side-nav';
import SearchForm from './components/search';
import MainSection from './components/main-section';
import CategoryNav from './components/category-nav';
import {setSearchTerm} from './actions/search-action';
// import Headlines from './components/headlines';
import {getCategory}from './actions/category-action';
// import {SearchApp, Pagination} from './components/search-scratch';
import {showNavigation} from './actions/nav-action';
import UserMenu from './components/userMenu';

class App extends Component {



  render() {

    if (this.props.showNav) {
      return <UserMenu/>
    
  }
    return (


      <div className="App">
      <SideNav navClick={(e)=>{
        this.props.dispatch(showNavigation())
       
     }}/>
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
      search: state.search.searchTerm,
      showNav: state.nav.expandedNav
  };
};
export default connect(mapStateToProps)(App);


