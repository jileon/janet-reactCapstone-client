import React from 'react';
import { Link } from 'react-router-dom';
import './css/folder-card.css'
//USED in userMenu.js and
//FIX ME: Event target sometimes registers the paragraph with the folder name or
// the button. Need to fix so the event listener is on the whole li
export default function FolderButtonLi(props) {
	return (
		<ul folders={props.folders} className="folder-cards">
			{props.folders.map((folder, index) => {
				return (
					<li key={index}>
							<figure className="folderCard">
							<Link to={`/folder/${folder._id}`}>
								<div className="image">
									<img
										src='https://images.unsplash.com/photo-1515697203610-d0513edf9cb4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM5OTI2fQ&s=ef6eeaae70eec259f9a35d0c2ee9b48d'
										alt="ls-sample1"
									/>
								</div>
								<figcaption>

									<h3>{folder.foldername}</h3>
									</figcaption>
									</Link>
									<footer>
										<p folderid={folder._id} className="deleteLink" onClick={props.deleteClick}>
											Delete
										</p>
									</footer>
							
							</figure>
						
							{/* <figure className="figurecard" key={index}>
							<footer folderid={folder._id}
								className={props.liButtonClassName}
					
								onClick={props.folderClick}>
								<p folderid={folder._id}  onClick={props.folderClick}>
								{folder.foldername}
								</p>
							
							</footer>
							</figure> */}
{/* 						
						<p folderid={folder._id} className="deleteLink" onClick={props.deleteClick}>
							Delete
						</p> */}
					</li>
				);
			})}
		</ul>
	);
}
