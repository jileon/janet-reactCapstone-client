import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetSearchLoading } from '../actions/search-action';
import { setCategory, getHeadlines } from '../actions/category-action';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import HeaderBar from './header-bar';
import SideNav from './side-nav';
import SearchForm from './search';
import MainSection from './main-section';
import CategoryNav from './category-nav';
import ReactModal from 'react-modal';
import {setSession1} from '../local-storage'
import '../App.css';



export class Dashboard extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal() {
		this.setState({ showModal: true });
	}

	handleCloseModal() {
		sessionStorage.setItem('firstVisit', 'ok')
		this.setState({ showModal: false });
	}

	getfirstVisit(){

		if (!this.state.showModal && !sessionStorage.getItem('firstVisit')){
		
			this.setState({ showModal: true },)

		}

		
	}

	componentDidMount() {
		this.props.dispatch(fetchProtectedData());
	this.getfirstVisit();
	
	}


	render() {
	

		return (
			<div className="App">
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
						}}
					/>

					<MainSection />



					<ReactModal
					
						isOpen={this.state.showModal}
						contentLabel="onRequestClose Example"
						onRequestClose={this.handleCloseModal}
						shouldCloseOnOverlayClick={false}
						className="Modal"
					>
						<p>Modal text!</p>
						<button onClick={()=>{
								this.handleCloseModal();

						}
						
							}>Got It</button>
					</ReactModal>
				</section>
			</div>
		);
	}
}
//TODO: clean up state properties that are no longer needed
const mapStateToProps = (state) => {
	return {
		// modal: state.category.category,
		firstName: state.auth.currentUser.firstName,
		folders: state.protectedData.data
	};
};

ReactModal.setAppElement('#root');
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
