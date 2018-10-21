import { SEARCH_TERM, SEARCH_RESULTS, SEARCH_LOADING, SEARCH_RESET } from '../actions/search-action';

const initialState = {
	searchTerm: '',
	searchResults: [],
	searchloading: false
};

const searchReducer = (state = initialState, action) => {
	if (action.type === SEARCH_LOADING) {
		return Object.assign({}, state, { loading: true });
	} else if (action.type === SEARCH_TERM) {
		return Object.assign({}, state, { searchTerm: action.searchTerm, searchloading: true });
	} else if (action.type === SEARCH_RESULTS) {
		return Object.assign({}, state, { searchResults: action.searchResults, searchloading: false });
	} else if (action.type === SEARCH_RESET) {
		return Object.assign({}, state, { searchTerm: '', searchResults: [], searchloading: false });
	}
	return state;
};

export default searchReducer;
