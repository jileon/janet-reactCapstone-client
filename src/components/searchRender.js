import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';


class SearchRender extends React.Component{
    // componentDidMount(){
    //     this.props.dispatch(setSearchLoading());
    //     }


        renderResults() {
            if (this.props.loading) {
                return <Spinner spinnerName="circle" noFadeIn />;
                // return<div>Loading..</div>
            }
    
            // if (this.props.error) {
            //     return <strong>{this.props.error}</strong>;
            // }
    
            const searchRes = this.props.searchResults.map((article, index) => (
                <li key={index}>
                <div>
                <a href={article.url}>
                <h3> {article.source.name}</h3>
                <h4>{article.title}</h4>
                </a>
                <p>{article.description}</p>
                </div>
               
                </li>
            ));
       
            return <ul className="article-search-results">{searchRes}</ul>;
                
                
    
        }

    render(){
    
         return(<div>{this.renderResults()}</div>) 
     
    }
}

const mapStateToProps = (state) => {
	return {
        search: state.search.searchTerm,
        loading: state.search.loading.search,
        searchResults: state.search.searchResults
	};
};
export default connect(mapStateToProps)(SearchRender);