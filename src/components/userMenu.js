import React from 'react';
import { connect } from 'react-redux';
//TODO: delete if unnecessary
// import { hideNavigation } from '../actions/nav-action';
import { Link } from 'react-router-dom';
import { addNewFolder } from '../actions/userMenu-actions';
import './css/userMenu.css';
import { clearAuthToken } from '../local-storage';
import { clearAuth } from '../actions/auth';
import FolderButtonLi from '../components/folder-buttonsLi';

//TODO: delete if unnecessary
// import {getArticlesPerFolder} from '../actions/folder-actions';
//TODO: delete if unnecessary
// import { sendNewFolder } from '../actions/userMenu-actions';
import { deleteFolder } from '../actions/userMenu-actions';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';


class UserMenu extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProtectedData());
	}

	// componentDidUpdate() {
	// 	this.props.dispatch(fetchProtectedData());
	// }
	render() {
		return (
			<section className="userMenu">
				<Link to="/dashboard">
					<button type="button"> BACK BUTTON</button>
				</Link>

				<section>
					<h1>HELLO </h1>
				</section>

				<section className="menuButtons">
					<Link to="/dashboard">
						<button className="dashboardButton" type="button">
							Dashboard
						</button>
					</Link>
				</section>

				<section className="menuButtons">
					<button
						className="dashboardButton"
						type="button"
						onClick={() => {
							clearAuthToken();
							this.props.dispatch(clearAuth());
						}}
					>
						Log Out
					</button>
				</section>

				<div className="folderButtons">
					<FolderButtonLi
						ulClassName="folderButtons"
						liButtonClassName="folder-button"
						folders={this.props.folders}
						folderClick={(e)=>{
									console.log(e.target.getAttribute('folderid'));
							// this.props.dispatch(getArticlesPerFolder(e.target.getAttribute('folderid')));
					
						}}
						deleteClick={(e) => {
							this.props.dispatch(deleteFolder(e.target.getAttribute('folderid')));
						}}
					/>
				</div>

				<div className="folderButtons">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							// this.props.dispatch(addNewFolder(this.input.value));
							this.props.dispatch(addNewFolder(this.input.value));
						}}
					>
						<input type="addNewFolder" ref={(input) => (this.input = input)} />
						<button className="dashboardButton" type="submit">
							New Folder
						</button>
					</form>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		folders: state.protectedData.data
	};
};

//TODO: fix weird login issue
// export default connect(mapStateToProps)(UserMenu);


export default requiresLogin()(connect(mapStateToProps)(UserMenu));
