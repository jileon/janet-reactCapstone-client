import React from 'react';
import MediaQuery from 'react-responsive';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetSearchLoading } from '../actions/search-action';
import { setCategory, getHeadlines } from '../actions/category-action';
import { fetchProtectedData } from '../actions/protected-data';
import { modalOn, modalOff } from '../actions/modal-actions';
import HeaderBar from './header-bar';
import SideNav from './side-nav';
import SideMenu from './side-menu';
import SearchForm from './search';
import MainSection from './main-section';
import CategoryNav from './category-nav';
import UserMenu from './userMenu'

import requiresLogin from './requires-login';
import '../App.css';
import './css/modal.css';

export class Dashboard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProtectedData());
	}

	render() {
		if(this){

		}
		
		return (
			<div className="App">
				<button
					onClick={() => {
						this.props.dispatch(modalOn());
					}}
				>
					About
				</button>
				<SideMenu />
				<section className="mainsection1">
					<HeaderBar />
					<SearchForm />
					<CategoryNav
					navClass= {this.props.expandedNav?'catagory-nav-expanded':'catagory-nav-collapsed'}
					
						buttonClick={(e) => {
							this.props.dispatch(resetSearchLoading());
							this.props.dispatch(setCategory(e.target.name));
							this.props.dispatch(getHeadlines(e.target.name));
						}}
					/>
						<div></div>
					<MainSection />

					<ReactModal
						isOpen={this.props.modal}
						contentLabel="onRequestClose Example"
						onRequestClose={this.handleCloseModal}
						shouldCloseOnOverlayClick={false}
						className="Modal"
					>
						<section className="about-newsflash">
							<h1>About Newsflash</h1>
							<p>
								Newsflash to save and get updated news for topics that interest you. You can browse
								headlines by category using the buttons at the top of the header.
							</p>
							<p>
								You can save an article by creating customized folders. To create a new folder, click on
								the side navigation bar to open the folder display. Create a new folder by typing a name
								in the input and press enter. Go back to the main page, hover over an article you'd like
								to save, and you will see a button pop up called 'Add to Folder'. Hover over that button
								to see a drop down menu of all your folders.
							</p>

							<p>
								To view what's in your folders, click on the side navigation bar. You can see a card
								view list of all your folders. Click on each folder to open up a page with every article
								saved to that folder. When you decide you no longer need that article, delete it by
								hovering over the article card and click the delete button at the top.
							</p>
						</section>

						<div className="modal-close">
							<button
								onClick={() => {
									this.props.dispatch(modalOff());
								}}
							>
								Got It
							</button>
						</div>
					</ReactModal>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		firstName: state.auth.currentUser.firstName,
		folders: state.protectedData.data,
		modal: state.modal.showModal,
		expandedNav: state.nav.expandedNav
	};
};

// ReactModal.setAppElement('App');
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
