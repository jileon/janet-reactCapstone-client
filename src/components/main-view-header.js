import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './search';
import './css/main-view-header.css';

export class MainSectionHeader extends React.Component {


	getCurrentDate() {
		const today = new Date();
		const dd = today.getDate();
		const mm = today.getMonth() + 1; //January is 0!
		const yyyy = today.getFullYear();

		return mm + '/' + dd + '/' + yyyy;
	}

	render() {
        if (this.props.search===''){
            return (

                <header role= 'banner' className={this.props.mainHeaderClass}>
                <h2> Top Headlines for {this.getCurrentDate()} </h2>
                <h2>Category: {this.props.category}</h2>
                <SearchForm/>
            </header>
        )
        } else{
            return (

<header role = 'banner' className={this.props.mainHeaderClass}>
			<h2>Results For:</h2>
			<h2>{this.props.search}</h2>
			<SearchForm/>
			</header>
        )
        }
		
		
		
	}
}

const mapStateToProps = (state) => {
	return {
		category: state.category.category,
		headlines: state.category.headlines,
        categoryloading: state.category.loading,
        search: state.search.searchTerm,
	};
};
export default connect(mapStateToProps)(MainSectionHeader);
