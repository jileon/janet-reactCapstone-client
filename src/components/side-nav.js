import React from 'react';
import './css/side-nav.css';
export default function SideNav (props){
    return(  

    <nav className="site-nav">
    <button type= 'button' className='navButton' onClick={props.navClick}>
    <h1 className="nav-h1">NAV</h1>
    </button>
    
  </nav>)

}