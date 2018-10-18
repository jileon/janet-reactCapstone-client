import React from 'react';
import '../components/css/folder-addToList.css';
export default function FolderAddToList(props) {
	return (
		<div className="dropdown">
			<button className="dropbtn">Add to Reading List</button>
			<div className="dropdown-content">
				<ul folders={props.folders} >
					{props.folders.map((folder, index) => {
						return (
							<li key={index}>
								<a href="#" >
									{folder.foldername}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
