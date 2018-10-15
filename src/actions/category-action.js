import {API_KEY} from '../config'

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
return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,{
    method: 'GET'
})
.then(res => res.json())
.then((res)=>{
    dispatch(getCategory('headlines'));
    dispatch(getHeadlineArticles(res.articles));

})

};