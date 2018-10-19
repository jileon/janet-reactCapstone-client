import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import HeaderBar from './header-bar';
import SideNav from './side-nav';
import SearchForm from './search';
import MainSection from './main-section';
import CategoryNav from './category-nav';
import { setSearchTerm } from '../actions/search-action';
//TODO: clean up functions that are no longer needed;
// import Headlines from './components/headlines';
import { setCategory } from '../actions/category-action';
//TODO: clean up functions that are no longer needed;
// import {SearchApp, Pagination} from './components/search-scratch';

//TODO: clean up functions that are no longer needed;
// import {showNavigation} from '../actions/nav-action';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import Welcome from './welcome';
export class Dashboard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProtectedData());
	}
	//  componentDidUpdate(){
	//   this.props.dispatch(fetchProtectedData());
	// }

	render() {
		return (
			<div className="App">
				<Link to="/usermenu">
					<SideNav />
				</Link>

				<HeaderBar />
				<Welcome username={this.props.firstName} />
				<CategoryNav buttonClick={(e) => {
						this.props.dispatch(setSearchTerm(''));
						this.props.dispatch(setCategory(e.target.name));
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
		// category: state.category.category,
		// headlines: state.category.headlines,
		// search: state.search.searchTerm,
		// showNav: state.nav.expandedNav,
		// username: state.auth.currentUser.username,
		firstName: state.auth.currentUser.firstName,
		//   name: `${currentUser.firstName} ${currentUser.lastName}`,
		folders: state.protectedData.data
	};
};
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
