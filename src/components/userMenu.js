import React from 'react';
import { connect } from 'react-redux';
import { hideNavigation } from '../actions/nav-action';
import { Link } from 'react-router-dom';
import {addNewFolder} from '../actions/userMenu-actions';
import './css/userMenu.css';
import { clearAuthToken } from '../local-storage';
import { clearAuth } from '../actions/auth';
import FolderButtonLi from '../components/folder-buttonsLi';
// import { sendNewFolder } from '../actions/userMenu-actions';
import { deleteFolder } from '../actions/userMenu-actions';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
class UserMenu extends React.Component {

    componentDidMount(){
		this.props.dispatch(fetchProtectedData());
	  }
	render() {
		return (
			<section className="userMenu">
				<Link to="/dashboard">
					<button type="button"> BACK BUTTON</button>
				</Link>

				<section>
					<h1>HELLO</h1>
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
						}}>Log Out
					</button>
				</section>

				<div className="folderButtons">
					<FolderButtonLi/>
				</div>

				<div className="folderButtons">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							console.log(this.input.value);
							// this.props.dispatch(addNewFolder(this.input.value));
							this.props.dispatch(addNewFolder(this.input.value));
						}}
					>
						<input type="addNewFolder" ref={(input) => (this.input = input)} />
						<button className="dashboardButton" type="submit">
							Add Folder
						</button>
					</form>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userfolders: state.protectedData.data,
        // firstName: state.auth.currentUser.firstName
      
	};
};

//TODO: fix weird login issue
export default connect(mapStateToProps)(UserMenu);

//FIXME: this messes with props
// export default requiresLogin()(connect(mapStateToProps)(Dashboard));