import {SERVER} from '../config'
import axios from 'axios';
export const CATEGORY= 'CATEGORY';
export const getCategory = category => ({
    type: CATEGORY,
    category
});

export const HEADLINES= 'HEADLINES';
export const getHeadlineArticles = headlines => ({
    type: HEADLINES,
    headlines
});


export const getHeadlines = ()=>(dispatch)=>{

    axios.get(`${SERVER}/api/newsflash/everything`)
    .then(({data})=>{
        dispatch(getCategory('headlines'));
        dispatch(getHeadlineArticles(data.articles));
    
    })
    .catch(error => console.log(error));

// return fetch(`${SERVER}/api/newsflash/everything`,{
//     method: 'GET'
// })
// .then(res => res.json())
// .then((res)=>{
//     dispatch(getCategory('headlines'));
//     dispatch(getHeadlineArticles(res.articles));

// })

};

export const getBusHeadlines = ()=>(dispatch)=>{

    axios.get(`${SERVER}/api/newsflash/business`)
    .then(({data})=>{
        dispatch(getHeadlineArticles(data.articles));
    
    })
    .catch(error => console.log(error));

};