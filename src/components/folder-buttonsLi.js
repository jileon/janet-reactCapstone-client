import React from 'react';
import { Link } from 'react-router-dom';
import './css/folder-card.css';

export default function FolderButtonLi(props) {
	return (
		<ul folders={props.folders} className="folder-cards">
			{props.folders.map((folder, index) => {
				return (
					<li key={index} className="folder-list-item">
						<div className="folder-item">
							<button
								className="folderButton"
								type="button"
								folderid={folder._id}
								onClick={props.folderClick}
							>
								<Link to={`/folder/${folder._id}`}>
									<h3 folderid={folder._id}>{folder.foldername}</h3>
								</Link>
							</button>
							<button folderid={folder._id} className="deleteFolder" onClick={props.deleteClick}>
								X
							</button>
						</div>
					</li>
				);
			})}
		</ul>
	);
}
