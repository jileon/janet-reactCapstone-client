import React from 'react';
import './css/category-nav.css'

export default function CategoryNav(props){
    return(
        <div className='categoryList'>
        <ul className='category-flex-container'>    
            <li><button type='button' name='headlines' onClick={props.buttonClick}>Everything</button></li>
            <li><button type='button' name='entertainment' onClick={props.buttonClick}>Entertainment</button></li>
            <li><button type='button' name='business' onClick={props.buttonClick}>Business</button></li>
            <li><button type='button' name='health' onClick={props.buttonClick}>Health</button></li>
            <li><button type='button' name='science' onClick={props.buttonClick}>Science</button></li>
            <li><button type='button' name='sports'onClick={props.buttonClick}>Sports</button></li>
            <li><button type='button' name='technology' onClick={props.buttonClick}>Technology</button></li>
        </ul>
        </div>
    )
}