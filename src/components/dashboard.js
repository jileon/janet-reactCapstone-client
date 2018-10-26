import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { resetSearchLoading } from '../actions/search-action';
import { setCategory, getHeadlines } from '../actions/category-action';
import { fetchProtectedData } from '../actions/protected-data';
import { modalOn, modalOff } from '../actions/modal-actions';
import HeaderBar from './header-bar';
import SideMenu from './side-menu';
import MainSection from './main-section';
import CategoryNav from './category-nav';
import MainSectionHeader from './main-view-header';
import About from './about';
import requiresLogin from './requires-login';
import '../App.css';
import './css/modal.css';

export class Dashboard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProtectedData());
	}

	render() {
		return (
			<section className="App">
				<section className="About-Section">
					<button
						className="about-button"
						onClick={() => {
							this.props.dispatch(modalOn());
						}}
					>
						About
					</button>
				</section>
				<SideMenu />
				<section className="mainsection1">
					<HeaderBar
						headerClass={this.props.expandedNav ? 'content-header-reduced ' : 'content-header-expanded'}
					/>
					<CategoryNav
						navClass={this.props.expandedNav ? 'catagory-nav-expanded' : 'catagory-nav-collapsed'}
						buttonClick={(e) => {
							this.props.dispatch(resetSearchLoading());
							this.props.dispatch(setCategory(e.target.name));
							this.props.dispatch(getHeadlines(e.target.name));
						}}
					/>

					<MainSectionHeader mainHeaderClass={this.props.expandedNav ? 'mainHeader-reduced' : 'mainHeader'} />
					<MainSection />

					<ReactModal
						isOpen={this.props.modal}
						contentLabel="onRequestClose Example"
						onRequestClose={this.handleCloseModal}
						shouldCloseOnOverlayClick={false}
						className="Modal"
						ariaHideApp={false}
					>
						<About ModalOff={() => this.props.dispatch(modalOff())} />
					</ReactModal>
				</section>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		firstName: state.auth.currentUser.firstName,
		folders: state.protectedData.data,
		modal: state.modal.showModal,
		expandedNav: state.nav.expandedNav,
		category: state.category.category
	};
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
