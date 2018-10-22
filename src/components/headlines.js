import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import EverythingHeadlines from '../components/everything-headlines';
import { getHeadlines } from '../actions/category-action';

//FIXME: DELTE NO LONGER NECESSARY
// import BusinessHeadlines from '../components/business-headlines';
// import HealthHeadlines from './health-headlines';
// import ScienceHeadlines from './science-headlines';
// import SportsHeadlines from './sports-headlines';
// import TechHeadlines from './tech-headlines';
// import EntertainmentHeadlines from './entertainment-headlines';
import './css/headlines.css';

export class Headlines extends React.Component {
	componentDidMount(){
		this.props.dispatch(getHeadlines(this.props.category));
		console.log(this.props.category);
		}

	getCurrentDate() {
		const today = new Date();
		const dd = today.getDate();
		const mm = today.getMonth() + 1; //January is 0!
		const yyyy = today.getFullYear();

		return mm + '/' + dd + '/' + yyyy;
	}

	render() {
	
		if(this.props.categoryloading){
			return (<Spinner spinnername="circle" fadeIn='none' />);
		} else {
			return (<section className="headline-seaction">
			<h2> Top Headlines for {this.getCurrentDate()} </h2>
			<h2>Category: {this.props.category}</h2>
			<EverythingHeadlines/>
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
