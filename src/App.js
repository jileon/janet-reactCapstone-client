import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/header-bar';
import SideNav from './components/side-nav';
import SearchForm from './components/search'
// import MainSection from './components/main-section'
import CategoryNav from './components/category-nav'
import Headlines from './components/headlines';
import {connect } from 'react-redux';
import {getCategory}from './actions/category-action';
// import {SearchApp, Pagination} from './components/search-scratch';


class App extends Component {



  render() {
    return (
      <div className="App">
      <SideNav/>
     <HeaderBar/>
     <CategoryNav buttonClick={(e)=>this.props.dispatch(getCategory(e.target.name))}/>
     <SearchForm/>
      <Headlines/>    

      <div className="pagination">
      <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a href="#" class="active">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
 
      </div>

    
    );
  }
}

const mapStateToProps = state => {
  return {
      category: state.category.category,
      headlines: state.category.headlines
  };
};
export default connect(mapStateToProps)(App);


