import React from 'react';
import { connect } from 'react-redux';
import {hideNavigation} from '../actions/nav-action'
import './css/userMenu.css'
 class UserMenu extends React.Component{

    render(){
        return(
            <div className='userMenu'>
                <button type='button' onClick={()=>{
                    console.log('back button working');
                    this.props.dispatch(hideNavigation())
                }}>
                
                BACK BUTTON</button>
                <div>
                <h1>HELLO USER NAME</h1>
            </div>
            </div>
           
        )
    }
}

const mapStateToProps = (state) => {
	return {
        search: state.search.searchTerm,
        loading: state.search.loading
	};
};
export default connect(mapStateToProps)(UserMenu)