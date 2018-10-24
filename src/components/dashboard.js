import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetSearchLoading } from '../actions/search-action';
import { setCategory, getHeadlines } from '../actions/category-action';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import {modalOn, modalOff} from '../actions/modal-actions';
import HeaderBar from './header-bar';
import SideNav from './side-nav';
import SearchForm from './search';
import MainSection from './main-section';
import CategoryNav from './category-nav';
import ReactModal from 'react-modal';
import '../App.css';



export class Dashboard extends React.Component {

	componentDidMount() {
		this.props.dispatch(fetchProtectedData());	
	}


	render() {
		return (
			<div className="App">
			        <button onClick={()=>{this.props.dispatch(modalOn())}}>
							
							Trigger Modal</button>
				<Link to="/usermenu">
					<SideNav />
				</Link>
				<section className="mainsection1">
					<HeaderBar />
					<SearchForm />
					<CategoryNav
						buttonClick={(e) => {
							this.props.dispatch(resetSearchLoading());
							this.props.dispatch(setCategory(e.target.name));
							this.props.dispatch(getHeadlines(e.target.name));
						}}/>

					<MainSection />

					<ReactModal					
						isOpen={this.props.modal}
						contentLabel="onRequestClose Example"
						onRequestClose={this.handleCloseModal}
						shouldCloseOnOverlayClick={false}
						className="Modal">
						<p>Modal text!</p>
						<button onClick={()=>{this.props.dispatch(modalOff())}}>Got It</button>
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
		modal: state.modal.showModal
	};
};

ReactModal.setAppElement('#root');
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
