import React from 'react';
import {connect } from 'react-redux';
import '../components/css/folder-addToList.css';



function FolderAddToList(props) {

	//maps through folder objects and pulls out foldername. Props are tunnelled
	// from Upmost component ('Everything, Science, etc')
	//EG everything-headlines ->headlineLi ->folder-addToList(here)
	return (
		<div className="dropdown">
			<button className="dropbtn">Add to Folder</button>
			<div className="dropdown-content">
				<ul folders={props.folders} >
					{props.folders.map((folder, index) => {
						return (
							<li key={index}>
								<p  articletitle={props.articletitle} 
								articleimage={props.articleimage}
								 articleurl={props.articleurl} 
								 articlesource={props.articlesource} 
								 folderid = {folder._id} 
								 onClick={(e)=>{
									 console.log(e.target.getAttribute('articletitle'))
									}}>
								 {folder.foldername}
								 </p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default connect()(FolderAddToList);
