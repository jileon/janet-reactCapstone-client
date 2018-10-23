import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import FolderAddToList from './folder-addToList';
import "./css/search-list.css"
class SearchRender extends React.Component {
	// componentDidMount(){
	//     this.props.dispatch(setSearchLoading());
	//     }

	renderResults() {
		if (this.props.loading) {
			return <Spinner spinnername="circle" fadeIn='none' />;
		}

		//TODO: Add error handling
		// if (this.props.error) {
		//     return <strong>{this.props.error}</strong>;
		// }

		const searchRes = this.props.searchResults.map((article, index) => (
			<li key={index} className='searchResult'>
				<article>
					<img src={article.urlToImage}></img>
					<a href={article.url} target="_blank" rel="noopener noreferrer">
					<h4>{article.title}</h4>
					</a>
						<p><strong>{article.source.name} </strong> </p>		
					<p>{article.description}</p>
					<FolderAddToList
					folders={this.props.folders}
					articletitle={article.title}
					articledescription={article.description}
					articleimage={article.urlToImage}
					articleurl={article.url}
					articlesource={article.source.name}
				/>
				</article>
			
			</li>


		));

		return <ul className="article-search-results">{searchRes}</ul>;
	}

	render() {
		return <section className='search-results-section'>

			<div  className='search-results-title'>
			<h2>Results For:  <strong>{this.props.search}</strong></h2>
				</div>
		
		{this.renderResults()}
		</section>;
	}
}

const mapStateToProps = (state) => {
	return {
		search: state.search.searchTerm,
		loading: state.search.searchloading,
		searchResults: state.search.searchResults,
		folders: state.protectedData.data
	};
};
export default connect(mapStateToProps)(SearchRender);
