import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { hideNavigation } from '../actions/nav-action';
import { addNewFolder } from '../actions/userMenu-actions';
import { clearAuthToken } from '../local-storage';
import { clearAuth } from '../actions/auth';
import FolderButtonLi from '../components/folder-buttonsLi';
import BurgerButtonX from './burgerbuttonX';
import { deleteFolder } from '../actions/userMenu-actions';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import { getArticlesPerFolder } from '../actions/folder-actions';
import './css/side-menu-expanded.css';

class SideMenuExpanded extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProtectedData());
	}

	render() {
		return (
			<section className="side-menu-expanded">
				<section className="userControls">
<BurgerButtonX onClick={()=>this.props.dispatch(hideNavigation())}/>
					<h1 className='userWelcome'>Hello {this.props.currentUser} </h1>

					<section className="menuButtons">
					<Link to="/news">
							<button className="dashboardButton" type="button" onClick={()=>this.props.dispatch(hideNavigation())}>
							Main
						</button>
						</Link>
						<button
							className="dashboardButton"
							type="button"
							onClick={() => {
								clearAuthToken();
								this.props.dispatch(clearAuth());
							}}>
							Log Out
						</button>
					</section>
					<section className="folderSection">
						<div className="folderButtons">
							<section className="folderForm">
								<form
									onSubmit={(e) => {
										let newFolder = this.input.value;
										e.preventDefault();
										// this.props.dispatch(addNewFolder(this.input.value));
										this.props.dispatch(addNewFolder(newFolder));
										this.input.value = '';
									}}>
									<input
										type="addNewFolder"
										placeholder="Click here to type a new folder and press enter"
										ref={(input) => (this.input = input)}/>
									<button className="addNewFolder" type="submit">
										New Folder
									</button>
								</form>
							</section>
							<h4>Folders:</h4>
							<FolderButtonLi
								ulClassName="folderButtons"
								liButtonClassName="folder-button"
								folders={this.props.folders}
								folderClick={(e) => {
									this.props.dispatch(getArticlesPerFolder(e.target.getAttribute('folderid')));
									this.props.dispatch(hideNavigation());
								}}
								deleteClick={(e) => {
									this.props.dispatch(deleteFolder(e.target.getAttribute('folderid')));
								}}
							/>
						</div>
					</section>
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

export default requiresLogin()(connect(mapStateToProps)(SideMenuExpanded));
