import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, getSearchTerm } from '../actions/search-action';
import './css/search-form.css';
class SearchForm extends React.Component {
	render() {
		let searchTerm;
		return (
			<div className="character-search wrap">
				{/* When this form is submitted you should submit the
                    searchCharacters action */}
				<form className="search">
					
						<input placeholder='Click here to type and search a topic' className='searchInput' type="search" ref={(input) => (this.input = input)} />
    

						
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
			
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		search: state.search.searchTerm
	};
};
export default connect(mapStateToProps)(SearchForm);
