import React from 'react';
import { connect } from 'react-redux';
import Headlines from './headlines';
import SearchRender from './searchRender'

function MainSection(props) {
	if (props.search === '') {
		return (<Headlines/>)
	}else{
        return (<SearchRender/>)

    }
}

const mapStateToProps = (state) => {
	return {
		search: state.search.searchTerm
	};
};
export default connect(mapStateToProps)(MainSection);
