import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import HeaderBar from './header-bar';
import SideNav from './side-nav';
import SearchForm from './search';
import MainSection from './main-section';
import CategoryNav from './category-nav';
import {resetSearchLoading } from '../actions/search-action';
import UserMenu from './userMenu';
import { setCategory, getHeadlines } from '../actions/category-action';
import UserMenuScratch from './sidenavscratch'
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import Welcome from './welcome';


export class DashboardwithMenu extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProtectedData());
	}





	render() {
		return (
			<div className="AppWithSide">
				<Link to="/usermenu">
					<UserMenuScratch/>
				</Link>
				<HeaderBar />
				
				<CategoryNav buttonClick={(e) => {
						this.props.dispatch(resetSearchLoading());
						this.props.dispatch(setCategory(e.target.name));
						this.props.dispatch(getHeadlines(e.target.name));

					}}/>
						<SearchForm />
					
			
				<MainSection />
			</div>
		);
	}
}
//TODO: clean up state properties that are no longer needed
const mapStateToProps = (state) => {
	return {

		firstName: state.auth.currentUser.firstName,

		folders: state.protectedData.data
	};
};
export default requiresLogin()(connect(mapStateToProps)(DashboardwithMenu ));
