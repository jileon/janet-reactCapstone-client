import React from 'react';
import { connect } from 'react-redux';

 class UserMenu extends React.Component{

    render(){
        return(
            <div>
                <button type='button' onClick={()=>console.log('back button working')}>BACK BUTTON</button>
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