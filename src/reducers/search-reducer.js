import {SEARCH_TERM, SEARCH_RESULTS, SEARCH_LOADING} from '../actions/search-action';

const initialState = {
    searchTerm: '',
    searchResults:[],
    loading: false
};

const searchReducer = (state=initialState, action)=>{
    if (action.type===SEARCH_LOADING){
        return Object.assign({}, state, {loading: true})
    } else if (action.type===SEARCH_TERM){
        return Object.assign({}, state, {searchTerm: action.searchTerm, loading:true})
    }else if (action.type===SEARCH_RESULTS){
            return Object.assign({}, state, {searchResults:action.searchResults, loading:false})
        }
    return state;
}

export default searchReducer;