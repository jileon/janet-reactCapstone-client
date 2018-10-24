import {SERVER} from '../config'
import axios from 'axios';

//TODO: create and dispatch loading actions

export const CATEGORY= 'CATEGORY';
export const setCategory = category => ({
    type: CATEGORY,
    category
});

export const HEADLINES= 'HEADLINES';
export const getHeadlineArticles = headlines => ({
    type: HEADLINES,
    headlines,
    loading:false
});

export const HEADLINES_LOADING= 'HEADLINES_LAODING';
export const loadheadlines = () => ({
    type: HEADLINES_LOADING

});

export const getHeadlines = (category)=>(dispatch)=>{
    dispatch(loadheadlines());
    axios.get(`${SERVER}/api/newsflash/${category}`)
    .then(({data})=>{
        dispatch(setCategory(category));
        dispatch(getHeadlineArticles(data.articles));  
    })
    .catch(error => console.log(error));
};
