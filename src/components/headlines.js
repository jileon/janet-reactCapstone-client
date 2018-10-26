import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import EverythingHeadlines from '../components/everything-headlines';
import { getHeadlines } from '../actions/category-action';

import './css/headlines.css';

export class Headlines extends React.Component {
	componentDidMount() {
		this.props.dispatch(getHeadlines(this.props.category));
	}

	render() {
		if (this.props.categoryloading) {
			return <Spinner spinnername="circle" fadeIn="none" />;
		} else {
			return (
				<section className={this.props.className}>
					<EverythingHeadlines />
				</section>
			);
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
