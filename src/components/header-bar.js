import React from 'react';
import './css/header-bar.css'
import { Link } from 'react-router-dom';

export default function HeaderBar(props){
    return(
        <header className="content-header">
        <Link to="/dashboard">
        <h1 className="header-title">News Flash</h1>
        </Link>
     
    </header>

    );
}


