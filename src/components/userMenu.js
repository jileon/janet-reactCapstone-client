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

				<header className="container">
				<div className="title">
							<h1>HELLO {this.props.currentUser} </h1>
						</div>
					<nav className="header-wrapper">
						<ul className="clearfix">
							<li>
								<Link to="/dashboard">
									<button className="navButton" type="button">
										Back
									</button>
								</Link>
							</li>
							<li>
								<button
									className="navButton"
									type="button"
									onClick={() => {
										clearAuthToken();
										this.props.dispatch(clearAuth());
									}}
								>
									Log Out
								</button>
							</li>
						</ul>
					
					</nav>
				</header>



				<section className='folderSection'>
			
			

				<div className="folderButtons">
				<div className= 'folderForm'>
				<form 
						onSubmit={(e) => {
							e.preventDefault();
							// this.props.dispatch(addNewFolder(this.input.value));
							this.props.dispatch(addNewFolder(this.input.value));
						}}
					>
						<input type="addNewFolder" placeholder='Click here to add a new folder' ref={(input) => (this.input = input)} />
						<button className="addNewFolder" type="submit">
							New Folder
						</button>
					</form>
					</div>

					<FolderButtonLi
						ulClassName="folderButtons"
						liButtonClassName="folder-button"
						folders={this.props.folders}
						folderClick={(e) => {
							console.log(e.target.getAttribute('folderid'));
							// this.props.dispatch(getArticlesPerFolder(e.target.getAttribute('folderid')));
						}}
						deleteClick={(e) => {
							this.props.dispatch(deleteFolder(e.target.getAttribute('folderid')));
						}}
					/>
				</div>

				</section>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		folders: state.protectedData.data,
		currentUser: state.auth.currentUser.firstName
	};
};

//TODO: fix weird login issue
// export default connect(mapStateToProps)(UserMenu);

export default requiresLogin()(connect(mapStateToProps)(UserMenu));
