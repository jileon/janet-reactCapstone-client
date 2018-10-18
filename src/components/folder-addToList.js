import React from 'react';
import {connect } from 'react-redux';
import '../components/css/folder-addToList.css';
import {sendArticleToFolder} from '../actions/folder-actions';


function FolderAddToList(props) {

	//maps through folder objects and pulls out foldername. Props are tunnelled
	// from Upmost component ('Everything, Science, etc')
	//EG everything-headlines ->headlineLi ->folder-addToList(here)


	//Need to add handling for dupe articles
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
									 const folderId= e.target.getAttribute('folderid')
									const article = {
										title: e.target.getAttribute('articletitle'),
										source: e.target.getAttribute('articlesource')
									};
									props.dispatch(sendArticleToFolder(article, folderId))
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
