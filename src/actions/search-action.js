import {SERVER} from '../config'
import axios from 'axios';

export const SEARCH_TERM = 'SEARCH_TERM';
export const setSearchTerm = searchTerm=>{
return {
    type: SEARCH_TERM,
    searchTerm
}
}

export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const setSearchResults = searchResults=>{
return {
    type: SEARCH_RESULTS,
   searchResults
}
}


export const SEARCH_LOADING = 'SEARCH_LOADING';
export const setSearchLoading = ()=>({
    type:SEARCH_LOADING
});


export const getSearchTerm = (search, pageNum)=>(dispatch)=>{
   dispatch(setSearchLoading());
    axios({
        method: 'get',
        url: `${SERVER}/api/newsflash/search`,
        params: {
         searchTerm: search,
         page: pageNum
        }
      })
      .then((res)=>dispatch(setSearchResults(res.data.articles)))

    .catch(error => console.log(error));
};