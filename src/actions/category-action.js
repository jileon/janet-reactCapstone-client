import {SERVER} from '../config'
import axios from 'axios';

//TODO create and dispatch loading actions

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
    axios.get(`${SERVER}/newsflash/${category}`)
    .then(({data})=>{
        dispatch(setCategory(category));
        dispatch(getHeadlineArticles(data.articles));  
    })
    .catch(error => console.log(error));
};


// export const getHeadlines = ()=>(dispatch)=>{
//     dispatch(loadheadlines());
//     axios.get(`${SERVER}/newsflash/everything`)
//     .then(({data})=>{
//         // dispatch(setCategory('headlines'));
//         dispatch(getHeadlineArticles(data.articles));  
//     })
//     .catch(error => console.log(error));
// };

// export const getBusHeadlines = ()=>(dispatch)=>{

//     axios.get(`${SERVER}/newsflash/business`)
//     .then(({data})=>{

//         dispatch(getHeadlineArticles(data.articles));
//     })
//     .catch(error => console.log(error));

// };

// export const getHealthHeadlines = ()=>(dispatch)=>{

//     axios.get(`${SERVER}/newsflash/health`)
//     .then(({data})=>{

//         dispatch(getHeadlineArticles(data.articles));
//     })
//     .catch(error => console.log(error));

// };

// export const getScienceHeadlines = ()=>(dispatch)=>{

//     axios.get(`${SERVER}/newsflash/science`)
//     .then(({data})=>{
//         dispatch(getHeadlineArticles(data.articles));
//     })
//     .catch(error => console.log(error));

// };

// export const getSportsHeadlines = ()=>(dispatch)=>{

//     axios.get(`${SERVER}/newsflash/sports`)
//     .then(({data})=>{
//         dispatch(getHeadlineArticles(data.articles));
//     })
//     .catch(error => console.log(error));

// };
// export const getTechHeadlines = ()=>(dispatch)=>{
   
//     axios.get(`${SERVER}/newsflash/technology`)
//     .then(({data})=>{
//         dispatch(getHeadlineArticles(data.articles));
//     })
//     .catch(error => console.log(error));

// };

// export const getEntHeadlines = ()=>(dispatch)=>{

//     axios.get(`${SERVER}/newsflash/entertainment`)
//     .then(({data})=>{
//         dispatch(getHeadlineArticles(data.articles));
//     })
//     .catch(error => console.log(error));

// };