import React from 'react';
import { connect } from 'react-redux';
import '../components/css/folder-addToList.css';
import { sendArticleToFolder } from '../actions/folder-actions';

function FolderAddToList(props) {
if (props.folders.length<1){
	return (
		<section className="dropdown">
			<button className="dropbtn">&#9733; Add to Folder</button>
			<div className="dropdown-content">
				<ul folders={props.folders} className='dropdown-list-section'>
				<li className="addLi" >
								<div className='no-folders'>
								You haven't created any folders yet. <br/>Open the side menu to add one.
								</div>
							</li>
					
				</ul>
			</div>
		</section>
	)}


	return (
		<section className="dropdown">
			<button className="dropbtn">&#9733; Add to Folder</button>
			<div className="dropdown-content">
				<ul folders={props.folders} className='dropdown-list-section'>
					{props.folders.map((folder, index) => {
						return (
							<li className="addLi" key={index}>
								<p className='blink-2'
									articletitle={props.articletitle}
									articleimage={props.articleimage}
									articleurl={props.articleurl}
									articlesource={props.articlesource}
									articledescription={props.articledescription}
									folderid={folder._id}
									onClick={(e) => {
										const folderId = e.target.getAttribute('folderid');
										const article = {
											title: e.target.getAttribute('articletitle'),
											source: e.target.getAttribute('articlesource'),
											url: e.target.getAttribute('articleurl'),
											image: e.target.getAttribute('articleimage'),
											description: e.target.getAttribute('articledescription')
										};
										props.dispatch(sendArticleToFolder(article, folderId));
									}}
								>
									{folder.foldername}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}


const mapStateToProps = (state) => {
	return {
		folders: state.protectedData.data
	};
};
export default connect(mapStateToProps)(FolderAddToList);
