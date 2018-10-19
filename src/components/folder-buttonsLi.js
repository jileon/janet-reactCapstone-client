import React from 'react';
import { Link } from 'react-router-dom';


//USED in userMenu.js and 

export default function FolderButtonLi(props) {

	return (
		
		<ul folders={props.folders} className={props.ulClassName}>
	
			{props.folders.map((folder, index) => {
				return (
					<li key={index}>
						<Link to={`/folder/${folder._id}`}>
							<button
								className={props.liButtonClassName}
								type="button"
								name={folder.foldername}
								onClick={props.folderClick}
							>
								<p>{folder.foldername}</p>
								
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
