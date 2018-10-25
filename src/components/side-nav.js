import React from 'react';
import './css/side-nav.css';

export default function SideNav (props){

  //TODO: FIX BURGER ICON AND ADD ANIMATION? 
  //TODO: GET RID OF ON CLICK CHANGES OR ADJUST ONLY THE BURGET TO LINK ROUTE
    return(  

    <nav className="site-nav" onClick={props.navClick}>
 
    
    <div className='burger-container'>
   <button type='button' onClick={props.onClick}>Close SideBar</button>
      </div>

     
    
  
    
    
  </nav>)

}