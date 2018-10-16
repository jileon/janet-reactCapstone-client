import {SEARCH_TERM, SEARCH_RESULTS} from '../actions/search-action';

const initialState = {
    searchTerm: '',
    searchResults:[],
};

const searchReducer = (state=initialState, action)=>{
    if (action.type===SEARCH_TERM){
        return Object.assign({}, state, {category:action.searchTerm})
    }else if (action.type===SEARCH_RESULTS){
            return Object.assign({}, state, {category:action.searchResults})
        }
    
    return state;
}

export default searchReducer;