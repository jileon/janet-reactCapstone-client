import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFolder } from '../actions/userMenu-actions';
import {fetchProtectedData} from '../actions/protected-data';

export class FolderButtonLi extends React.Component {
	componentDidMount(){
		this.props.dispatch(fetchProtectedData());
	  }
render(){
console.log(this.props.folders)
	return (
		<div>"hello</div>
		// <ul className="folderButtons">
		// 	{this.props.folders.map((folder, index) => {
		// 		return (
		// 			<li key={index}>
		// 				<Link to={`/folder/${folder.foldername}`}>
		// 					<button
		// 						className='folder-button'
		// 						type="button"
		// 						name={folder.foldername}
		// 						onClick={(e)=>{
		// 							this.props.dispatch(deleteFolder(e.target.getAttribute('folderid')))
		// 						}}
		// 					>
		// 						{folder.foldername}
		// 					</button>
		// 				</Link>
		// 				<p folderid={folder._id} className="deleteLink" onClick={()=>console.log('delete works')}>
		// 					Delete
		// 				</p>
		// 			</li>
		// 		);
		// 	})}
		// </ul>
	)
}
}


const mapStateToProps = (state) => {
	return {
		folders: state.protectedData.data
      
	};
};

export default connect(mapStateToProps)(FolderButtonLi);