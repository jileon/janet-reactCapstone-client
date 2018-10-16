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

export const getSearchTerm = (search, pageNum)=>(dispatch)=>{

    axios({
        method: 'get',
        url: `${SERVER}/api/newsflash/search`,
        params: {
         searchTerm: search,
         page: pageNum
        }
      })
      .then((res)=>console.log(res.data))

    // axios.get(`${SERVER}/api/newsflash/search`,{hello:'hello'})
    // .then(({data})=>{
    //     // dispatch(getCategory('headlines'));
    //     // dispatch(getHeadlineArticles(data.articles));  
    //     console.log(data);
    // })
    .catch(error => console.log(error));
};