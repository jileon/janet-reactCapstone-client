import React from 'react';
import '../components/css/folder-addToList.css'
export default function FolderAddToList (props){
    return(
        <div class="dropdown">
        <button class="dropbtn">Add to Reading List</button>
        <div class="dropdown-content">
        <a href="#" class= "rating5" >&#9733;&#9733;&#9733;&#9733;&#9733; </a>
        <a href="#" class= "rating4" >&#9733;&#9733;&#9733;&#9733;&#9734;</a>
        <a href="#" class= "rating3" >&#9733;&#9733;&#9733;&#9734;&#9734;</a>
        <a href="#" class= "rating2" >&#9733;&#9733;&#9734;&#9734;&#9734;</a>
        <a href="#" class= "rating1" >&#9733;&#9734;&#9734;&#9734;&#9734;</a>
        
        </div>
</div>
    )
}