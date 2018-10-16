import {SERVER} from '../config'
import axios from 'axios';

export const SEARCH_TERM = 'SEARCH_TERM';
export const setSearchTerm = (searchterm)=>{
return {
    type: SEARCH_TERM,
    searchterm
}
}

export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const searchResults = (searchResults)=>{
return {
    type: SEARCH_RESULTS,
   searchResults
}
}