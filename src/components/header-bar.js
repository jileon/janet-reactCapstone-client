import React from 'react';
import './css/header-bar.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {setCategory}from '../actions/category-action';

//TODO: fix onClick={()=>this.dispatch(setCategory('headlines'))}
export default function HeaderBar(props){
    return(
        <header className="content-header">
        <Link to="/dashboard"  >
        <h1 className="header-title">News Flash</h1>
        </Link>
     
    </header>

    );
}


