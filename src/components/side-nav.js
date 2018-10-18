import React from 'react';
import './css/side-nav.css';
export default function SideNav (props){
  //TODO: FIX BURGER ICON AND ADD ANIMATION?
    return(  

    <nav className="site-nav">
      <div className='burger-container'>
      <div type= 'button' className='navButton burger-nav' onClick={props.navClick}>
    </div>
    <div type= 'button' className='navButton burger-nav' onClick={props.navClick}>
    </div>
    <div type= 'button' className='navButton burger-nav' onClick={props.navClick}>
    </div>
      </div>
    
  
    
    
  </nav>)

}