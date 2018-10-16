import React from 'react';
import {connect } from 'react-redux';
import {setSearchTerm, getSearchTerm} from '../actions/search-action'

class SearchForm extends React.Component{
    render(){
        let searchTerm;
        return (
            <div className="character-search">
                {/* When this form is submitted you should submit the
                    searchCharacters action */}
                <form>
                    <input type="search" ref={input => (this.input = input)}/>
                    <button onClick= {(e)=>{
                    e.preventDefault()
                    searchTerm=this.input.value;
                        this.props.dispatch(setSearchTerm(this.input.value));
                        this.props.dispatch(getSearchTerm(searchTerm, 2));
                    }}>

                    Search
                    </button>
                </form>
              
            </div>
        );
    
    }
}

const mapStateToProps = state => {
    return {
        search: state.search.searchTerm
    
    };
  };
  export default connect(mapStateToProps)(SearchForm);