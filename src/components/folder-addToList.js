import React from 'react';
import '../components/css/folder-addToList.css';
export default function FolderAddToList(props) {

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
								<p  headline={props.headline} folderid = {folder._id} onClick={(e)=>console.log(e.target.getAttribute('headline'))}>
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
