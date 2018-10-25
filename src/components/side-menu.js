import React from 'react';
import { connect } from 'react-redux';
import { showNavigation } from '../actions/nav-action';
import SideMenuExpanded from './side-menu-expanded';
import SideNav  from './side-nav'

export class SideMenu extends React.Component {
render(){
    if (this.props.expandedNav === true) {
		return (<SideMenuExpanded/>)
	}else{
        return (<SideNav onClick={()=>this.props.dispatch(showNavigation())}/>)

    }
}
}

const mapStateToProps = (state) => {
	return {
        expandedNav: state.nav.expandedNav
	};
};
export default connect(mapStateToProps)(SideMenu);
