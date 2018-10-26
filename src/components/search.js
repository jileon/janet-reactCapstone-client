import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, getSearchTerm } from '../actions/search-action';
import './css/search-form.css';
class SearchForm extends React.Component {
	render() {
		let searchTerm;
		return (
			<section className="character-search wrap">

				<form className="search">

				<label htmlFor="search">Search</label>
				<input name = 'Search' placeholder='Click here to type and search a topic' className='searchInput' type="search" ref={(input) => (this.input = input)} />
    
						<button
							type="submit"
							className="submitButton"
							onClick={(e) => {
								e.preventDefault();
								searchTerm = this.input.value;
								this.props.dispatch(setSearchTerm(searchTerm));
								this.props.dispatch(getSearchTerm(searchTerm, 1));
								this.input.value='';
							}}
						>
							<p> Search</p>
						</button>
				</form>
			
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		search: state.search.searchTerm
	};
};
export default connect(mapStateToProps)(SearchForm);
