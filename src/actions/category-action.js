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
};

export const getBusHeadlines = ()=>(dispatch)=>{
    axios.get(`${SERVER}/api/newsflash/business`)
    .then(({data})=>{
        dispatch(getHeadlineArticles(data.articles));
    })
    .catch(error => console.log(error));

};

export const getHealthHeadlines = ()=>(dispatch)=>{
    axios.get(`${SERVER}/api/newsflash/health`)
    .then(({data})=>{
        dispatch(getHeadlineArticles(data.articles));
    })
    .catch(error => console.log(error));

};

export const getScienceHeadlines = ()=>(dispatch)=>{
    axios.get(`${SERVER}/api/newsflash/science`)
    .then(({data})=>{
        dispatch(getHeadlineArticles(data.articles));
    })
    .catch(error => console.log(error));

};

export const getSportsHeadlines = ()=>(dispatch)=>{
    axios.get(`${SERVER}/api/newsflash/sports`)
    .then(({data})=>{
        dispatch(getHeadlineArticles(data.articles));
    })
    .catch(error => console.log(error));

};
export const getTechHeadlines = ()=>(dispatch)=>{
    axios.get(`${SERVER}/api/newsflash/technology`)
    .then(({data})=>{
        dispatch(getHeadlineArticles(data.articles));
    })
    .catch(error => console.log(error));

};

export const getEntHeadlines = ()=>(dispatch)=>{
    axios.get(`${SERVER}/api/newsflash/entertainment`)
    .then(({data})=>{
        dispatch(getHeadlineArticles(data.articles));
    })
    .catch(error => console.log(error));

};