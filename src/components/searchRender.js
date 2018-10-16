import React from 'react';
import Spinner from 'react-spinkit';
import {connect} from 'react-redux';
import {setSearchLoading} from '../actions/search-action'

class SearchRender extends React.Component{
    // componentDidMount(){
    //     this.props.dispatch(setSearchLoading());
    //     }


        renderResults() {
            if (this.props.loading) {
                return <Spinner spinnerName="circle" noFadeIn />;
            }
    
            // if (this.props.error) {
            //     return <strong>{this.props.error}</strong>;
            // }
    
            // const characters = this.props.characters.map((character, index) => (
            //     <li key={index}>{character}</li>
            // ));
       
            // return <ul className="character-search-results">'else'</ul>;
                return <div>ELSE</div>
                
    
        }

    render(){
    
         return(<div>{this.renderResults()}</div>) 
     
    }
}

const mapStateToProps = (state) => {
	return {
        search: state.search.searchTerm,
        loading: state.search.loading
	};
};
export default connect(mapStateToProps)(SearchRender);