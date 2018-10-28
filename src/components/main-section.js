import React from 'react';
import { connect } from 'react-redux';
import Headlines from './headlines';
import SearchRender from './searchRender'


export class MainSection extends React.Component {
	render(){


	if (this.props.search === '' && !this.props.expandedNav) {
	return (<Headlines className="main-section-collapsed"/>)
	}	
	if((this.props.search === '' && this.props.expandedNav)){
		return <Headlines className="main-section-expanded"/>
	}
	if((this.props.search !== '' && !this.props.expandedNav)){
		return <SearchRender className="search-section"/>
	}
	if((this.props.search !== '' && this.props.expandedNav)){
		return <SearchRender className="search-section-expanded"/>
	}
	
	}
}
	
	const mapStateToProps = (state) => {
	return {
        search: state.search.searchTerm,
	loading: state.search.searchloading,
	expandedNav: state.nav.expandedNav
	};
	};
	export default connect(mapStateToProps)(MainSection);