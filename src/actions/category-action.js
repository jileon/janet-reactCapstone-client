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
        console.log(data);
        dispatch(getCategory('headlines'));
        dispatch(getHeadlineArticles(data.articles));
    
    })
    .catch(error => error.status(500).json(error));

// return fetch(`${SERVER}/api/newsflash/everything`,{
//     method: 'GET'
// })
// .then(res => res.json())
// .then((res)=>{
//     dispatch(getCategory('headlines'));
//     dispatch(getHeadlineArticles(res.articles));

// })

};