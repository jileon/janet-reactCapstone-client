import React from 'react';
import { Link } from 'react-router-dom';


//USED in userMenu.js and 
//FIX ME: Event target sometimes registers the paragraph with the folder name or
// the button. Need to fix so the event listener is on the whole li
export default function FolderButtonLi(props) {

	return (
		
		<ul folders={props.folders} className={props.ulClassName}>
	
			{props.folders.map((folder, index) => {
				return (
					<li key={index} >
						<Link to={`/folder/${folder._id}`}>
							<button
								folderid={folder._id}
								className={props.liButtonClassName}
								type="button"
								name={folder.foldername}
								onClick={props.folderClick}>
								<p folderid={folder._id}  onClick={props.folderClick}>
								{folder.foldername}
								</p>
							
							</button>
							</Link>
                            <p folderid={folder._id} className="deleteLink" onClick={props.deleteClick}>
									Delete
								</p>
						
					</li>
				);
			})}
		</ul>
	);
}
