import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
// import {getHeadlines}from '../actions/category-action';
import EverythingHeadlines from '../components/everything-headlines';
import BusinessHeadlines from '../components/business-headlines';
import HealthHeadlines from './health-headlines';
import ScienceHeadlines from './science-headlines';
import SportsHeadlines from './sports-headlines';
import TechHeadlines from './tech-headlines';
import EntertainmentHeadlines from './entertainment-headlines';
import './css/headlines.css';

export class Headlines extends React.Component {
	getCurrentDate() {
		const today = new Date();
		const dd = today.getDate();
		const mm = today.getMonth() + 1; //January is 0!
		const yyyy = today.getFullYear();

		return mm + '/' + dd + '/' + yyyy;
	}

	render() {
		//FIXME: Refactor to switch?
		let headlineList;
		 
		if (this.props.category === 'headlines') {
			headlineList = <EverythingHeadlines />;
		} else if (this.props.category === 'business') {
			headlineList = <BusinessHeadlines />;
		} else if (this.props.category === 'health') {
			headlineList = <HealthHeadlines />;
		} else if (this.props.category === 'science') {
			headlineList = <ScienceHeadlines />;
		} else if (this.props.category === 'sports') {
			headlineList = <SportsHeadlines />;
		} else if (this.props.category === 'technology') {
			headlineList = <TechHeadlines />;
		} else if (this.props.category === 'entertainment') {
			headlineList = <EntertainmentHeadlines />;
		}

		if(this.props.categoryloading){
			return (<Spinner spinnername="circle" fadeIn='none' />);
		} else {
			return (<section className="headline-seaction">
			<h2> Top Headlines for {this.getCurrentDate()} </h2>
			<h2>Category: {this.props.category}</h2>
			{headlineList}
		</section>
	)
		}
		
	}
}

const mapStateToProps = (state) => {
	return {
		category: state.category.category,
		headlines: state.category.headlines,
		categoryloading: state.category.loading
	};
};
export default connect(mapStateToProps)(Headlines);
